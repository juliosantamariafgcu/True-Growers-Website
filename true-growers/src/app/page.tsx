import Image from "next/image";
import productData from "./product_data.json";
import Link from "next/link";
import PageWrapper from "./wrapper";
import LicensesAccordion from "./licenses";

export default function Home() {
  const products = productData.products ?? [];

  const randomProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <PageWrapper>
      <div>
        {/* Hero Section */}
        <div className="relative h-[470px] w-full">
          <Image
            src="/cannabis-sativa-L.jpg"
            alt="Background cannabis plants"
            fill
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/logo_image_transparent.png"
              alt="Logo"
              width={220}
              height={220}
            />
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center my-12">
          <p className="font-normal text-2xl">
            "Cultivating innovation and quality in cannabis since 2021."
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-12">
          {randomProducts.map((product) => (
            <div
              key={product.product_number}
              className="rounded-xl p-4 bg-[#D2E4D6] dark:bg-[#36593D] hover:bg-[#4A9833] 
              dark:hover:bg-[#346B24] transition-colors duration-300"
            >
              <div className="flex gap-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={120}
                  height={120}
                  className="rounded-md object-cover"
                />
                <div>
                  <h3 className="font-medium text-lg">{product.title}</h3>
                  <p className="text-sm whitespace-pre-line">
                    {product.info || "No additional information available."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON PRODUCTS */}
        <div className="flex justify-center pb-5">
          <Link
            href="/products"
            className="button rounded py-2 px-6 mb-6 font-medium bg-[#4A9833] dark:bg-[#015730] 
            text-[#EBEBEB] hover:bg-[#346B24] dark:hover:bg-[#002816] transition-colors duration-300"
          >
            More Products
          </Link>
        </div>

        {/* Licenses Accordion */}
        <LicensesAccordion />
        
      </div>
    {/* Animation Wrapper */}
    </PageWrapper>
  );
}
