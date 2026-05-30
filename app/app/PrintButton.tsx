"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="text-sm bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5 rounded-md transition-colors cursor-pointer"
    >
      Print / Save PDF
    </button>
  );
}
