import { NextResponse } from "next/server";
import { getArticles } from "@/app/lib/prisma/articles";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page");
        const { articles, totalArticles, error } = await getArticles(+page);

        if (error) {
            return NextResponse.json(error);
        }
        return NextResponse.json({ articles, totalArticles });
    } catch {
        return NextResponse.json({ error: error.message });
    }
}
