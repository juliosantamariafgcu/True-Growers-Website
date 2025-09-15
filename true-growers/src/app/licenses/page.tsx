"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type PdfLicenseProps = {
  title: string;
  src: string;
  isOpen: boolean;
  togglePdf: () => void;
};

function PdfLicense({title, src, isOpen, togglePdf}: PdfLicenseProps) {
  const [openPdf, setOpen] = useState(false);

  return (
    
    <div className="rounded-xl mb-4 overflow-hidden">
      {/* Header for the accordion*/}
      <button
        onClick={togglePdf}
        className="w-full text-[#CCCCCC] text-left p-4 bg-[#3A3A3A] hover:bg-[#015730] flex justify-between items-center"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>

      {/* Animation for opening and closing PDF */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-2">
              <embed
                src={src}
                type="application/pdf"
                className="w-full h-[600px] rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LicenseAccordion() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {title: "License1", src: "/Licencias/Licencia exportacion 0964 de 25 Mayo 2022 NO Psico.pdf"},
    {title: "License2", src: "/Licencias/Modificacion licencia sico para exporta.pdf"},
    {title: "License3", src: "/Licencias/Resolucion 0199 del 16 de Feb 2022 licencia cultivo plantas psicoactivo.pdf"},
    {title: "License4", src: "/Licencias/Resolucion 0202 de 17 Feb 2022 Licencia cultivo plantas no psicoactivo.pdf"},
    {title: "License5", src: "/Licencias/Resolucion 1899 de 22 de Nov 2021 licencia uso de semillas para siembra.pdf"}
  ]

  return (
    <div className="pt-[42px]">
      <div className="max-w-4xl mx-auto mt-6 space-y-3">
        {items.map((item, i) => (
          <PdfLicense
            key={i}
            title={item.title}
            src={item.src}
            isOpen={openIndex === i}
            togglePdf={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
}