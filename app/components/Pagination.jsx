import Link from "next/link";
import PaginationButton from "./PaginationButton";

const Pagination = ({ page, totalArticles }) => {
    if (!page) page = 1;
    const totalPages = Math.ceil(totalArticles / 10);

    const buttonsPage = {
        first: totalPages > 1 ? 1 : null,
        previous: page > 2 ? page - 1 : null,
        current: page > 1 && page < totalPages ? page : null,
        next: page < totalPages - 1 ? page + 1 : null,
        last: totalPages > 1 ? totalPages : null,
    };

    return (
        <div className="flex justify-end items-end mb-[20px]">
            <Link href={`${process.env.NEXT_PUBLIC_CLIENT_URL}`}>
                <PaginationButton
                    page={buttonsPage.first}
                    isCurrent={page === 1 ? true : false}
                />
            </Link>
            {page > 3 ? <span className="ml-[8px]">...</span> : null}
            <Link
                href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/?page=${buttonsPage.previous}`}
            >
                <PaginationButton page={buttonsPage.previous} />
            </Link>
            <Link
                href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/?page=${buttonsPage.current}`}
            >
                <PaginationButton
                    page={buttonsPage.current}
                    isCurrent={page !== 1 && page != totalPages ? true : false}
                />
            </Link>
            <Link
                href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/?page=${buttonsPage.next}`}
            >
                <PaginationButton page={buttonsPage.next} />
            </Link>
            {page < totalPages - 2 ? (
                <span className="ml-[8px]">...</span>
            ) : null}
            <Link
                href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/?page=${buttonsPage.last}`}
            >
                <PaginationButton
                    page={buttonsPage.last}
                    isCurrent={page === totalPages ? true : false}
                />
            </Link>
        </div>
    );
};

export default Pagination;
