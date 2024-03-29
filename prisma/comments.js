import prisma from ".";
import { Prisma } from "@prisma/client";

export async function createComment(commentForm, articleId) {
  try {
    const { email, name, avatar, content } = commentForm;

    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    await prisma.comment.create({
      data: {
        content,
        authorName: name,
        authorEmail: email,
        authorAvatar: avatar,
        articleId: article.id,
      },
    });

    return {
      error: false,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2023")
        return {
          error: 404,
        };
      else
        return {
          error: 500,
        };
    }
    return {
      error: error.code,
    };
  }
}

export async function getCommentsById(articleId) {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        articleId,
      },
      orderBy: {
        id: "desc",
      },
    });

    return { comments };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2023") return { error: 404 };
      else return { error: 500 };
    }
    return { error };
  }
}
