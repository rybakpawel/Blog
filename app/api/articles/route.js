import { NextResponse } from "next/server";
import { getArticles } from "@/app/lib/prisma/articles";

export async function GET(request) {
    try {
        const { articles, error } = await getArticles();
        if (error) throw new Error(error);
        return NextResponse.json(articles);
    } catch {
        return NextResponse.json({ error: error.message });
    }
}
