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
            <div className="flex my-[15px] justify-between md:block md:my-0">
                <nav>
                    {isBreakpoint ? (
                        <GiHamburgerMenu
                            style={hamburgerIconStyle}
                            onClick={toggleMenu}
                        />
                    ) : null}
                    <ul
                        className={`${isMenuVisible} tracking-[1px] md:h-[70px] md:flex md:justify-center md:items-center`}
                    >
                        <Link href="/">
                            <li className="mt-[15px] mb-[10px] md:my-0 md:mx-[10px]">
                                START
                            </li>
                        </Link>
                        <Link href="/about">
                            <li className="mb-[10px] md:mb-0 md:mx-[10px]">
                                O MNIE
                            </li>
                        </Link>
                        <Link href="/programming">
                            <li className="mb-[10px] md:mb-0 md:mx-[10px]">
                                PROGRAMOWANIE
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li className="md:mx-[10px]">KONTAKT</li>
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
