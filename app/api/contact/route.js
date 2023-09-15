import { NextResponse } from "next/server";
import { contactFormValidation } from "@/app/validation/contactFormValidation";
import { createContactMessage } from "@/app/lib/prisma/contact";

export async function POST(request) {
    try {
        const contactForm = await request.json();
        const { error } = contactFormValidation(contactForm);

        if (error) {
            const locations = [];
            error.details.forEach((detail) => {
                locations.push({
                    label: detail.context.label,
                    message: detail.message,
                });
            });

            return NextResponse.json({
                error: 400,
                locations,
            });
        } else {
            const { error } = await createContactMessage(contactForm);

            return NextResponse.json({
                error,
            });
        }
    } catch {
        return NextResponse.json({ error: error.message });
    }
}
