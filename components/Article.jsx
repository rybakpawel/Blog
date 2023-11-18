import ReactMarkdown from "react-markdown";
import Image from "next/image";
import DateLine from "./DateLine";
import UserCard from "./UserCard";
import Comments from "./Comments";

const Article = ({ id, image, title, content, createdDate, countComments }) => {
  const datetime = new Date(createdDate);
  const articleDate = datetime.toISOString().split("T")[0];

  return (
    <section className="my-[20px] md:my-[50px] md:w-[71%]">
      <Image src={image} alt={title} className="max-h-[500px] object-cover" />
      <h1 className="my-[20px] text-2xl">{title}</h1>
      <DateLine
        variant="comment"
        date={articleDate}
        countComments={countComments}
      />
      <div className="my-[20px]">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <div className="flex justify-end">
        <UserCard name="Paweł Rybak" />
      </div>
      <Comments articleId={id} countComments={countComments} />
    </section>
  );
};

export default Article;
