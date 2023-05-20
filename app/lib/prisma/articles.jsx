import prisma from ".";
import { Prisma } from "@prisma/client";

export async function getArticles() {
    try {
        const articles = await prisma.article.findMany();
        return { articles };
    } catch (error) {
        return { error };
    }
}

export async function createArticle(article) {
    try {
        const createdArticle = await prisma.article.create({ data: article });
        return { article: createdArticle };
    } catch (error) {
        return { error };
    }
}

export async function getArticleById(id) {
    try {
        const article = await prisma.article.findUnique({ where: { id } });
        return { article };
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2023") return { error: 404 };
            else return { error: 500 };
        }
        return { error };
    }
}
