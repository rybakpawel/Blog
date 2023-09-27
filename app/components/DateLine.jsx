import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCommentAlt } from "react-icons/fa";

const DateLine = ({ variant, date, id }) => {
    return (
        <div>
            <hr />
            <div className="flex justify-between my-[9px] text-sm font-bold">
                <p>{date}</p>
                {variant === "more" ? (
                    <Link
                        href={`/articles/${id}`}
                        className="flex items-center cursor-pointer"
                    >
                        <p className="text-primary">Czytaj więcej</p>
                        <MdKeyboardArrowRight style={{ color: "#105775" }} />
                    </Link>
                ) : null}
                {variant === "comment" ? (
                    <div className="flex justify-center relative">
                        <FaCommentAlt size={20} style={{ color: "#105775" }} />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                            4
                        </span>
                    </div>
                ) : null}
            </div>
            <hr />
        </div>
    );
};

export default DateLine;
