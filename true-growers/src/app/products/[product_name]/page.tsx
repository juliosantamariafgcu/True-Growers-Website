import Image from "next/image";
import productData from "../../product_data.json";
import PageWrapper from "../../wrapper";
import Link from "next/link";

type Product = {
  product_number: string;
  title: string;
  info: string;
  image: string;
  description?: Record<string, string>;
};

// ✅ Utility to generate URL-friendly slugs (used in both list and product pages)
const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// ✅ Static generation: build all product pages at compile time
export async function generateStaticParams() {
  const products: Product[] = productData.products ?? [];

  return products.map((product) => ({
    product_name: slugify(product.title),
  }));
}

// ✅ Main product page (async because we await params)
export default async function ProductPage({
  params,
}: {
  params: Promise<{ product_name: string }>;
}) {
  const { product_name } = await params;

  const products: Product[] = productData.products ?? [];
  const product = products.find((p) => slugify(p.title) === product_name);

  if (!product) {
    return (
      <PageWrapper>
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Product not found
          </h1>
          <Link
            href="/products"
            className="text-green-600 underline mt-4 inline-block"
          >
            ← Back to Products
          </Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 mt-20 mb-10">
        <Link href="/products" className="text-green-600 underline mb-6 inline-block">
          ← Back to Products
        </Link>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-full md:w-1/2 aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              {product.title}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {product.info}
            </p>

            {product.description && (
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2">
                {Object.values(product.description).map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
