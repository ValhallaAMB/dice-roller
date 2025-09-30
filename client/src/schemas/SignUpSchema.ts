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
  //   password: z.string().min(6).max(100),
});

export type SignUpForm = z.infer<typeof SignUpSchema>;
