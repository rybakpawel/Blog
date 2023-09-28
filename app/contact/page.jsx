import SocialMedia from "../components/SocialMedia";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
    return (
        <section className="md:flex my-[35px] md:my-[70px]">
            <div className="md:basis-1/2">
                <h1 className="text-3xl">Kontakt</h1>
                <p className="text-lg my-[44px] md:my-[88px] w-3/4">
                    Jeżeli masz jakieś pytania, zapraszam do kontaktu poprzez
                    formularz lub moje social media.
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
