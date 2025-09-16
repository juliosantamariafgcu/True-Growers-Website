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
    <html lang="en">
      <body className={`${coda.className} bg-white text-black dark:bg-[#141414] dark:text-white min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
