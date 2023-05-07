import Articles from "./components/Articles";

export default function HomePage() {
    return (
        <div className="md:flex md:justify-between">
            <Articles />
            <aside className="md: w-[24%]">elo aside</aside>
        </div>
    );
}
