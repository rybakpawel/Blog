import { NextResponse } from "next/server";
import { getArticleById } from "@/app/lib/prisma/articles";

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const { article, error } = await getArticleById(id);
        if (error) {
            return NextResponse.json(error);
        }
        return NextResponse.json(article);
    } catch {
        return NextResponse.json(error);
    }
}
