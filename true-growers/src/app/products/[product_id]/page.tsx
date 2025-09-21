import Link from "next/link";
import productData from "../../product_data.json";
import fs from "fs";
import path from "path";
import Image from "next/image";
import PageWrapper from "@/app/wrapper";

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
    <PageWrapper>
      <div className="flex flex-col items-center mb-6">
        {/* Back button */}
        <div className="w-[95%] max-w-5xl mb-4">
          <Link href="/products" className="text-[#439833] active:text-[#36593D] transition-colors 
          duration-300 flex items-center">
            ← Back to Products
          </Link>
        </div>

        {/* Product image + title */}
        <div className="flex items-center w-[95%] max-w-5xl mb-6">
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
          <div className="ml-6">
            <h1 className="text-2xl">{currentProduct.title}</h1>
          </div>
        </div>

        {/* CSV table */}
        {csvData.length > 0 ? (
          <div className="overflow-x-auto w-[95%] max-w-5xl">
            <table className="w-full border-collapse text-sm text-left overflow-hidden rounded-lg shadow-md">
              <tbody>
                {csvData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={
                      rowIndex % 2 === 0
                        ? "bg-[#3A3A3A] text-white"
                        : "bg-[#4A4A4A] text-white"
                    }
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-2 border border-gray-600"
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
          <p className="italic opacity-70">No CSV data available.</p>
        )}
      </div>
    </PageWrapper>
  );
}
