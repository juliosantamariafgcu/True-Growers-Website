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
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/cannabis-sativa-L.jpg"
          alt="Background cannabis plants"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/logo_image_transparent.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center my-12">
        <p className="text-xl italic">“Quote of some sort here.”</p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-12">
        {randomProducts.map((product) => (
          <div
            key={product.product_number}
            className="rounded-2xl p-4 bg-[#666666] hover:bg-[#002816] transition-colors duration-300"
          >
            <p className="text-gray-300 text-sm mb-2">Product info</p>
            <div className="flex gap-4">
              <Image
                src={product.image}
                alt={product.title}
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <h3 className="font-bold text-lg">{product.title}</h3>
                <p className="text-sm text-gray-200 whitespace-pre-line">
                  {product.info || "No additional info available."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
