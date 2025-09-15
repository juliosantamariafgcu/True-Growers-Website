import Link from "next/link";
import productData from "../../product_data.json";
import fs from "fs";
import path from "path";
import Image from "next/image";

type Product = {
  product_number: string;
  title: string;
  file_location: string;
  image?: string;
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
    return (
      <div className="pt-[42px] flex justify-center">
        <h1 className="text-xl font-semibold text-red-500">
          Product not found
        </h1>
      </div>
    );
  }

  const filePath = path.join(process.cwd(), "public", currentProduct.file_location);
  let csvData: string[][] = [];
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    csvData = parseCSV(fileContent);
  } catch (err) {
    console.error("Error reading CSV file:", err);
  }

  return (
    <div className="pt-[42px] flex flex-col items-center">
      <div className="w-[95%] max-w-3xl mb-4">
        <Link href="/products" className="text-blue-400 hover:underline flex items-center">
          ← Back to Products
        </Link>
      </div>

      <div className="bg-[#3A3A3A] rounded-2xl shadow-md flex items-center p-6 w-[95%] max-w-3xl mb-8">
        {currentProduct.image && (
          <div className="w-32 h-32 relative flex-shrink-0">
            <Image
              src={currentProduct.image}
              alt={currentProduct.title}
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <div className="ml-6 text-white">
          <h1 className="text-2xl">{currentProduct.title}</h1>
        </div>
      </div>

      {csvData.length > 0 ? (
        <div className="overflow-x-auto w-[95%] max-w-5xl">
          <table className="w-full border-collapse text-sm text-left rounded-lg overflow-hidden">
            <tbody>
              {csvData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-[#3A3A3A]" : "bg-[#4A4A4A]"}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-2 border border-gray-600 text-white"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 italic">No CSV data available.</p>
      )}
    </div>
  );
}
