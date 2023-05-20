import { notFound } from "next/navigation";

async function fetchArticleById(id) {
    const response = await fetch(`${process.env.API_URL}/articles/${id}`);
    const article = await response.json();
    if (article === 404) notFound();
    return article;
}

export default async function ArticlePage({ params }) {
    const { id } = params;
    const article = await fetchArticleById(id);
    const { title, content } = article;
    return (
        <div className="md:flex md:justify-between">
            <div className="md:w-[71%]">
                <p>Tytuł: {title}</p>
                <p>Treść: {content}</p>
            </div>
            <aside className="md:w-[24%]">elo aside</aside>
        </div>
    );
}
