"use client";

import Image from "next/image";
import DateLine from "./DateLine";
import UserCard from "./UserCard";
import Comments from "./Comments";

const Article = ({
    id,
    image,
    title,
    content,
    createdDate,
    comments,
    countComments,
}) => {
    const datetime = new Date(createdDate);
    const articleDate = datetime.toISOString().split("T")[0];

    return (
        <section className="md:w-[71%] my-[20px] md:my-[50px]">
            <Image
                src={image}
                alt={title}
                className="max-h-[500px] object-cover"
            />
            <h1 className="my-[20px] text-2xl">{title}</h1>
            <DateLine
                variant="comment"
                date={articleDate}
                countComments={countComments}
            />
            <p className="my-[20px]">{content}</p>
            <div className="flex justify-end">
                <UserCard name="Paweł Rybak" />
            </div>
            <Comments
                articleId={id}
                comments={comments}
                countComments={countComments}
            />
        </section>
    );
};

export default Article;
