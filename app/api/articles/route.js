import { NextResponse } from "next/server";
import { getArticles } from "@/prisma/articles";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const page = searchParams.get("page");
    const limit = searchParams.get("limit");

    const { articles, totalArticles, error } = await getArticles(+page, +limit);

    if (error) {
      return NextResponse.json(error);
    }
    return NextResponse.json({ articles, totalArticles });
  } catch {
    return NextResponse.json({ error: error.message });
  }
}
