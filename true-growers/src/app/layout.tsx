import { Coda, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const coda = Coda({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-coda",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${coda.variable} ${lato.variable} h-full`}>
      <body className="bg-[#EBEBEB] text-[#141414] dark:bg-[#141414] dark:text-[#EBEBEB] min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-[42px]">{children}</main>
      </body>
    </html>
  );
}