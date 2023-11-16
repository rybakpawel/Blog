import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
