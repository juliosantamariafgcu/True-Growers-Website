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
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.product_number}>
          <Link href={`/products/${product.product_number}`}>
            {product.product_number} - {product.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
