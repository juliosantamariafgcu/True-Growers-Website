"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import productData from "./product_data.json";
import Link from "next/link";

export default function Home() {
  const [randomProducts, setRandomProducts] = useState<any[]>([]);
  const [showIndicator, setShowIndicator] = useState(true);
  const controls = useAnimation();

  // Helper: Create URL slugs for product routes
  const slugify = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  // Select random featured products
  useEffect(() => {
    const products = productData.products ?? [];
    const shuffled = [...products].sort(() => 0.5 - Math.random()).slice(0, 3);
    setRandomProducts(shuffled);
  }, []);

  // Scroll indicator toggle
  useEffect(() => {
    const handleScroll = () => setShowIndicator(window.scrollY < 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gentle animated pan for background
  useEffect(() => {
    controls.start({
      backgroundPositionY: ["0%", "5%"],
      transition: {
        duration: 25,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    });
  }, [controls]);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* --- DESKTOP BACKGROUND --- */}
      <div
        className="hidden md:block fixed inset-0 -z-10 bg-center bg-no-repeat bg-cover md:bg-top"
        style={{
          backgroundImage: "url('/cannabis-sativa-L.jpg')",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
          backgroundColor: "#0c0c0c",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col justify-center items-center min-h-dvh text-center overflow-hidden px-4 sm:px-6">
        {/* Mobile Background */}
        <motion.div
          animate={controls}
          className="md:hidden absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cannabis-sativa-L.jpg')",
            backgroundAttachment: "scroll",
            backgroundSize: "cover",
            backgroundColor: "#0c0c0c",
            willChange: "background-position, transform",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
          }}
        />

        {/* Frosted Logo Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/70 dark:bg-black/50 backdrop-blur-md px-8 sm:px-10 py-10 sm:py-12 rounded-2xl shadow-lg flex flex-col items-center max-w-sm sm:max-w-md w-full"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <Image
              src="/logo_image_transparent.png"
              alt="Logo"
              width={220}
              height={220}
              className="drop-shadow-lg mb-6"
            />
          </motion.div>
          <p className="text-base sm:text-lg text-[#141414] dark:text-[#EBEBEB] font-light max-w-md">
            Cultivating innovation and quality in cannabis since 2021.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIndicator ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-12 flex flex-col items-center"
        >
          <span className="text-base md:text-lg mb-2 tracking-wide text-white/90 drop-shadow-lg">
            Scroll for more
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-10 md:w-10 text-white opacity-90 drop-shadow-md"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </section>

      {/* --- MAIN CONTENT SECTIONS --- */}
      <section className="relative z-10 bg-[#EBEBEB]/95 dark:bg-[#141414]/95 backdrop-blur-md rounded-t-3xl pt-16 pb-20 space-y-12 sm:space-y-20 px-4 sm:px-6">
        {/* --- PRODUCTS SECTION --- */}
<div className="max-w-6xl mx-auto bg-[#D2E4D6] dark:bg-[#36593D] rounded-3xl shadow-lg p-6 sm:p-10 md:p-12 hover:bg-[#4A9833]/90 dark:hover:bg-[#346B24]/90 transition-all duration-300">
  <div className="flex flex-col items-center">
    {/* Header Row: Title Left, Text Right */}
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
      <h2 className="font-heading text-3xl font-semibold mb-4 md:mb-0 md:w-1/2 text-left">
        Our Featured Products
      </h2>
      <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200 md:w-1/2 text-right md:text-left">
        Discover our finest strains cultivated with precision and care.
        Each product is crafted to meet medical-grade standards with
        unmatched consistency and quality.
      </p>
    </div>

    {/* Product Cards Row */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mb-10">
      {randomProducts.map((product) => (
        <Link
          key={product.product_number}
          href={`/products/${slugify(product.title)}`}
          className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 bg-gray-100 dark:bg-gray-900/30 flex flex-col justify-between hover:border-green-600 transition-all w-full max-w-[260px]"
        >
          <div className="relative w-full h-40 mb-4">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
            {product.title}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 text-center mt-2">
            {product.info}
          </p>
        </Link>
      ))}
    </div>

    {/* Button at the Bottom */}
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


        {/* --- ABOUT SECTION --- */}
        <div className="max-w-6xl mx-auto bg-[#D2E4D6] dark:bg-[#36593D] rounded-3xl shadow-lg p-6 sm:p-10 md:p-12 hover:bg-[#4A9833]/90 dark:hover:bg-[#346B24]/90 transition-all duration-300">
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
                href="/about"
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

          {/* Mobile Layout */}
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

        {/* --- CONTACT SECTION --- */}
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
              href="/contact"
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
