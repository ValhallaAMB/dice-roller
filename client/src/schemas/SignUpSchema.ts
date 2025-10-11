import z from "zod";

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(
      /^[A-Za-z][A-Za-z0-9\-]+$/,
      "Username can only contain letters, numbers, hyphens",
    )
    .max(255)
    .trim()
    .toLowerCase(),
  email: z.email("Valid email address is required").max(255),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must contain at least one number",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: "Password must contain at least one special character",
    }),
});

export type SignUpForm = z.infer<typeof SignUpSchema>;
