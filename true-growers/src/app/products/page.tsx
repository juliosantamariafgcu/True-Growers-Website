"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import productData from "../product_data.json";
import PageWrapper from "../wrapper";
import { ChevronDown, Grid, List } from "lucide-react";

type Product = {
  product_number: string;
  title: string;
  info: string;
  image: string;
  description?: Record<string, string>;
};

export default function ProductsPage() {
  const products: Product[] = productData.products ?? [];
  const [openProduct, setOpenProduct] = useState<string | null>(null);
  const [isGridView, setIsGridView] = useState(false);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const toggleProduct = (productNumber: string) => {
    setOpenProduct(openProduct === productNumber ? null : productNumber);
  };

  const groupProducts = (arr: Product[], size: number) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, [] as Product[][]);

  const groupedProducts = isGridView ? groupProducts(products, columns) : [products];

  return (
    <PageWrapper>
      <div className="mx-auto max-w-6xl px-6 mt-20 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-5xl font-semibold text-gray-900 dark:text-white">Products</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
              Browse our collection. Click an item to view more details.
            </p>
          </div>

          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 rounded-lg border ${
                isGridView ? "bg-green-600 border-green-600" : "border-gray-400 dark:border-gray-600"
              }`}
              title="Grid view"
            >
              <Grid className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 rounded-lg border ${
                !isGridView ? "bg-green-600 border-green-600" : "border-gray-400 dark:border-gray-600"
              }`}
              title="List view"
            >
              <List className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>

        {isGridView ? (
          groupedProducts.map((row, rowIndex) => (
            <div key={rowIndex}>
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${
                  row.some((p) => p.product_number === openProduct) ? "mb-0" : "mb-8"
                }`}
              >
                {row.map((product) => (
                  <div
                    key={product.product_number}
                    onClick={() => toggleProduct(product.product_number)}
                    className={`border border-gray-300 dark:border-gray-700 rounded-xl p-5 cursor-pointer hover:border-green-600 transition-colors bg-gray-100 dark:bg-gray-900/30 ${
                      openProduct === product.product_number ? "border-green-600" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4 items-start">
                      <div className="relative w-28 h-28 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex justify-between items-center">
                          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {product.title}
                          </h2>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-600 dark:text-gray-400 transform transition-transform ${
                              openProduct === product.product_number ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        <p className="text-base text-gray-800 dark:text-gray-300 mt-3">
                          {product.info}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {openProduct && row.some((p) => p.product_number === openProduct) && (
                <div
                  className={`mt-4 mb-8 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-100 dark:bg-gray-800/50 overflow-hidden transform transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    openProduct ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div
                    key={openProduct}
                    className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] delay-75 ${
                      openProduct ? "max-h-[600px]" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 animate-fadeSlide">
                      {products
                        .filter((p) => p.product_number === openProduct)
                        .map((p) => (
                          <div key={p.product_number}>
                            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                              {p.title} — Details
                            </h3>
                            {p.description ? (
                              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1">
                                {Object.values(p.description).map((desc, i) => (
                                  <li key={i}>{desc}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-600 dark:text-gray-400">
                                No additional details available.
                              </p>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-6">
            {products.map((product) => (
              <div
                key={product.product_number}
                onClick={() => toggleProduct(product.product_number)}
                className={`border border-gray-300 dark:border-gray-700 rounded-xl p-5 cursor-pointer hover:border-green-600 transition-colors bg-gray-100 dark:bg-gray-900/30 ${
                  openProduct === product.product_number ? "border-green-600" : ""
                }`}
              >
                <div className="flex flex-row gap-4 items-start">
                  <div className="relative w-28 h-28 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {product.title}
                      </h2>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 transform transition-transform ${
                          openProduct === product.product_number ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <p className="text-base text-gray-800 dark:text-gray-300 mt-3">
                      {product.info}
                    </p>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openProduct === product.product_number
                          ? "max-h-[500px] opacity-100 mt-4 border-t border-gray-300 dark:border-gray-700 pt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {product.description ? (
                        <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 animate-fadeSlideIn">
                          {Object.values(product.description).map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400 animate-fadeSlideIn">
                          No additional details available.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeSlide {
          animation: fadeSlide 0.35s ease-in-out;
        }

        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.4s ease-in-out;
        }
      `}</style>
    </PageWrapper>
  );
}