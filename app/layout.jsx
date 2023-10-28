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
  title: "Paweł Rybak - web developer",
  description: "Blog autorski",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={lato.className}>
        <Header></Header>
        <div className="max-w-[1200px] px-[20px] md:mx-[auto]">
          <Navigation></Navigation>
          <Main children={children}></Main>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
