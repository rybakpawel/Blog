"use client";

import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMedia from "./SocialMedia";
import logo from "@/public/logo.png";

const Header = () => {
    const isBreakpoint = useMediaQuery(768);

    return (
        <header className="h-[125px] bg-primary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative md:flex md:justify-end md:items-center md:pr-[80px]">
            <Image
                src={logo}
                alt="Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
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
