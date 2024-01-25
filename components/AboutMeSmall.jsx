import Image from "next/image";
import Link from "next/link";
import aboutMeImage from "@/public/static/PawelRybak.jpeg";

const AboutMeSmall = () => {
  return (
    <section className="mt-[20px]">
      <Image
        src={aboutMeImage}
        alt="Paweł Rybak"
        className="max-h-[300px] object-contain"
      />
      <div className="mx-[20px]">
        <h2 className="my-[20px] font-bold">Witaj na moim blogu!</h2>
        <p className="text-justify">
          Mam na imię Paweł i jestem web developerem. Podchodzę do swojego
          zawodu z ogromną pasją, czym chcę się z Tobą podzielić na niniejszym
          blogu. Specjalizuję się w programowaniu webowym, jednak żaden jego
          odłam nie jest mi straszny, dlatego znajdziesz tu treści z
          najróżniejszych dziedzin. Zapraszam do zapoznania się z{" "}
          <Link href="/about">
            <span className="font-bold">moja historią</span>.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AboutMeSmall;
