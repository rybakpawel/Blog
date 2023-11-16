import Link from "next/link";
import SideBar from "../../../components/SideBar";

async function fetchArticles(pageIndex, limit) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles?page=${
      !pageIndex ? 1 : pageIndex
    }&limit=${limit}`,
    {
      cache: "no-store",
    },
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
            const datetime = new Date(article.createdDate);
            const articleDate = datetime.toISOString().split("T")[0];

            return (
              <div className="mb-[10px] ml-[10px] text-lg md:mb-0 md:flex md:justify-between">
                <Link href={`/articles/${article.id}`} key={article.id}>
                  <p className="text-primary transition duration-300 hover:text-secondary">{`${
                    index + 1
                  }. ${article.title}`}</p>
                </Link>
                <p className="text-sm md:text-lg">{articleDate}</p>
              </div>
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
