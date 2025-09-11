import Image from "next/image";
import productData from "./product_data.json";

export default function Home() {
  // Access the array under "products"
  const products = productData.products ?? [];

  // Pick 3 random ones
  const randomProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="pt-[42px]">
      {/* Hero Section */}
      <div className="relative h-[470px] w-full">
        <Image
          src="/cannabis-sativa-L.jpg"
          alt="Background cannabis plants"
          fill
          className="object-cover opacity-50"
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
        <p className="font-normal text-[#CCCCC] text-2xl">“Quote of some sort here.”</p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-12">
        {randomProducts.map((product) => (
          <div
            key={product.product_number}
            className="rounded-xl p-4 bg-[#3A3A3A] hover:bg-[#002816] transition-colors duration-300"
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
                <h3 className="font-normal text-lg text-[#EBEBEB]">{product.title}</h3>
                <p className="text-sm text-[#CCCCCC] whitespace-pre-line">
                  {product.info || "No additional information available."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
