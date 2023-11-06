import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCommentAlt } from "react-icons/fa";

const DateLine = ({ variant, date, id, countComments }) => {
  return (
    <div>
      <hr />
      <div className="my-[9px] flex justify-between text-sm font-bold">
        <p>{date}</p>
        {variant === "more" ? (
          <Link
            href={`/articles/${id}`}
            className="flex cursor-pointer items-center"
          >
            <p className="text-primary transition duration-300 hover:text-secondary">
              Czytaj więcej
            </p>
            <MdKeyboardArrowRight style={{ color: "#105775" }} />
          </Link>
        ) : null}
        {variant === "comment" ? (
          <Link href="#comments">
            <div className="relative flex justify-center">
              <FaCommentAlt size={20} style={{ color: "#105775" }} />

              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                {countComments}
              </span>
            </div>
          </Link>
        ) : null}
      </div>
      <hr />
    </div>
  );
};

export default DateLine;
