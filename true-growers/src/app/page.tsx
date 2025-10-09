"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import productData from "./product_data.json";
import Link from "next/link";
import PageWrapper from "./wrapper";

export default function Home() {
  const [randomProducts, setRandomProducts] = useState<any[]>([]);
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const products = productData.products ?? [];
    const shuffled = [...products].sort(() => 0.5 - Math.random()).slice(0, 3);
    setRandomProducts(shuffled);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowIndicator(window.scrollY < 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="relative min-h-screen flex flex-col">
        {/* Desktop/tablet fixed background */}
        <div
          className="hidden md:block fixed inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/cannabis-sativa-L.jpg')" }}
        />

        {/* Hero Section */}
        <section className="relative flex flex-col justify-center items-center min-h-dvh text-center">
          {/* Mobile background, hero-only */}
          <div
            className="md:hidden absolute inset-0 -z-10 bg-cover bg-center"
            style={{ backgroundImage: "url('/cannabis-sativa-L.jpg')" }}
          />

          {/* Frosted Logo Box */}
          <div className="bg-white/70 dark:bg-black/50 backdrop-blur-md px-10 py-12 rounded-2xl shadow-lg flex flex-col items-center">
            <Image
              src="/logo_image_transparent.png"
              alt="Logo"
              width={240}
              height={240}
              className="drop-shadow-lg mb-6"
            />
            <p className="text-lg md:text-xl text-[#141414] dark:text-[#EBEBEB] font-light max-w-md">
              Cultivating innovation and quality in cannabis since 2021.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-12 flex flex-col items-center transition-opacity duration-500 ${
              showIndicator ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-base md:text-lg mb-2 tracking-wide text-white/90 drop-shadow-lg">
              Scroll for more
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10 text-white opacity-90 animate-bounce drop-shadow-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </section>

        {/* --- MAIN SECTIONS --- */}
        <section className="relative z-10 bg-[#EBEBEB]/95 dark:bg-[#141414]/95 backdrop-blur-md rounded-t-3xl pt-16 pb-20 space-y-12 sm:space-y-20">
          {/* Products Section */}
          <div className="max-w-6xl mx-auto bg-[#D2E4D6] dark:bg-[#36593D] rounded-3xl shadow-lg p-6 sm:p-10 hover:bg-[#4A9833]/90 dark:hover:bg-[#346B24]/90 transition-all duration-300">
            {/* Desktop Layout (with images) */}
            <div className="hidden md:flex flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-heading text-3xl font-semibold mb-6">
                  Our Featured Products
                </h2>
                <p className="text-base leading-relaxed mb-8 text-gray-800 dark:text-gray-200">
                  Discover our finest strains cultivated with precision and
                  care. Each product is crafted to meet medical-grade standards
                  with unmatched consistency and quality.
                </p>
                <Link
                  href="/products"
                  className="inline-block rounded py-2 px-6 font-medium text-[#EBEBEB] bg-[#4A9833]
                  hover:bg-[#346B24] active:bg-[#36593D] dark:bg-[#36593D] dark:hover:bg-[#015730]
                  dark:active:bg-[#002816] transition-colors duration-300"
                >
                  View All Products
                </Link>
              </div>
              <div className="flex-1 grid grid-cols-3 gap-4 justify-items-center">
                {randomProducts.map((product) => (
                  <div
                    key={product.product_number}
                    className="rounded-xl bg-white/60 dark:bg-black/30 p-4 shadow-md w-[160px] hover:scale-105 transition-transform"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={140}
                      height={140}
                      className="rounded-md object-cover mb-3"
                    />
                    <p className="font-medium text-sm text-gray-800 dark:text-gray-100 text-center">
                      {product.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Layout (text-only) */}
            <div className="block md:hidden text-center">
              <h2 className="font-heading text-2xl font-semibold mb-4">
                Our Featured Products
              </h2>
              <p className="text-base leading-relaxed mb-6 text-gray-800 dark:text-gray-200">
                Discover our finest strains crafted with quality and care. Tap
                below to explore our full collection.
              </p>
              <Link
                href="/products"
                className="inline-block rounded py-2 px-6 font-medium text-[#EBEBEB] bg-[#4A9833]
                hover:bg-[#346B24] active:bg-[#36593D] dark:bg-[#36593D] dark:hover:bg-[#015730]
                dark:active:bg-[#002816] transition-colors duration-300"
              >
                View All Products
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="max-w-6xl mx-auto bg-[#D2E4D6] dark:bg-[#36593D] rounded-3xl shadow-lg p-6 sm:p-10 hover:bg-[#4A9833]/90 dark:hover:bg-[#346B24]/90 transition-all duration-300">
            {/* Desktop Layout (with image) */}
            <div className="hidden md:flex flex-row-reverse items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-heading text-3xl font-semibold mb-6">
                  About Us
                </h2>
                <p className="text-base leading-relaxed mb-8 text-gray-800 dark:text-gray-200">
                  Founded with a mission to redefine medical cannabis standards,
                  our team of passionate growers and scientists focus on purity,
                  sustainability, and innovation. We don’t just grow cannabis —
                  we grow trust.
                </p>
                <Link
                  href="/about_us"
                  className="inline-block rounded py-2 px-6 font-medium text-[#EBEBEB] bg-[#4A9833]
                  hover:bg-[#346B24] active:bg-[#36593D] dark:bg-[#36593D] dark:hover:bg-[#015730]
                  dark:active:bg-[#002816] transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex-1 flex justify-center">
                <Image
                  src="/cannabis-sativa-L.jpg"
                  alt="About company"
                  width={400}
                  height={260}
                  className="rounded-xl object-cover shadow-md"
                />
              </div>
            </div>

            {/* Mobile Layout (text-only) */}
            <div className="block md:hidden text-center">
              <h2 className="font-heading text-2xl font-semibold mb-4">
                About Us
              </h2>
              <p className="text-base leading-relaxed mb-6 text-gray-800 dark:text-gray-200">
                We’re redefining cannabis with purity, innovation, and
                sustainability at the core of everything we do.
              </p>
              <Link
                href="/about"
                className="inline-block rounded py-2 px-6 font-medium text-[#EBEBEB] bg-[#4A9833]
                hover:bg-[#346B24] active:bg-[#36593D] dark:bg-[#36593D] dark:hover:bg-[#015730]
                dark:active:bg-[#002816] transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Contact Section - Hero Footer */}
          <div className="w-full bg-[#D2E4D6] dark:bg-[#36593D] hover:bg-[#4A9833]/90 dark:hover:bg-[#346B24]/90 transition-all duration-300 rounded-none shadow-inner py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl font-semibold mb-6">
                Get in Touch
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-800 dark:text-gray-200">
                Have questions, ideas, or partnership opportunities?
                <br />
                We’d love to hear from you — let’s grow something great together.
              </p>
              <Link
                href="/contact_us"
                className="inline-block rounded py-3 px-8 font-medium text-[#EBEBEB] bg-[#4A9833]
                hover:bg-[#346B24] active:bg-[#36593D] dark:bg-[#36593D] dark:hover:bg-[#015730]
                dark:active:bg-[#002816] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
