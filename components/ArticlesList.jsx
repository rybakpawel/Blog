import ArticlesListItem from "./ArticlesListItem";
import Pagination from "./Pagination";

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

const ArticlesList = async ({ searchParams }) => {
  const pageParam = searchParams.page;

  const { articles, totalArticles } = await fetchArticles(pageParam, 5);

  return (
    <section className="md:w-[71%]">
      {articles ? (
        <>
          {articles.map((article) => {
            return (
              <ArticlesListItem
                id={article.id}
                key={article.id}
                img={article.mainImage}
                title={article.title}
                description={article.description}
                content={article.content}
                createdDate={article.createdDate}
              />
            );
          })}
          <Pagination page={+pageParam} totalArticles={totalArticles} />
        </>
      ) : (
        <p>Brak artykułów</p>
      )}
    </section>
  );
};

export default ArticlesList;
