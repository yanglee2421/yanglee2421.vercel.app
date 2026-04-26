import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignupSchema = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type LoginSchema = z.infer<typeof loginSchema>;
