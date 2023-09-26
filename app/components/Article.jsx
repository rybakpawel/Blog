import Image from "next/image";
import DateLine from "./DateLine";
import SideBar from "./../components/SideBar";

const Article = ({ image, title, content, createdDate }) => {
    return (
        <>
            <section className="md:w-[71%] my-[20px] md:my-[50px]">
                <Image
                    src={image}
                    alt={title}
                    className="max-h-[500px] object-cover"
                />
                <h1 className="my-[20px] text-2xl">{title}</h1>
                <DateLine variant="comment" date={createdDate} />
                <p className="my-[20px]">{content}</p>
            </section>
            <SideBar />
        </>
    );
};

export default Article;
