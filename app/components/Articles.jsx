async function fetchArticles() {
    const response = await fetch(`${process.env.API_URL}/articles`);
    const articles = await response.json();
    return articles;
}

const Articles = async () => {
    const articles = await fetchArticles();

    return (
        <section className="md:w-[71%]">
            <div>{articles[0].title}</div>
        </section>
    );
};

export default Articles;
