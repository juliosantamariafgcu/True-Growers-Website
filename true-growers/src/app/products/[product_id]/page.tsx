import productData from "../../product_data.json";
import fs from "fs";
import path from "path";

type Product = {
  product_number: string;
  title: string;
  file_location: string;
};

function parseCSV(content: string): string[][] {
  return content
    .trim()
    .split("\n")
    .map((line) => line.split(","));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) {
  const { product_id } = await params;
  const products: Product[] = productData.products ?? [];
  const currentProduct = products.find(
    (p) => p.product_number === product_id
  );

  if (!currentProduct) {
    return <h1>Product not found</h1>;
  }

  // Read CSV file synchronously from public folder
  const filePath = path.join(process.cwd(), "public", currentProduct.file_location);
  let csvData: string[][] = [];
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    csvData = parseCSV(fileContent);
  } catch (err) {
    console.error("Error reading CSV file:", err);
  }

  return (
    <div>
      <h1>{currentProduct.title}</h1>
      <p>Product Number: {currentProduct.product_number}</p>
      <p>File Location: {currentProduct.file_location}</p>

      {csvData.length > 0 ? (
        <table>
          <tbody>
            {csvData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No CSV data available.</p>
      )}
    </div>
  );
}
