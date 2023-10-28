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
  const { comments } = await fetchCommentsById(articleId);

  return (
    <section id="comments">
      <CommentForm articleId={articleId} />
      <h2 className="pb-[10px] text-lg">Komentarzy: {countComments}</h2>
      {comments.map((comment) => {
        return (
          <div className="my-[10px]" key={comment.id}>
            <UserCard name={comment.guestName} date={comment.createdDate} />
            <p className="ml-[42px] text-sm">{comment.content}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
