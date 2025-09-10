"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black px-8 py-4 shadow-md">
      <div className="flex items-center">
        <Image
          src="/logo_title_transparent.png"
          alt="True Growers Logo"
          width={160}
          height={40}
          priority
        />
      </div>

      <div className="flex space-x-10 text-white text-lg font-light">
        <a href="/" className="hover:text-green-400 transition-colors duration-200">Home</a>
        <a href="/about_us" className="hover:text-green-400 transition-colors duration-200"> About Us </a>
        <a href="/products" className="hover:text-green-400 transition-colors duration-200"> Products </a>
        <a href="/licenses" className="hover:text-green-400 transition-colors duration-200"> Licenses </a>
      </div>
    </nav>
  );
}
