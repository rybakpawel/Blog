import Image from "next/image";

const UserCard = ({ image, name, date }) => {
  const datetime = new Date(date);
  let commentDate;
  if (date) {
    commentDate = datetime.toISOString().split("T")[0];
  }

  return (
    <div className="flex">
      <Image src={image} alt={name} className="h-[32px] w-[32px]" />
      <div
        className={`flex flex-col ${commentDate ? "" : "justify-center"} ml-[10px]`}
      >
        <span className="text-sm font-bold text-black/75">{name}</span>
        {commentDate ? <span className="text-xs text-black/75">{commentDate}</span> : null}
      </div>
    </div>
  );
};

export default UserCard;
