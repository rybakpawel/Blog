"use client";

import Link from "next/link";
import { IconContext } from "react-icons";
import { RiFacebookFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

const iconStyle = {
    width: "28px",
    height: "28px",
};

const SocialMedia = (socialMedia) => {
    const { color, background, width } = socialMedia;

    return (
        <IconContext.Provider value={{ color }}>
            <div className={`w-[${width}px] flex justify-between`}>
                <Link href="https://www.facebook.com/wksryba/">
                    <RiFacebookFill style={iconStyle} />
                </Link>
                <Link href="https://www.linkedin.com/in/pawe%C5%82-rybak-161a5222b/">
                    <RiLinkedinFill style={iconStyle} />
                </Link>
                <Link href="https://github.com/rybakpawel">
                    <RiGithubFill style={iconStyle} />
                </Link>
            </div>
        </IconContext.Provider>
    );
};

export default SocialMedia;
