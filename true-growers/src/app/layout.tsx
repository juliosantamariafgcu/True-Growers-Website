import "./globals.css";
import Navbar from "./navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
