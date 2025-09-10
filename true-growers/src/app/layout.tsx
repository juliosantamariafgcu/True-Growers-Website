import "./globals.css";
import Navbar from "./navbar";

<link
  href="https://fonts.googleapis.com/css2?family=Coda:wght@400;800&display=swap"
  rel="stylesheet"
/>


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#141414] text-white font-sans min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
