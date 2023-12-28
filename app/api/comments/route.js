import { NextResponse } from "next/server";
import { commentFormValidation } from "@/validation/commentFormValidation";
import { createComment } from "@/prisma/comments";

export async function POST(request) {
  try {
    const commentData = await request.json();
    const { commentForm, articleId } = commentData;
    const { error } = commentFormValidation(commentForm);

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
      const { error } = await createComment(commentForm, articleId);

      return NextResponse.json({
        error,
      });
    }
  } catch {
    return NextResponse.json({ error: error.message });
  }
}
