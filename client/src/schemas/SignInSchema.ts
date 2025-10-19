import { z } from "zod";

export const SignInSchema = z.object({
  email: z.email("Valid email address is required").max(255),
  password: z.string(),
});

export type SignInForm = z.infer<typeof SignInSchema>;
