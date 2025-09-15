"use client"; // required if you're in the /app directory

export default function PdfPage() {
  function openPdf(path: string) {
    const viewer = document.getElementById("pdf-viewer") as HTMLIFrameElement | null;
    const placeholder = document.getElementById("pdf-placeholder") as HTMLDivElement | null;

    if (viewer && placeholder) {
      viewer.src = path;                  // load the PDF
      viewer.classList.remove("hidden");  // show iframe
      placeholder.classList.add("hidden"); // hide placeholder
    }
  }

  return (
    <div className="flex h-screen shadow">
      {/* Left column (buttons) */}
      <div className="flex flex-col w-1/4 items-center justify-center bg-[#141414] gap-4 p-4">
        <button
          onClick={() => openPdf("/Licencias/Licencia exportacion 0964 de 25 Mayo 2022 NO Psico.pdf")}
          className="rounded-lg bg-[#3A3A3A] text-[#CCCCCC] hover:bg-[#015730] active:bg-[#002816] px-4 py-2">
          Exportation License
        </button>

        <button
          onClick={() => openPdf("/Licencias/Modificacion licencia sico para exporta.pdf")}
          className="rounded-lg bg-[#3A3A3A] text-[#CCCCCC] hover:bg-[#015730] active:bg-[#002816] px-4 py-2">
          License 2
        </button>

        <button
          onClick={() => openPdf("/Licencias/Resolucion 0199 del 16 de Feb 2022 licencia cultivo plantas psicoactivo.pdf")}
          className="rounded-lg bg-[#3A3A3A] text-[#CCCCCC] hover:bg-[#015730] active:bg-[#002816] px-4 py-2">
          License 3
        </button>

        <button
          onClick={() => openPdf("/Licencias/Resolucion 0202 de 17 Feb 2022 Licencia cultivo plantas no psicoactivo.pdf")}
          className="rounded-lg bg-[#3A3A3A] text-[#CCCCCC] hover:bg-[#015730] active:bg-[#002816] px-4 py-2">
          License 4
        </button>

        <button
          onClick={() => openPdf("/Licencias/Resolucion 1899 de 22 de Nov 2021 licencia uso de semillas para siembra.pdf")}
          className="rounded-lg bg-[#3A3A3A] text-[#CCCCCC] hover:bg-[#015730] active:bg-[#002816] px-4 py-2">
          License 5
        </button>
      </div>

      {/* Right column (PDF viewer or placeholder) */}
      <div className="flex-1 relative bg-[#121212] mt-9">
        {/* Placeholder (shown first) */}
        <div
          id="pdf-placeholder"
          className="flex absolute inset-0 items-center justify-center text-[#CCCCCC]"
        >
          Select a License to view
        </div>

        {/* Hidden iframe (appears when a PDF is loaded) */}
        <iframe
          id="pdf-viewer"
          className="w-full h-full border-0 hidden"
        />
      </div>
    </div>
  );
}
