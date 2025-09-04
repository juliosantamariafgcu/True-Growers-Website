import productData from "../../product_data.json";

type Product = {
  product_number: string;
  title: string;
  file_location: string;
};

export default function ProductPage({
  params,
}: {
  params: { product_id: string };
}) {
  const products: Product[] = productData.products ?? [];
  const currentProduct = products.find(
    (p) => p.product_number === params.product_id
  );

  if (!currentProduct) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{currentProduct.title}</h1>
      <p>Product Number: {currentProduct.product_number}</p>
      <p>File Location: {currentProduct.file_location}</p>
    </div>
  );
}
