import { NextResponse } from "next/server";
import { getPopularArticles } from "@/prisma/articles";

export async function GET(request) {
  try {
    const { popularArticles, error } = await getPopularArticles();

    if (error) {
      return NextResponse.json(error);
    }
    return NextResponse.json({ popularArticles });
  } catch {
    return NextResponse.json({ error: error.message });
  }
}
