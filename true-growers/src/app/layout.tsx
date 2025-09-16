import { Coda } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const coda = Coda({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${coda.className} bg-[#EBEBEB] text-[#141414] dark:bg-[#141414] dark:text-[#EBEBEB] min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 pt-[50px]">
          {children}
        </main>
      </body>
    </html>
  );
}
