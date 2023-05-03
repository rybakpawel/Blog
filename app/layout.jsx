import "./globals.css";
import { Lato } from "next/font/google";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

const lato = Lato({
    weight: ["400", "700"],
    subsets: ["latin-ext"],
});

export const metadata = {
    title: "Paweł Rybak",
    description: "Blog poświęcony tematyce wszelakiej",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <body className={lato.className}>
                <Header></Header>
                <div className="px-[20px] md:mx-[auto] max-w-[1200px]">
                    <Navigation></Navigation>
                    <Main children={children}></Main>
                </div>
                <Footer></Footer>
            </body>
        </html>
    );
}
