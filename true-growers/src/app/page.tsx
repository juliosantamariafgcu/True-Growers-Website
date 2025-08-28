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
      <ul>
        {randomProducts.map((product, index) => (
          <li key={product.product_number}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
