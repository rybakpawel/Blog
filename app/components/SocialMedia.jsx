"use client";

import Link from "next/link";
import { IconContext } from "react-icons";
import { RiFacebookFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

const SocialMedia = (socialMedia) => {
    const {
        color,
        background,
        width,
        iconWidth,
        iconHeight,
        direction = "row",
    } = socialMedia;

    const roundedBackground = {
        width: +iconWidth + +iconWidth / 2,
        height: +iconHeight + +iconHeight / 2,
    };

    return (
        <IconContext.Provider value={{ color }}>
            <div
                style={{ width: `${width}px`, flexDirection: `${direction}` }}
                className="flex justify-between"
            >
                <Link href="https://www.facebook.com/wksryba/">
                    {background ? (
                        <div className="flex items-center">
                            <div
                                style={{
                                    width: `${roundedBackground.width}px`,
                                    height: `${roundedBackground.height}px`,
                                }}
                                className={`${
                                    background === "primary"
                                        ? "bg-primary"
                                        : "bg-facebookBackground"
                                } rounded-[50%] flex justify-center items-center`}
                            >
                                <RiFacebookFill
                                    style={{
                                        width: `${iconWidth}px`,
                                        height: `${iconHeight}px`,
                                    }}
                                />
                            </div>
                            {direction === "column" ? (
                                <span className="ml-[20px] text-lg font-bold">
                                    Facebook
                                </span>
                            ) : null}
                        </div>
                    ) : (
                        <RiFacebookFill
                            style={{
                                width: `${iconWidth}px`,
                                height: `${iconHeight}px`,
                            }}
                        />
                    )}
                </Link>
                <Link href="https://www.linkedin.com/in/pawe%C5%82-rybak-161a5222b/">
                    {background ? (
                        <div
                            className={`flex items-center ${
                                direction === "column" ? "my-[20px]" : ""
                            }`}
                        >
                            <div
                                style={{
                                    width: `${roundedBackground.width}px`,
                                    height: `${roundedBackground.height}px`,
                                }}
                                className={`${
                                    background === "primary"
                                        ? "bg-primary"
                                        : "bg-linkedinBackground"
                                } rounded-[50%] flex justify-center items-center`}
                            >
                                <RiLinkedinFill
                                    style={{
                                        width: `${iconWidth}px`,
                                        height: `${iconHeight}px`,
                                    }}
                                />
                            </div>
                            {direction === "column" ? (
                                <span className="ml-[20px] text-lg font-bold">
                                    Linkedin
                                </span>
                            ) : null}
                        </div>
                    ) : (
                        <RiLinkedinFill
                            style={{
                                width: `${iconWidth}px`,
                                height: `${iconHeight}px`,
                            }}
                        />
                    )}
                </Link>
                <Link href="https://github.com/rybakpawel">
                    {background ? (
                        <div className="flex items-center">
                            <div
                                style={{
                                    width: `${roundedBackground.width}px`,
                                    height: `${roundedBackground.height}px`,
                                }}
                                className={`${
                                    background === "primary"
                                        ? "bg-primary"
                                        : "bg-githubBackground"
                                } rounded-[50%] flex justify-center items-center`}
                            >
                                <RiGithubFill
                                    style={{
                                        width: `${iconWidth}px`,
                                        height: `${iconHeight}px`,
                                    }}
                                />
                            </div>
                            {direction === "column" ? (
                                <span className="ml-[20px] text-lg font-bold">
                                    Github
                                </span>
                            ) : null}
                        </div>
                    ) : (
                        <RiGithubFill
                            style={{
                                width: `${iconWidth}px`,
                                height: `${iconHeight}px`,
                            }}
                        />
                    )}
                </Link>
            </div>
        </IconContext.Provider>
    );
};

export default SocialMedia;
