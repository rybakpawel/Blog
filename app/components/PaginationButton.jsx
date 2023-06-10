const PaginationButton = ({ page, isCurrent = false }) => {
    return page ? (
        <button
            className={`w-[35px] h-[35px] ml-[8px] rounded-md ${
                !isCurrent
                    ? "hover:border-[1px] hover:border-solid hover:border-primary transition"
                    : ""
            } ${isCurrent ? "bg-primary text-white" : ""}`}
        >
            {page}
        </button>
    ) : null;
};

export default PaginationButton;
