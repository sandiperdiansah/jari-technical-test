"use server";

import { sendMessageSchema } from "@/features/message/validations";
import prisma from "@/lib/prisma";

export const sendMessageAction = async (prev: unknown, formData: FormData) => {
    const payload = sendMessageSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    });

    if (!payload.success) {
        return {
            success: false,
            errors: payload.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.message.create({ data: payload.data });

        return { success: true };
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Failed to send message";
        return {
            success: false,
            errors: {
                general: errorMessage,
            },
        };
    }
};
