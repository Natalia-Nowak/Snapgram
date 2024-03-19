import { z } from "zod";

export const SignupValidationSchema = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2).max(50),
});
