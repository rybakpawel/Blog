"use client";

import Link from "next/link";
import CookieConsent from "react-cookie-consent";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex h-[100px] items-center justify-center">
        <SocialMedia
          color="white"
          background="original"
          width="160"
          iconWidth="25"
          iconHeight="25"
        />
      </div>
      <div className="flex h-[200px] flex-col tracking-[1px] text-white md:h-[100px]">
        <ul className="flex h-[115px] flex-col items-center justify-between md:h-auto md:flex-row md:justify-center">
          <Link href="/">
            <li className="mx-[15px] transition duration-300 hover:text-white/75">
              Strona główna
            </li>
          </Link>
          <Link href="/table-of-contents">
            <li className="mx-[15px] transition duration-300 hover:text-white/75">
              Spis treści
            </li>
          </Link>
          <Link href="/about">
            <li className="mx-[15px] transition duration-300 hover:text-white/75">
              O mnie
            </li>
          </Link>
          <Link href="/contact">
            <li className="mx-[15px] transition duration-300 hover:text-white/75">
              Kontakt
            </li>
          </Link>
        </ul>
        <div className="flex grow items-center justify-center">
          <p className="text-sm">
            Paweł Rybak 2023. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
      <CookieConsent debug={true} buttonText="Zgoda">
        Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
        poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
        użycie.
      </CookieConsent>
    </footer>
  );
};

export default Footer;
