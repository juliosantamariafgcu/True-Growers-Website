import Link from "next/link";
import Image from "next/image";
import productData from "../product_data.json";

type Product = {
  product_number: string;
  title: string;
  file_location: string;
  image: string;
};

export default function ProductsPage() {
  const products: Product[] = productData.products ?? [];

  return (
    <div className="pt-[42px] flex flex-col items-center">
      <h1 className="text-2xl mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4">
        {products.map((product) => (
          <Link
            key={product.product_number}
            href={`/products/${product.product_number}`}
            className="bg-[#3A3A3A] hover:bg-[#002816] rounded-2xl shadow-md overflow-hidden flex items-center p-4 transition-colors duration-300 w-full">
            <div className="w-28 h-28 relative flex-shrink-0">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="ml-6 flex-1">
              <h2 className="text-white text-lg">{product.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
