import Image from "next/image";
import defaultImage from "@/public/defaultImage.jpg";

export default function AboutPage() {
    return (
        <section className="p-[50px]">
            <Image src={defaultImage} alt={"główne zdjęcie sekcji 'o mnie'"} />
            <h1 className="my-[24px] text-2xl">Cześć, miło Cię poznać!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, et consequatur enim nesciunt tenetur aliquid ratione,
                ullam, dolore earum rerum incidunt! Officia, laudantium. Quis
                ipsum, quo animi impedit assumenda obcaecati! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Accusantium eaque quas
                maxime quibusdam molestiae ratione optio suscipit earum
                laudantium corrupti eum exercitationem ullam, enim, eligendi,
                voluptas amet at ipsa perspiciatis! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. In, corporis suscipit beatae amet
                non tempora est id commodi expedita similique recusandae
                dignissimos. Aspernatur autem quam voluptatem ipsa nemo
                assumenda eum. Lorem, ipsum.
            </p>
            <h2 className="my-[24px] text-xl">Drugi paragraf</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                commodi, dicta quam voluptatem error mollitia expedita quaerat
                harum cupiditate, deserunt perferendis maiores ab quae in id
                illo non amet aperiam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Necessitatibus adipisci debitis blanditiis
                cumque maiores aliquid sunt cum ratione quaerat. Dignissimos
                temporibus at beatae velit tempore, necessitatibus laudantium
                debitis inventore quae? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Fugit commodi, dicta quam voluptatem error
                mollitia expedita quaerat harum cupiditate, deserunt perferendis
                maiores ab quae in id illo non amet aperiam! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Necessitatibus adipisci
                debitis blanditiis cumque maiores aliquid sunt cum ratione
                quaerat. Dignissimos temporibus at beatae velit tempore,
                necessitatibus laudantium debitis inventore quae?Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Fugit commodi,
                dicta quam voluptatem error mollitia expedita quaerat harum
                cupiditate, deserunt perferendis maiores ab quae in id illo non
                amet aperiam! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Necessitatibus adipisci debitis blanditiis cumque maiores
                aliquid sunt cum ratione quaerat. Dignissimos temporibus at
                beatae velit tempore, necessitatibus laudantium debitis
                inventore quae?
            </p>
        </section>
    );
}
