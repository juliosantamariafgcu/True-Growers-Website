"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import productData from "../product_data.json";
import PageWrapper from "../wrapper";

type Product = {
  product_number: string;
  title: string;
  info: string;
  image: string;
};

export default function ProductsPage() {
  const products: Product[] = productData.products ?? [];
  const [isGridView, setIsGridView] = useState(false);
  const [columns, setColumns] = useState(3);

  // Load saved view preference from localStorage
  useEffect(() => {
    const savedView = localStorage.getItem("productView");
    if (savedView === "grid") setIsGridView(true);
  }, []);

  // Save preference whenever the view changes
  const handleViewChange = (grid: boolean) => {
    setIsGridView(grid);
    localStorage.setItem("productView", grid ? "grid" : "list");
  };

  // Adjust grid column count responsively
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

  // Create URL-friendly slugs from product titles
  const slugify = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <PageWrapper>
      <div className="mx-auto max-w-6xl px-6 mt-20 mb-6">
        {/* Header + View toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-5xl font-semibold text-gray-900 dark:text-white">
              Products
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
              Browse our collection below.
            </p>
          </div>

          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => handleViewChange(true)}
              className={`p-2 rounded-lg border ${
                isGridView
                  ? "bg-green-600 border-green-600 text-white"
                  : "border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
              title="Grid view"
            >
              Grid
            </button>
            <button
              onClick={() => handleViewChange(false)}
              className={`p-2 rounded-lg border ${
                !isGridView
                  ? "bg-green-600 border-green-600 text-white"
                  : "border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              }`}
              title="List view"
            >
              List
            </button>
          </div>
        </div>

        {/* Grid view */}
        {isGridView ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            style={{ gridAutoRows: "1fr" }}
          >
            {products.map((product) => (
              <Link
                key={product.product_number}
                href={`/products/${slugify(product.title)}`}
                className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 bg-gray-100 dark:bg-gray-900/30 flex flex-col justify-between hover:border-green-600 transition-all"
              >
                <div className="relative w-24 h-24 mb-4 mx-auto">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                  {product.title}
                </h2>
                <p className="text-base text-gray-800 dark:text-gray-300 mt-2 text-center">
                  {product.info}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          /* List view */
          <div className="flex flex-col gap-6">
            {products.map((product) => (
              <Link
                key={product.product_number}
                href={`/products/${slugify(product.title)}`}
                className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 bg-gray-100 dark:bg-gray-900/30 flex flex-row gap-4 items-center hover:border-green-600 transition-all"
              >
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {product.title}
                  </h2>
                  <p className="text-base text-gray-800 dark:text-gray-300 mt-2">
                    {product.info}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
