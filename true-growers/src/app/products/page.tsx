"use client"
import { useEffect, useState } from "react";

type Product = {
  product_number: string;
  title: string;
  file_location: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("product_data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.product_number}>
          {product.product_number} - {product.title}
        </div>
      ))}
    </div>
  );
}
