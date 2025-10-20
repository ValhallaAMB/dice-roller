import z from "zod";

export const ChangePasswordSchema = z
  .object({
    oldPassword: z.string(),
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
    newConfirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.newConfirmPassword, {
    message: "New passwords don't match",
    path: ["newConfirmPassword"],
  });

export type ChangePasswordForm = z.infer<typeof ChangePasswordSchema>;
