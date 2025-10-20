import z from "zod";

export const ConfirmForgotPasswordSchema = z
  .object({
    email: z.email("Invalid email address").max(255, "Email is too long"),
    code: z
      .string()
      .regex(/^[0-9]+$/, "Code must contain only numbers")
      .length(6, "Code must be 6 digits long"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[^\s]/, "Password cannot contain spaces")
      .regex(
        /^(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter",
      )
      .regex(
        /^(?=.*[a-z])/,
        "Password must contain at least one lowercase letter",
      )
      .regex(/^(?=.*[0-9])/, "Password must contain at least one number")
      .regex(
        /^(?=.*[!@#$%^&*])/,
        "Password must contain at least one special character",
      ),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New passwords don't match",
    path: ["confirmNewPassword"],
  });

export type ConfirmForgotPasswordForm = z.infer<
  typeof ConfirmForgotPasswordSchema
>;
