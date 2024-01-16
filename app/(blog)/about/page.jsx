import Image from "next/image";
import defaultImage from "@/public/defaultImage.jpg";

export default function AboutPage() {
    return (
        <section className="md:p-[50px]">
            <Image src={defaultImage} alt={"główne zdjęcie sekcji 'o mnie'"} />
            <h1 className="my-[24px] text-2xl">Cześć, miło Cię poznać! </h1>
            <p>
                Mam na imię Paweł i świadczę usługi z zakresu szeroko pojętego web developmentu. Jak bym siebie opisał w kilku słowach? Programista, sportowiec, gracz, kolekcjoner płyt muzycznych i szalików piłkarskich, szachista, pasjonat samorozwoju i pozytywnego podejścia do życia, amatorsko interesujący się historią, geopolityką, urbanistyką czy też psychologią. To tak na szybko 😊 Z każdej z tych dziedzin mam coś do zaoferowania i o każdej z nich można ze mną pogadać. Ale może po kolei.. 
            </p>
            <div>
                <Image src={defaultImage} alt={"główne zdjęcie sekcji 'o mnie'"}  className="max-w-[280px] max-h-[200px] md:max-w-[500px] md:max-h-[400px] pb-[20px] md:pb-0 md:pl-[20px] float-right"/>
                <h2 className="mt-[48px] mb-[24px] text-xl">Moja historia</h2>
                <p className="text-justify mb-[15px]">
                    Mimo, że z technologią miałem styczność już od najmłodszych lat (pierwszego peceta Tato przytargał do domu w okolicach roku 1998) i od początku wykazywałem nią zainteresowanie, stosunkowo późno zacząłem dzięki niej zarabiać na życie. Pierwsze linijki kodu napisałem podczas uczęszczania do technikum informatycznego. Wówczas był to głównie Pascal i C++.
                </p>
                <p className="text-justify mb-[15px]">
                    Pomimo prostoty tworzonych programików od samego początku było w tym coś co mnie niezmiennie fascynowało. Fascynowało i równocześnie onieśmielało, ponieważ uważałem, że ktoś taki jak ja nie nadaje się do konstruowania skomplikowanych algorytmów i nie jest w stanie nauczyć się tego na wysokim poziomie. W tamtym czasie zawód programisty był postrzegany przeze mnie jako zajęcie 'premium', coś co może robić tylko absolutny top. A ja się w tym topie nie widziałem. Skończyłem więc szkołę i.. dałem sobie spokój z IT.
                </p>
                <p className="text-justify mb-[15px]">
                Życie płynęło, zdążyłem rozpocząć studia logistyczne (których ostatecznie nie ukończyłem), podejmowałem się pracy w najróżniejszych dziedzinach, od sprzedaży, po transport czy farmację. W pewnym momencie uświadomiłem sobie, że nic tak naprawdę nie przynosi mi oczekiwanej satysfakcji, zarówno pod kątem charakteru pracy jak i zarobków. Zawsze uważałem siebie za osobę kreatywną i sądziłem, że w życiu zawodowym powinienem być w miejscu, które będzie mi umożliwiać korzystanie z tej cechy. Z racji, że w mojej opinii nie ma innej dziedziny jak programowanie, która tak doskonale łączy w sobie wspomnianą wcześniej kreatywność z czystym, logicznym myśleniem, postanowiłem, tym razem na poważnie spróbować jeszcze raz podejść do tego tematu.
                </p>
                <p className="text-justify mb-[15px]">
                Uznałem, że technologie webowe to coś w czym będę czuł się najlepiej. Po zakupieniu kilku książek i kursów internetowych przystąpiłem do pracy i muszę przyznać, że totalnie mnie to pochłonęło. Każdą wolną chwilę poświęcałem na rozwijaniu umiejętności. Gdy byłem w domu - pisałem, gdy byłem poza nim i miałem przy sobie tylko smartfona - oglądałem kursy lub czytałem dokumentację. W międzyczasie zapisałem się na studia informatyczne, które dodatkowo dołożyły intensywności.
                </p>
                <p className="text-justify">
                Po kilku miesiącach takiego działania byłem gotów podejmować się pierwszych poważniejszych projektów, przy których w dalszym ciągu nabywałem całą masę wiedzy oraz doświadczenia (i przy okazji stresu). Tym sposobem miałem na koncie np. wykonanie strony wizytówki gabinetu stomatologicznego oraz w pełni działającego sklepu internetowego sprzedającego rękodzieła. To wszystko otworzyło mi drogę do zdobycia upragnionej, stałej pracy jako developer. Od tamtej chwili minęły już prawie dwa lata, wciąż poszukuję nowych wyzwań i absolutnie nie zatrzymuję się w poszerzaniu swoich kompetencji jak web developer.
                </p>
            </div>
            
            <div>
                <Image src={defaultImage} alt={"główne zdjęcie sekcji 'o mnie'"}  className="max-w-[280px] max-h-[200px] md:max-w-[500px] md:max-h-[400px] pb-[20px] md:pb-0 md:pr-[20px] float-left"/>
                <h2 className="mt-[48px] mb-[24px] text-xl">Jak pracuję?</h2>
                <p className="text-justify mb-[15px]">
                    Kilkuletnie doświadczenie nauczyło mnie, że do każdego projektu należy podchodzić indywidualnie oraz od samego początku dbać o architekturę i porządek w kodzie. Żadna technologia lub podejście nie są uniwersalne dla każdego przypadku, dlatego dobry plan to coś nad czym zawsze się pochylam. Bardzo lubię brać udział w każdym (o ile to możliwe) aspekcie projektu, od analizy biznesowej, przez design, architekturę, na wytwarzaniu oprogramowania kończąc.
                </p>
                <p className="text-justify mb-[15px]">
                    Odkrywanie nowych możliwości czy ścieżek rynku IT również nie jest mi straszne. Chętnie wykraczam poza programowanie webowe, pisząc gry lub rozwijając umiejętności z dziedziny elektroniki. Staram się patrzeć szerzej na swoją karierę i na bieżąco podejmować się wyzwań, z którymi nie miałem wcześniej do czynienia. Stąd pomysł na prowadzenie niniejszego bloga, dzięki któremu mogę przekazać innym i usystematyzować swoją wiedzę, ucząc się przy tym umiejętności dobrego pisania.
                </p>
                <p className="text-justify mb-[15px]">
                    Bardzo dziękuję, że poświęciłeś/aś czas na przeczytanie tych kilkudziesięciu linijek. Mam nadzieję, że czas spędzony na blogu będzie owocny i znajdziesz na nim to, czego szukałeś/aś. Zapraszam również do kontaktu poprzez formularz lub social media, chętnie odpowiem na wszelkie pytania.
                </p>
            </div>     
        </section>
    );
}
