"use client";

import { useRef, useState } from "react";
import Link from "next/link";

type Item = { name: string; title: string; src: string };

function LicenseItem({ name, title, src }: Item) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  const handleToggle = () => {
    const isOpen = !!detailsRef.current?.open;
    setOpen(isOpen);
    if (isOpen && !shouldLoad) setShouldLoad(true); // lazy-load iframe
  };

  return (
    <details
      ref={detailsRef}
      onToggle={handleToggle}
      className="rounded-xl border border-gray-200 dark:border-gray-700 bg-[#D2E4D6] dark:bg-[#36593D]"
    >
      <summary
        className="flex items-center justify-between gap-3 cursor-pointer select-none list-none p-4 rounded-xl hover:bg-[#4A9833] dark:hover:bg-[#346B24] transition-colors [&::-webkit-details-marker]:hidden"
      >
        <span className="font-medium">{name}</span>
        <svg
          aria-hidden
          className={`h-5 w-5 transform transition-transform ${
            open ? "rotate-180" : ""
            }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
        </svg>
      </summary>

      <div className="px-4 pb-4">
        <h3 className=" text-lg mb-3">{title}</h3>

        {shouldLoad ? (
          <iframe
            key={src}
            src={src}
            title={title}
            className="w-full h-[60vh] md:h-[70vh] lg:h-[75vh] rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700"
            loading="lazy"
          />
        ) : (
          <div className="text-sm text-gray-700 dark:text-gray-200">
            Click to load the PDF viewer…
          </div>
        )}

        <div className="mt-3">
          <Link
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded py-2 px-4 font-medium bg-[#4A9833] dark:bg-[#015730] text-[#EBEBEB] hover:bg-[#346B24] dark:hover:bg-[#002816] transition-colors"
          >
            Open in new tab
          </Link>
        </div>
      </div>
    </details>
  );
}

export default function LicensesAccordion() {
  const items: Item[] = [
    {
      name: "Seed Use License",
      title: "Resolution 1899 of 22 Nov 2021 – License for Seed Use (TRUE GROWERS)",
      src: "/Licenses/2021-11-22_Grant_License_SeedUseForPlanting_TRUEGROWERS.pdf",
    },
    {
      name: "Non-Psychoactive Cultivation",
      title: "Resolution 0202 of 17 Feb 2022 – License for Cultivation of Non-Psychoactive Cannabis (TRUE GROWERS)",
      src: "/Licenses/2022-02-17_Grant_License_NonPsychoactiveCannabis_TRUEGROWERS.pdf",
    },
    {
      name: "Psychoactive Cultivation",
      title: "Resolution 0199 of 16 Feb 2022 – License for Cultivation of Psychoactive Cannabis (TRUE GROWERS)",
      src: "/Licenses/2022-02-16_Grant_License_PsychoactiveCannabis_TRUEGROWERS.pdf",
    },
    {
      name: "Modification – Psychoactive Export",
      title: "Resolution 1555 of 18 Aug 2022 – Modification of Psychoactive Cannabis Cultivation License to include Export (TRUE GROWERS)",
      src: "/Licenses/2022-08-18_Modification_License_PsychoactiveCannabis_Export_TRUEGROWERS.pdf",
    },
    {
      name: "Modification – Non-Psychoactive Export",
      title: "Resolution 0964 of 25 May 2022 – Modification of Non-Psychoactive Cannabis Cultivation License to include Export (TRUE GROWERS)",
      src: "/Licenses/2022-05-25_Modification_License_NonPsychoactiveCannabis_Export_TRUEGROWERS.pdf",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 pb-12">
      <div className="h-px bg-gray-400 mb-[50px]"></div>
      <h2 className="text-center text-2xl mb-6">Licenses</h2>
      <div className="space-y-4">
        {items.map((it) => (
          <LicenseItem key={it.src} {...it} />
        ))}
      </div>
    </div>
  );
}
