"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[42px] px-8 pt-3 shadow-md z-50 transition-colors duration-300 bg-inherit">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logo_title_transparent.png"
            alt="Logo"
            width={170}
            height={50}
            priority
          />
        </div>

        {/*Desktop navbar*/}
        <div className="hidden md:flex space-x-10 text-sm font-normal">
          <Link href="/" className="hover:text-[#4A9833] transition-colors duration-200">Home</Link>
          <Link href="/about_us" className="hover:text-[#4A9833] transition-colors duration-200">About Us</Link>
          <Link href="/products" className="hover:text-[#4A9833] transition-colors duration-200">Products</Link>
          <Link href="/licenses" className="hover:text-[#4A9833] transition-colors duration-200">Licenses</Link>
        </div>

        {/*Mobile hamburger button*/}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none transition-colors duration-200">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/*Mobile menu*/}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-2 text-sm font-normal bg-[#EBEBEB] dark:bg-[#141414] p-4 shadow-lg transition-colors duration-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#4A9833] transition-colors duration-200">Home</Link>
          <Link href="/about_us" onClick={() => setIsOpen(false)} className="hover:text-[#4A9833] transition-colors duration-200">About Us</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="hover:text-[#4A9833] transition-colors duration-200">Products</Link>
          <Link href="/licenses" onClick={() => setIsOpen(false)} className="hover:text-[#4A9833] transition-colors duration-200">Licenses</Link>
        </div>
      )}
    </nav>
  );
}
