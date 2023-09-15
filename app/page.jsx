import Articles from "./components/Articles";
import SideBar from "./components/SideBar";

export default function HomePage() {
    return (
        <div className="md:flex md:justify-between">
            {/* <Articles /> */}
            <SideBar />
        </div>
    );
}
