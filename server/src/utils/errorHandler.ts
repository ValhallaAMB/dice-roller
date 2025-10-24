import { Prisma } from "generated/prisma/index.js";
import "dotenv/config";

export type ErrorResponse = {
  message: string;
  code: string;
  details?: string | undefined;
  field?: string | undefined;
};

type ErrorHandlerConfig = {
  isDevelopment?: boolean;
  logError?: boolean;
};

const FIELD_NAMES: Record<string, string> = {
  cognitoSub: "Cognito ID",
  userId: "User",
};

export default function errorHandler(
  error: unknown,
  config: ErrorHandlerConfig = {}
): { status: number; error: ErrorResponse } {
  const {
    isDevelopment = String(process.env.ARCJET_ENV) === "development",
    logError = true,
  } = config;

  if (logError && isDevelopment) {
    console.error("Prisma Error:", error);
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return handleKnownRequestError(error, isDevelopment);
  }

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

  if (error instanceof Prisma.PrismaClientRustPanicError) {
    return {
      status: 500,
      error: {
        message: "Database error occurred",
        code: "DATABASE_PANIC_ERROR",
        details: isDevelopment ? error.message : undefined,
      },
    };
  }

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

function handleKnownRequestError(
  error: Prisma.PrismaClientKnownRequestError,
  isDevelopment: boolean
): { status: number; error: ErrorResponse } {
  switch (error.code) {
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
            ? `Unique constraint failed on: ${target?.join(", ")}`
            : undefined,
        },
      };
    }

    case "P2003": {
      const fieldName = error.meta?.field_name as string | undefined;
      return {
        status: 400,
        error: {
          message: "Invalid reference to related record",
          code: "FOREIGN_KEY_CONSTRAINT_VIOLATION",
          field: fieldName,
          details: isDevelopment
            ? `Foreign key constraint failed on: ${fieldName}`
            : undefined,
        },
      };
    }

    case "P2025":
    case "P2016": {
      return {
        status: 404,
        error: {
          message: "Record not found",
          code: "RECORD_NOT_FOUND",
          details: isDevelopment ? (error.meta?.cause as string) : undefined,
        },
      };
    }

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

    case "P2000": {
      const column = error.meta?.column_name as string | undefined;
      return {
        status: 400,
        error: {
          message: "Value is too long",
          code: "VALUE_TOO_LONG",
          field: column,
          details: isDevelopment ? `Value too long for: ${column}` : undefined,
        },
      };
    }

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