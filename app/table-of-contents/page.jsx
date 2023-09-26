import Link from "next/link";
import SideBar from "./../components/SideBar";

async function fetchArticles(pageIndex, limit) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles?page=${
            !pageIndex ? 1 : pageIndex
        }&limit=${limit}`,
        {
            cache: "no-store",
        }
    );
    const { articles, totalArticles } = await response.json();

    if (articles === 404) notFound();
    return { articles, totalArticles };
}

export default async function TableOfContents() {
    const { articles } = await fetchArticles(1, 999);

    return (
        <div className="md:flex md:justify-between">
            <div className="md:w-[71%]">
                <h1 className="my-[30px] text-2xl">Spis treści</h1>
                {articles.length > 0 ? (
                    articles.map((article, index) => {
                        return (
                            <Link
                                href={`/articles/${article.id}`}
                                key={article.id}
                            >
                                <div className="md:flex md:justify-between ml-[10px] mb-[10px] md:mb-0 text-lg">
                                    <p className="text-primary">{`${
                                        index + 1
                                    }. ${article.title}`}</p>
                                    <p className="text-sm md:text-lg">
                                        {article.createdDate}
                                    </p>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <p>Brak artykułów</p>
                )}
            </div>
            <SideBar />
        </div>
    );
}
