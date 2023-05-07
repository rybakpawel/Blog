"use client";

import Link from "next/link";
import { IconContext } from "react-icons";
import { RiFacebookFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

const SocialMedia = (socialMedia) => {
    const { color, background, width, iconWidth, iconHeight } = socialMedia;

    const roundedBackground = {
        width: +iconWidth + +iconWidth / 2,
        height: +iconHeight + +iconHeight / 2,
    };

    return (
        <IconContext.Provider value={{ color }}>
            <div
                style={{ width: `${width}px` }}
                className="flex justify-between"
            >
                <Link href="https://www.facebook.com/wksryba/">
                    {background ? (
                        <div
                            style={{
                                width: `${roundedBackground.width}px`,
                                height: `${roundedBackground.height}px`,
                            }}
                            className={`bg-facebookBackground rounded-[50%] flex justify-center items-center`}
                        >
                            <RiFacebookFill
                                style={{
                                    width: `${iconWidth}px`,
                                    height: `${iconHeight}px`,
                                }}
                            />
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
                            style={{
                                width: `${roundedBackground.width}px`,
                                height: `${roundedBackground.height}px`,
                            }}
                            className={`bg-linkedinBackground rounded-[50%] flex justify-center items-center`}
                        >
                            <RiLinkedinFill
                                style={{
                                    width: `${iconWidth}px`,
                                    height: `${iconHeight}px`,
                                }}
                            />
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
                        <div
                            style={{
                                width: `${roundedBackground.width}px`,
                                height: `${roundedBackground.height}px`,
                            }}
                            className={`bg-githubBackground rounded-[50%] flex justify-center items-center`}
                        >
                            <RiGithubFill
                                style={{
                                    width: `${iconWidth}px`,
                                    height: `${iconHeight}px`,
                                }}
                            />
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
