import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const ArticlesListItem = ({ id, img, title, content, createdDate }) => {
    return (
        <div className="my-[20px]">
            <div className="md:flex md:max-h-[200px] md:mb-[16px]">
                <Link href="/">
                    <Image
                        src={img}
                        alt={title}
                        className="max-h-[200px] max-w-[320px] object-cover mb-[16px] cursor-pointer"
                    />
                </Link>
                <div className="mb-[16px] md:mx-[20px]">
                    <Link href="/">
                        <p className="mb-[16px] text-lg font-bold text-primary cursor-pointer">
                            {title}
                        </p>
                    </Link>
                    <p className="h-[7.5em] overflow-hidden">{content}</p>
                </div>
            </div>
            <div>
                <hr />
                <div className="flex justify-between my-[9px] text-sm font-bold">
                    <p>{createdDate}</p>
                    <Link href="/" className="flex items-center cursor-pointer">
                        <p className="text-primary">Czytaj więcej</p>
                        <MdKeyboardArrowRight style={{ color: "#105775" }} />
                    </Link>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default ArticlesListItem;
