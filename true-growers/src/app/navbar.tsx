"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#e0e0e0]/90 dark:bg-[#141414]/90 backdrop-blur-sm shadow-md transition-colors duration-300">
      <div className="flex items-center justify-between px-6 py-3 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_title_transparent.png"
            alt="Logo"
            width={170}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          {["Home", "About Us", "Products", "Contact Us"].map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "_")}`
              }
              className="hover:text-[#4A9833] transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none transition-transform duration-200"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown (slides in/out from right, centered content) */}
      <div
        className={`absolute top-full right-0 w-full bg-[#EBEBEB] dark:bg-[#141414] shadow-lg border-t border-[#ccc]/50 dark:border-[#333]/50 overflow-hidden transform transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center space-y-4 py-5 text-sm font-medium transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-10"
          }`}
        >
          {["Home", "About Us", "Products", "Contact Us"].map((item, idx) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "_")}`
              }
              onClick={() => setIsOpen(false)}
              className="hover:text-[#4A9833] transition-colors duration-200"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
