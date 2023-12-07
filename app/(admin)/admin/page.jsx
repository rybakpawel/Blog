"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <section>
        <div className="mx-[auto] flex h-[100vh] flex-col items-center justify-center gap-10 bg-slate-100 text-2xl md:flex-row">
          <Link href="/admin/addArticle">
          <button
            className="h-[200px] w-[200px] cursor-pointer rounded-md bg-primary px-[54px] py-[10px] text-white transition duration-300 hover:scale-105 md:h-[400px] md:w-[400px]"
          >
            Dodaj artykuł
          </button>
          </Link>
          <Link href="/admin/editArticle">
          <button
            className="h-[200px] w-[200px] cursor-pointer rounded-md bg-primary px-[54px] py-[10px] text-white transition duration-300 hover:scale-105 md:h-[400px] md:w-[400px]"
          >
            Edytuj artykuł
          </button>
          </Link>
        </div>
    </section>
  );
}
