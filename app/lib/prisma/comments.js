import prisma from ".";
import { Prisma } from "@prisma/client";

export async function createComment(commentForm, articleId) {
  try {
    const { email, name, content } = commentForm;

    const user = await prisma.user.findUnique({
      where: {
        id: "653a9849ee189c6ba140f28e", // id Usera, który jest ma typ enum Guest - rozwiązanie tymczasowe dopóki nie będzie opcji logowania na stronie
      },
    });

    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    await prisma.comment.create({
      data: {
        content,
        authorId: user.id,
        articleId: article.id,
        guestName: name,
        guestEmail: email,
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
