import { notFound } from "next/navigation";
import Article from "../../components/Article";
import SideBar from "../../components/SideBar";
import defaultImage from "@/public/defaultImage.jpg";

async function fetchArticleById(id) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`
    );
    const article = await response.json();

    if (article === 404) notFound();
    return article;
}

export default async function ArticlePage({ params }) {
    const { id } = params;
    const article = await fetchArticleById(id);
    const { title, content, createdDate } = article;
    return (
        <div className="md:flex md:justify-between">
            <Article
                image={defaultImage}
                title={title}
                content={content}
                createdDate={createdDate}
            />
            <SideBar />
        </div>
    );
}
