import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

async function fetchPopularArticles() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/popular`,
        {
            cache: "no-store",
        }
    );
    const { popularArticles } = await response.json();

    if (popularArticles === 404) notFound();
    return { popularArticles };
}

const PopularArticles = async () => {
    const { popularArticles } = await fetchPopularArticles();

    return (
        <section>
            <h2 className="my-[20px] text-lg text-center tracking-[1px]">
                Popularne wpisy
            </h2>
            {popularArticles.length > 0 ? (
                popularArticles.map((article) => {
                    return (
                        <Link
                            href={`/articles/${article.id}`}
                            key={article.id}
                            className="flex flex-col text-primary mb-[20px]"
                        >
                            <span>{article.title}</span>
                            <span className="self-end text-sm">
                                200 komentarzy
                            </span>
                        </Link>
                    );
                })
            ) : (
                <p>Brak artykułów</p>
            )}
            <div className="flex justify-end items-center text-primary">
                <Link href={`/table-of-contents`}>Cały spis treści</Link>
                <MdKeyboardArrowRight style={{ color: "#105775" }} />
            </div>
        </section>
    );
};

export default PopularArticles;
