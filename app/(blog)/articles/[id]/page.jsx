import { notFound } from "next/navigation";
import Article from "../../../../components/Article";
import SideBar from "../../../../components/SideBar";

async function fetchArticleById(id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
    {
      cache: "no-store",
    },
  );
  const article = await response.json();

  if (article === 404) notFound();
  return article;
}

export default async function ArticlePage({ params }) {
  const { id } = params;
  const article = await fetchArticleById(id);

  const { title, mainImage, content, authorName, authorAvatar, createdDate, _count } = article;

  return _count ? (
    <div className="md:flex md:justify-between">
      <Article
        id={id}
        image={mainImage}
        title={title}
        content={content}
        authorName={authorName}
        authorAvatar={authorAvatar}
        createdDate={createdDate}
        countComments={_count.comments}
      />
      <SideBar />
    </div>
  ) : null;
}
