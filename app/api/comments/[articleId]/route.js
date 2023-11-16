import { NextResponse } from "next/server";
import { getCommentsById } from "@/prisma/comments";

export async function GET(request, { params }) {
  try {
    const { articleId } = params;
    const { comments, error } = await getCommentsById(articleId);

    if (error) {
      return NextResponse.json(error);
    }
    return NextResponse.json({ comments });
  } catch {
    return NextResponse.json({ error: error.message });
  }
}
