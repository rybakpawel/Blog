import ArticlesListItem from "./ArticlesListItem";
import defaultImage from "@/public/defaultImage.jpg";

async function fetchArticles() {
    const response = await fetch(`${process.env.API_URL}/articles`);
    const articles = await response.json();
    return articles;
}

const Articles = async () => {
    const articles = await fetchArticles();

    return (
        <section className="md:w-[71%]">
            {articles.map((article) => {
                return (
                    <ArticlesListItem
                        id={article.id}
                        img={defaultImage}
                        title={article.title}
                        content={article.content}
                        createdDate={article.createdDate}
                    />
                );
            })}
        </section>
    );
};

export default Articles;
