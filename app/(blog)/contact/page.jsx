import SocialMedia from "../../../components/SocialMedia";
import ContactForm from "../../../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="my-[35px] md:my-[70px] md:flex">
      <div className="md:basis-1/2">
        <h1 className="text-xl font-bold">Kontakt</h1>
        <p className="mb-[40px] mt-[30px] w-3/4 text-lg md:my-[62px]">
          Jeżeli masz jakieś pytania, zapraszam do kontaktu poprzez formularz
          lub moje social media.
        </p>
        <SocialMedia
          color="white"
          background="primary"
          width="160"
          iconWidth="30"
          iconHeight="30"
          direction="column"
        />
      </div>
      <div className="md:basis-1/2">
        <ContactForm />
      </div>
    </section>
  );
}
