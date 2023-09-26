import AboutMeSmall from "./AboutMeSmall";
import ContactForm from "./ContactForm";
import PopularArticles from "./PopularArticles";

const SideBar = () => {
    return (
        <aside className="md:w-[24%] mb-[20px]">
            <AboutMeSmall />
            <hr />
            <ContactForm />
            <PopularArticles />
        </aside>
    );
};

export default SideBar;
