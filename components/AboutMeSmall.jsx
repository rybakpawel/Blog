import Image from "next/image";
import defaultImage from "@/public/defaultImage.jpg";

const AboutMeSmall = () => {
  return (
    <section className="mt-[20px]">
      <Image src={defaultImage} alt="Paweł Rybak" />
      <div className="mx-[20px]">
        <h2 className="my-[20px] font-bold">Witaj na moim blogu!</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSmall;
