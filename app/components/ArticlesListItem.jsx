import Image from "next/image";
import Link from "next/link";
import DateLine from "./DateLine";

const ArticlesListItem = ({ id, img, title, content, createdDate }) => {
    const datetime = new Date(createdDate);
    const articleDate = datetime.toISOString().split("T")[0];

    return (
        <div className="my-[20px]">
            <div className="md:flex md:max-h-[200px] md:mb-[16px]">
                <Link href={`/articles/${id}`}>
                    <Image
                        src={img}
                        alt={title}
                        className="max-h-[200px] max-w-[320px] object-cover mb-[16px] cursor-pointer"
                    />
                </Link>
                <div className="mb-[16px] md:mx-[20px]">
                    <Link href={`/articles/${id}`}>
                        <h2 className="mb-[16px] text-lg font-bold text-primary cursor-pointer">
                            {title}
                        </h2>
                    </Link>
                    <p className="h-[7.5em] overflow-hidden">{content}</p>
                </div>
            </div>
            <DateLine variant="more" date={articleDate} id={id} />
        </div>
    );
};

export default ArticlesListItem;
