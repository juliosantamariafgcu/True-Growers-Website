import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#141414] h-[42px] px-8 pt-3 shadow-md z-50">
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

        <div className="flex space-x-10 text-[#CCCCCC] text-sm font-normal">
          <Link href="/" className="hover:text-[#4A9833] transition-colors duration-200">Home</Link>
          <Link href="/about_us" className="hover:text-[#4A9833] transition-colors duration-200">About Us</Link>
          <Link href="/products" className="hover:text-[#4A9833] transition-colors duration-200">Products</Link>
          <Link href="/licenses" className="hover:text-[#4A9833] transition-colors duration-200">Licenses</Link>
        </div>
      </div>
    </nav>

  );
}
