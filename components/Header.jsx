"use client";

import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMedia from "./SocialMedia";
import logo from "@/public/static/Logo1-white.png";

const Header = () => {
  const isBreakpoint = useMediaQuery(768);

  return (
    <header className="relative h-[125px] bg-primary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:flex md:items-center md:justify-end md:pr-[80px]">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          width={255}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        />
      </Link>
      {isBreakpoint ? null : (
        <div className="hidden md:block">
          <SocialMedia
            color="white"
            background={false}
            width="118"
            iconWidth="28"
            iconHeight="28"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
