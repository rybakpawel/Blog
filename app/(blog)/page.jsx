import ArticlesList from "../../components/ArticlesList";
import SideBar from "../../components/SideBar";

export default function HomePage( {searchParams} ) {
  return (
    <div className="md:flex md:justify-between">
      <ArticlesList searchParams={searchParams}/>
      <SideBar />
    </div>
  );
}
