import "./globals.css";
import { Lato } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <AuthProvider>
        <body className={lato.className}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
