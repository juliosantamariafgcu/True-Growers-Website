import Link from "next/link";
import Image from "next/image";
import productData from "../product_data.json";
import PageWrapper from "../wrapper";

type Product = {
  product_number: string;
  title: string;
  file_location: string;
  info: string;
  image: string;
};

export default function ProductsPage() {
  const products: Product[] = productData.products ?? [];

  return (
    <PageWrapper>
      <div className="mx-auto max-w-5xl px-6 mt-20 mb-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl">Products</h1>
          <p className="text-gray-400 mt-3 text-lg">
            Browse our collection of products. Click any item to learn more.
          </p>
        </div>

        {/* Product List */}
        <ul className="space-y-8">
          {products.map((product) => (
            <li
              key={product.product_number}
              className="border border-gray-700 rounded-xl p-5 hover:border-green-600 transition-colors"
            >
              <Link href={`/products/${product.product_number}`} className="flex items-start gap-6 group">
                {/* Image */}
                <div className="w-28 h-28 relative flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h2 className="text-2xl">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Product #{product.product_number}
                  </p>
                  <p className="text-base text-gray-300 mt-3">{product.info}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
}
