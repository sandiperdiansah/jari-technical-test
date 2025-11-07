import { z } from "zod";

export const sendMessageSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email({
        error: (issue) =>
            issue.input === undefined ? "Email is required" : "Invalid email address",
    }),
    phone: z
        .string({
            error: (issue) =>
                issue.input === undefined ? "Phone is required" : "Invalid phone number",
        })
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be at most 15 digits"),
    message: z.string().min(10, "Message is required"),
});
