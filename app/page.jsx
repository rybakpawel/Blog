import ArticlesList from "./components/ArticlesList";
import SideBar from "./components/SideBar";

export default function HomePage() {
    return (
        <div className="md:flex md:justify-between">
            <ArticlesList />
            <SideBar />
        </div>
    );
}
