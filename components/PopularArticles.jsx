import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

async function fetchPopularArticles() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/popular`,
    {
      cache: "no-store",
    },
  );
  const { popularArticles } = await response.json();

  if (popularArticles === 404) notFound();
  return { popularArticles };
}

const PopularArticles = async () => {
  const { popularArticles } = await fetchPopularArticles();

  return (
    <section>
      <h2 className="my-[20px] text-center text-lg tracking-[1px]">
        Popularne wpisy
      </h2>
      {popularArticles.length > 0 ? (
        popularArticles.map((article) => {
          return (
            <Link
              href={`/articles/${article.id}`}
              key={article.id}
              className="mb-[20px] flex flex-col text-primary transition duration-300 hover:text-secondary"
            >
              <span>{article.title}</span>
              <span className="self-end text-sm">
                Komentarzy: {article._count.comments}
              </span>
            </Link>
          );
        })
      ) : (
        <p>Brak artykułów</p>
      )}
      <div className="flex items-center justify-end text-primary transition duration-300 hover:text-secondary">
        <Link href={`/table-of-contents`}>Cały spis treści</Link>
        <MdKeyboardArrowRight style={{ color: "#105775" }} />
      </div>
    </section>
  );
};

export default PopularArticles;
