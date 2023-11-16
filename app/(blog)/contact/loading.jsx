export default function Loading() {
  return (
    <div className="my-[35px] animate-pulse md:my-[70px] md:flex">
      <div className="md:mr-[20px] md:basis-1/2">
        <div className="h-[37.5px] bg-black/10"></div>
        <div className="mb-[40px] mt-[30px] h-[120px] bg-black/10 md:my-[62px] md:h-[90px]"></div>
        <div className="h-[175px] bg-black/10"></div>
      </div>
      <div className="md:basis-1/2">
        <div className=" mb-[62px] mt-[62px] h-[30px] bg-black/10 md:mt-0"></div>
        <div className="relative h-[391px] bg-black/10">
          <div className="absolute left-[50%] top-0 h-[32px] w-[64px] translate-x-[-50%] translate-y-[-100%] rounded-tl-[32px] rounded-tr-[32px] border-solid border-black/10 bg-black/10"></div>
        </div>
      </div>
    </div>
  );
}
