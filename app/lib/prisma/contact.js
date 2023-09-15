import prisma from ".";
import { Prisma } from "@prisma/client";

export async function createContactMessage(contactForm) {
    try {
        await prisma.contactMessage.create({
            data: contactForm,
        });
        return {
            error: false,
        };
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2023")
                return {
                    error: 404,
                };
            else
                return {
                    error: 500,
                };
        }
        return {
            error: error.code,
        };
    }
}
