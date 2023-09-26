import prisma from ".";
import { Prisma } from "@prisma/client";

export async function getArticles(page, limit) {
    const skip = (page - 1) * limit;

    try {
        const [articles, totalArticles] = await prisma.$transaction([
            prisma.article.findMany({
                skip,
                take: limit,
                orderBy: {
                    id: "desc",
                },
            }),
            prisma.article.count(),
        ]);
        return { articles, totalArticles };
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2023") return { error: 404 };
            else return { error: 500 };
        }
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

export async function getPopularArticles() {
    try {
        const popularArticles = await prisma.article.findMany({
            take: 3,
            orderBy: {
                comments: {
                    _count: "desc",
                },
            },
        });
        return { popularArticles };
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2023") return { error: 404 };
            else return { error: 500 };
        }
        return { error };
    }
}
