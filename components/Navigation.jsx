"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMedia from "./SocialMedia";

const hamburgerIconStyle = {
  width: "28px",
  height: "28px",
  color: "#1A1D1E",
  cursor: "pointer",
};

const Navigation = () => {
  const isBreakpoint = useMediaQuery(768);
  const [isMenuVisible, setIsMenuVisible] = useState("hidden");

  const toggleMenu = () => {
    if (isMenuVisible === "hidden") setIsMenuVisible("block");
    else setIsMenuVisible("hidden");
  };

  return (
    <>
      <div className="my-[15px] flex justify-between md:my-0 md:block">
        <nav>
          {isBreakpoint ? (
            <GiHamburgerMenu style={hamburgerIconStyle} onClick={toggleMenu} />
          ) : null}
          <ul
            className={`${isMenuVisible} tracking-[1px] md:flex md:h-[70px] md:items-center md:justify-center`}
          >
            <Link href="/">
              <li className="mb-[10px] mt-[15px] transition hover:scale-105  md:mx-[10px] md:my-0">
                START
              </li>
            </Link>
            <Link href="/about">
              <li className="mb-[10px] transition hover:scale-105  md:mx-[10px] md:mb-0">
                O MNIE
              </li>
            </Link>
            <Link href="/contact">
              <li className="transition hover:scale-105  md:mx-[10px]">
                KONTAKT
              </li>
            </Link>
          </ul>
        </nav>
        {isBreakpoint ? (
          <SocialMedia
            color="#1A1D1E"
            background={false}
            width="118"
            iconWidth="28"
            iconHeight="28"
          />
        ) : null}
      </div>
      <hr />
    </>
  );
};

export default Navigation;

// Umieścić kolor ikon w zmiennej
