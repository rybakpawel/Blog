"use client";

import Link from "next/link";
import SocialMedia from "./SocialMedia";

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="h-[100px] flex justify-center items-center">
                <SocialMedia
                    color="white"
                    background="none"
                    width="160"
                    iconWidth="25"
                    iconHeight="25"
                />
            </div>
            <div className="h-[200px] md:h-[100px] flex flex-col text-white tracking-[1px]">
                <ul className="h-[115px] flex flex-col justify-between items-center md:h-auto md:flex-row md:justify-center">
                    <Link href="/">
                        <li className="mx-[15px]">Strona główna</li>
                    </Link>
                    <Link href="about">
                        <li className="mx-[15px]">Spis treści</li>
                    </Link>
                    <Link href="contents">
                        <li className="mx-[15px]">O mnie</li>
                    </Link>
                    <Link href="contact">
                        <li className="mx-[15px]">Kontakt</li>
                    </Link>
                </ul>
                <div className="flex justify-center items-center grow">
                    <p className="text-sm">
                        Skill Booster 2023. Wszelkie prawa zastrzeżone.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
