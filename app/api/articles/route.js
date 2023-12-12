import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises'
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
    const formData = await request.formData();
    const articleData = {
      title: formData.get('title'),
      mainImage: formData.get('mainImage'),
      content: formData.get('content'),
      authorId: formData.get('authorId'),
      category: formData.get('category')
    }
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

        const bytes = await articleData.mainImage.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const path = `"@/public/${articleData.mainImage.name}`
        await writeFile(path, buffer)  /// tu wywala błęden
        console.log('po write file')
        return NextResponse.json({
          error,
        });
      }
  } catch {
    return NextResponse.json({ error: error.message });
  }
}
