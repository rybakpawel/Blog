import { NextResponse } from "next/server";
import { getArticles } from "@/prisma/articles";
import { articleFormValidation } from "@/validation/articleFormValidation";
import { createArticle } from "@/prisma/articles";

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

export async function POST(request) {
  try {
    const articleData = await request.json();

      const { error } = articleFormValidation(articleData);

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
        const { error } = await createArticle(articleData);

        return NextResponse.json({
          error,
        });
      }
  } catch {
    return NextResponse.json({ error: error.message });
  }
}
