import Image from "next/image";
import Link from "next/link";
import DateLine from "./DateLine";

const ArticlesListItem = ({ id, img, title, content, createdDate }) => {
  const datetime = new Date(createdDate);
  const articleDate = datetime.toISOString().split("T")[0];
  const path = require(`../${img}`)
  return (
    <div className="my-[20px]">
      <div className="md:mb-[16px] md:flex md:max-h-[200px]">
        <Link href={`/articles/${id}`}>
          <div className="overflow-hidden">
            <Image
              src={path}
              alt={title}
              className="mb-[16px] max-h-[200px] max-w-[320px] cursor-pointer object-cover transition duration-300 hover:scale-110 md:mb-0"
            />
          </div>
        </Link>
        <div className="mb-[16px] md:mx-[20px]">
          <Link href={`/articles/${id}`}>
            <h2 className="mb-[16px] cursor-pointer text-lg font-bold text-primary transition duration-300 hover:text-secondary">
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
