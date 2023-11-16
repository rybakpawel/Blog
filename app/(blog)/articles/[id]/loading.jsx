export default function Loading() {
  return (
    <div className="animate-pulse md:flex md:justify-between">
      <div className="my-[20px] md:my-[50px] md:w-[71%]">
        <div className="h-[213px] bg-black/10 md:h-[500px]"></div>
        <div className="my-[20px] h-[46px] bg-black/10"></div>
        <div className="h-[40px] bg-black/10"></div>
        <div className="my-[20px] h-[500px] bg-black/10"></div>
      </div>
      <div className="mb-[20px] md:w-[24%]">
        <div className="mt-[20px] h-[180px] bg-black/10"></div>
        <div className="my-[20px] h-[350px] bg-black/10"></div>
        <div className="mb-[20px] h-[350px] bg-black/10"></div>
        <div className="mb-[20px] h-[200px] bg-black/10"></div>
      </div>
    </div>
  );
}
