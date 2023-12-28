import { getServerSession } from "next-auth";
import { options } from "../app/api/auth/[...nextauth]/options";
import Link from "next/link";
import CommentForm from "./CommentForm";
import UserCard from "./UserCard";

async function fetchCommentsById(articleId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${articleId}`,
    {
      cache: "no-store",
    },
  );
  const comments = await response.json();

  if (comments === 404) notFound();
  return comments;
}

const Comments = async ({ articleId, countComments }) => {
  const session = await getServerSession(options);
  const { comments } = await fetchCommentsById(articleId);
 
  return (
    <section id="comments">
      {session ? 
      <CommentForm articleId={articleId} authorEmail={session.user.email} authorName={session.user.name} authorAvatar={session.user.image} /> :
      <Link href={`/api/auth/signin?callbackUrl=/articles/${articleId}`}>
        <span>Zaloguj się żeby dodać komentarz</span>
      </Link>
      }
      <h2 className="pb-[10px] text-lg">Komentarzy: {countComments}</h2>
      {comments.map((comment) => {
        return (
          <div className="my-[10px]" key={comment.id}>
            <UserCard image={comment.authorAvatar} name={comment.authorName} date={comment.createdDate} />
            <p className="ml-[42px] text-sm">{comment.content}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
