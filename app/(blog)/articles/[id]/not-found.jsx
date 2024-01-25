import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh_-_295px)] items-center justify-center">
      <div className="mb-[25px] flex flex-col items-center">
        <h1 className="text-2xl font-bold">Nie znaleziono strony!</h1>
        <span className="mb-[50px] mt-[20px] text-lg">
          Podany artykuł nie istnieje.
        </span>
        <Link href="/">
          <button className="mx-auto w-[276px] cursor-pointer rounded-md bg-primary px-[54px] py-[10px] text-white transition duration-300 hover:scale-105">
            Wróc do strony głównej
          </button>
        </Link>
      </div>
    </div>
  );
}
