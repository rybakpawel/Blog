import AboutMeSmall from "./AboutMeSmall";
import ContactForm from "./ContactForm";

const SideBar = () => {
    return (
        <aside className="md:w-[24%]">
            <AboutMeSmall />
            <hr />
            <ContactForm />
        </aside>
    );
};

export default SideBar;
