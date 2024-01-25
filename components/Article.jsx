import ReactMarkdown from "react-markdown";
import Image from "next/image";
import DateLine from "./DateLine";
import UserCard from "./UserCard";
import Comments from "./Comments";

const Article = ({
  id,
  image,
  title,
  content,
  authorName,
  authorAvatar,
  createdDate,
  countComments,
}) => {
  const datetime = new Date(createdDate);
  const articleDate = datetime.toISOString().split("T")[0];
  const path = image.slice(6);

  return (
    <section className="my-[20px] md:my-[50px] md:w-[71%]">
      <Image
        src={path}
        alt={title}
        width={2000}
        height={600}
        className="max-h-[500px] object-cover"
      />
      <h1 className="my-[20px] text-2xl">{title}</h1>
      <DateLine
        variant="comment"
        date={articleDate}
        countComments={countComments}
      />
      <div className="my-[20px]">
        <ReactMarkdown className="prose max-w-full">{content}</ReactMarkdown>
      </div>
      <UserCard image={authorAvatar} name={authorName} />
      <Comments articleId={id} countComments={countComments} />
    </section>
  );
};

export default Article;
