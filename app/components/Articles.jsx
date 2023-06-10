"use client";

import { useSearchParams } from "next/navigation";
import ArticlesListItem from "./ArticlesListItem";
import Pagination from "./Pagination";
import defaultImage from "@/public/defaultImage.jpg";

async function fetchArticles(pageIndex) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles?page=${
            !pageIndex ? 1 : pageIndex
        }`,
        {
            cache: "no-store",
        }
    );
    const { articles, totalArticles } = await response.json();

    if (articles === 404) notFound();
    return { articles, totalArticles };
}

const Articles = async () => {
    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");

    const { articles, totalArticles } = await fetchArticles(pageParam);

    return (
        <section className="md:w-[71%]">
            {articles.length > 0 ? (
                <>
                    {articles.map((article) => {
                        return (
                            <ArticlesListItem
                                id={article.id}
                                key={article.id}
                                img={defaultImage}
                                title={article.title}
                                content={article.content}
                                createdDate={article.createdDate}
                            />
                        );
                    })}
                    <Pagination
                        page={+pageParam}
                        totalArticles={totalArticles}
                    />
                </>
            ) : (
                <p>Brak artykułów</p>
            )}
        </section>
    );
};

export default Articles;
