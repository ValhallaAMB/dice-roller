import { z } from "zod";

export const ProfileEditSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Valid email address is required").max(255),
    pfp: z.preprocess(
      (raw: any) => {
        if (raw instanceof FileList) {
          return raw.length > 0 ? raw.item(0) : "";
        }
        return raw;
      },
      z
        .file()
        .mime(["image/jpeg", "image/png", "image/jpg"])
        .or(z.string().default(""))
    ),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Handle the case where user starts typing in password fields
    const hasPassword = data.password && data.password.length > 0;
    const hasConfirmPassword = data.confirmPassword && data.confirmPassword.length > 0;

    // If neither field has content, we're done - passwords are truly optional
    if (!hasPassword && !hasConfirmPassword) {
      return;
    }

    // If only one field is filled, that's an error
    if (hasPassword && !hasConfirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Please confirm your password",
        path: ["confirmPassword"],
      });
      return;
    }

    if (!hasPassword && hasConfirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter a password",
        path: ["password"],
      });
      return;
    }

    // Now we know both fields have content, so validate the password
    const password = data.password!;

    // Check minimum length
    if (password.length < 8) {
      ctx.addIssue({
        code: "custom",
        message: "Password must be at least 8 characters long",
        path: ["password"],
      });
    }

    // Check for uppercase letter
    else if (!/[A-Z]/.test(password)) {
      ctx.addIssue({
        code: "custom",
        message: "Password must contain at least one uppercase letter",
        path: ["password"],
      });
    }

    // Check for lowercase letter
    else if (!/[a-z]/.test(password)) {
      ctx.addIssue({
        code: "custom",
        message: "Password must contain at least one lowercase letter",
        path: ["password"],
      });
    }

    // Check for number
    else if (!/[0-9]/.test(password)) {
      ctx.addIssue({
        code: "custom",
        message: "Password must contain at least one number",
        path: ["password"],
      });
    }

    // Check for special character
    else if (!/[!@#$%^&*]/.test(password)) {
      ctx.addIssue({
        code: "custom",
        message: "Password must contain at least one special character",
        path: ["password"],
      });
    }

    // Check if passwords match
    else if (password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type ProfileEditForm = z.infer<typeof ProfileEditSchema>;