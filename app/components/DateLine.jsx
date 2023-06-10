import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

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
                    <MdKeyboardArrowRight style={{ color: "#105775" }} />
                ) : null}
            </div>
            <hr />
        </div>
    );
};

export default DateLine;
