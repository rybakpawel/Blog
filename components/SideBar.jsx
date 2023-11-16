import AboutMeSmall from "./AboutMeSmall";
import ContactForm from "./ContactForm";
import PopularArticles from "./PopularArticles";

const SideBar = () => {
  return (
    <aside className="mb-[20px] md:w-[24%]">
      <AboutMeSmall />
      <div className="my-[20px]">
        <hr />
      </div>

      <ContactForm />
      <PopularArticles />
    </aside>
  );
};

export default SideBar;
