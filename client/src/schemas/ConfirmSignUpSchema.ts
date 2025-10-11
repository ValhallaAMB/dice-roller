import z from "zod";

export const ConfirmSignUpSchema = z.object({
  email: z.email().max(255),
  code: z
    .string()
    .length(6, "Code must be 6 characters long")
    .refine((code) => /^[0-9]+$/.test(code), {
      message: "Code must contain only numbers",
    }),
});

export type ConfirmSignUpForm = z.infer<typeof ConfirmSignUpSchema>;
