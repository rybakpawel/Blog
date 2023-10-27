import CommentForm from "./CommentForm";
import UserCard from "./UserCard";

const Comments = ({ articleId, comments, countComments }) => {
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
