async function fetchArticles() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const articles = await response.json();
    return articles;
}

const Articles = async () => {
    const articles = await fetchArticles();
    console.log(articles);

    return (
        <section className="md: w-[71%]">
            <div>das</div>
        </section>
    );
};

export default Articles;
