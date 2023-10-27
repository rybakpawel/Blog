import Image from "next/image";

const UserCard = ({ image, name, date }) => {
  return (
    <div className="flex">
      <Image src={image} alt={name} className="h-[32px] w-[32px]" />
      <div
        className={`flex flex-col ${date ? "" : "justify-center"} ml-[10px]`}
      >
        <span className="text-sm font-bold text-black/75">{name}</span>
        {date ? <span className="text-xs text-black/75">{date}</span> : null}
      </div>
    </div>
  );
};

export default UserCard;
