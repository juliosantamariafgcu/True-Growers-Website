import Link from "next/link";
import productData from "../product_data.json";

type Product = {
  product_number: string;
  title: string;
  file_location: string;
};

export default function ProductsPage() {
  const products: Product[] = productData.products ?? [];

  return (
    <div>
      <div className="pt-[42px]">
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product.product_number}>
            <Link href={`/products/${product.product_number}`}>
              {product.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
