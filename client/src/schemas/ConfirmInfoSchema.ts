import z from "zod";

export const ConfirmInfoSchema = z.object({
  email: z.email().max(255),
  code: z
    .string()
    .regex(/^[0-9]+$/, "Code must contain only numbers")
    .length(6, "Code must be 6 digits long"),
});

export type ConfirmInfoForm = z.infer<typeof ConfirmInfoSchema>;
