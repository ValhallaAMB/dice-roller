import { Prisma } from "generated/prisma/index.js";
import "dotenv/config";

/**
 * Structured error response for API endpoints
 */
export type ErrorResponse = {
  message: string; // User-friendly message
  code: string; // Error code for frontend handling
  details?: string | undefined; // Technical details for debugging (dev mode only)
  field?: string | undefined; // Field that caused the error (if applicable)
};

/**
 * Configuration for error handler
 */
type ErrorHandlerConfig = {
  isDevelopment?: boolean | undefined; // Include technical details in response
  logError?: boolean | undefined; // Log errors to console
};

/**
 * Map of unique constraint field names to user-friendly names
 */
const FIELD_NAMES: Record<string, string> = {
  email: "Email address",
  username: "Username",
  userId: "User",
};

/**
 * Handles Prisma errors and returns structured error responses
 *
 * @param error - The error object from Prisma
 * @param config - Configuration options
 * @returns Structured error response with appropriate HTTP status code
 */
export default function errorHandler(
  error: unknown,
  config: ErrorHandlerConfig = {}
): { status: number; error: ErrorResponse } {
  const {
    isDevelopment = process.env.ARCJET_ENV === "development",
    logError = true,
  } = config;

  // Log error in development mode
  if (logError && isDevelopment) {
    console.error("Prisma Error:", error);
  }

  // Handle Prisma Client Known Request Errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return handleKnownRequestError(error, isDevelopment);
  }

  // Handle Prisma Client Validation Errors
  if (error instanceof Prisma.PrismaClientValidationError) {
    return {
      status: 400,
      error: {
        message: "Invalid data provided",
        code: "VALIDATION_ERROR",
        details: isDevelopment ? error.message : undefined,
      },
    };
  }

  // Handle Prisma Client Initialization Errors
  if (error instanceof Prisma.PrismaClientInitializationError) {
    return {
      status: 503,
      error: {
        message: "Database connection failed",
        code: "DATABASE_CONNECTION_ERROR",
        details: isDevelopment ? error.message : undefined,
      },
    };
  }

  // Handle Prisma Client Rust Panic Errors
  if (error instanceof Prisma.PrismaClientRustPanicError) {
    return {
      status: 500,
      error: {
        message: "An unexpected database error occurred",
        code: "DATABASE_PANIC_ERROR",
        details: isDevelopment ? error.message : undefined,
      },
    };
  }

  // Handle unknown errors
  return {
    status: 500,
    error: {
      message: "An unexpected error occurred",
      code: "INTERNAL_SERVER_ERROR",
      details:
        isDevelopment && error instanceof Error ? error.message : undefined,
    },
  };
}

/**
 * Handles Prisma Client Known Request Errors with specific error codes
 */
function handleKnownRequestError(
  error: Prisma.PrismaClientKnownRequestError,
  isDevelopment: boolean
): { status: number; error: ErrorResponse } {
  switch (error.code) {
    // Unique constraint violation
    case "P2002": {
      const target = error.meta?.target as string[] | undefined;
      const field = target?.[0];
      const fieldName = field ? FIELD_NAMES[field] || field : "This value";

      return {
        status: 409,
        error: {
          message: `${fieldName} already exists`,
          code: "UNIQUE_CONSTRAINT_VIOLATION",
          field: field,
          details: isDevelopment
            ? `Unique constraint failed on field: ${target?.join(", ")}`
            : undefined,
        },
      };
    }

    // Foreign key constraint violation
    case "P2003": {
      const fieldName = error.meta?.field_name as string | undefined;
      return {
        status: 400,
        error: {
          message: "Invalid reference to related record",
          code: "FOREIGN_KEY_CONSTRAINT_VIOLATION",
          field: fieldName,
          details: isDevelopment
            ? `Foreign key constraint failed on field: ${fieldName}`
            : undefined,
        },
      };
    }

    // Record not found
    case "P2025": {
      return {
        status: 404,
        error: {
          message: "Record not found",
          code: "RECORD_NOT_FOUND",
          details: isDevelopment ? (error.meta?.cause as string) : undefined,
        },
      };
    }

    // Record to delete does not exist
    case "P2016": {
      return {
        status: 404,
        error: {
          message: "Record not found",
          code: "RECORD_NOT_FOUND",
          details: isDevelopment
            ? "Record to delete does not exist"
            : undefined,
        },
      };
    }

    // Required value missing
    case "P2011": {
      const constraint = error.meta?.constraint as string | undefined;
      return {
        status: 400,
        error: {
          message: "Required field is missing",
          code: "REQUIRED_FIELD_MISSING",
          details: isDevelopment
            ? `Null constraint violation on ${constraint}`
            : undefined,
        },
      };
    }

    // Value too long for column
    case "P2000": {
      const column = error.meta?.column_name as string | undefined;
      return {
        status: 400,
        error: {
          message: "Value is too long",
          code: "VALUE_TOO_LONG",
          field: column,
          details: isDevelopment
            ? `Value too long for column: ${column}`
            : undefined,
        },
      };
    }

    // Invalid value for column type
    case "P2007": {
      return {
        status: 400,
        error: {
          message: "Invalid data type provided",
          code: "INVALID_DATA_TYPE",
          details: isDevelopment ? error.message : undefined,
        },
      };
    }

    // Query interpretation error
    case "P2009":
    case "P2012": {
      return {
        status: 400,
        error: {
          message: "Invalid query parameters",
          code: "INVALID_QUERY",
          details: isDevelopment ? error.message : undefined,
        },
      };
    }

    // Transaction failed
    case "P2034": {
      return {
        status: 409,
        error: {
          message: "Transaction conflict occurred",
          code: "TRANSACTION_CONFLICT",
          details: isDevelopment ? "Write conflict or deadlock" : undefined,
        },
      };
    }

    // Dependent records exist (cascade delete would fail)
    case "P2014": {
      return {
        status: 400,
        error: {
          message: "Cannot delete record with existing dependencies",
          code: "DEPENDENT_RECORDS_EXIST",
          details: isDevelopment
            ? (error.meta?.relation_name as string)
            : undefined,
        },
      };
    }

    // Default case for other known errors
    default: {
      return {
        status: 500,
        error: {
          message: "A database error occurred",
          code: error.code,
          details: isDevelopment ? error.message : undefined,
        },
      };
    }
  }
}

/**
 * Express middleware for handling Prisma errors
 *
 * Usage in your route:
 * ```
 * app.post('/api/users', async (req, res) => {
 *   try {
 *     const user = await prisma.user.create({ data: req.body });
 *     res.json(user);
 *   } catch (error) {
 *     const { status, error: errorResponse } = handlePrismaError(error);
 *     res.status(status).json(errorResponse);
 *   }
 * });
 * ```
 */
// export function prismaErrorMiddleware(
//   error: unknown,
//   isDevelopment?: boolean
// ): { status: number; error: ErrorResponse } {
//   return errorHandler(error, { isDevelopment });
// }
