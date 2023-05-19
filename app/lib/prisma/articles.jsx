import prisma from ".";

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
        return { error };
    }
}
