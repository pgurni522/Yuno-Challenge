import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PrintButton from "./PrintButton";
import { PROPOSAL_CONTENT } from "./content";

export default function Home() {
  const content = PROPOSAL_CONTENT;

  return (
    <div className="page-wrapper min-h-screen bg-[#e8e8e8] py-10 px-4">
      {/* Header bar */}
      <div className="no-print max-w-4xl mx-auto mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-600" />
          <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
            Yuno · Confidential Deal Package
          </span>
        </div>
        <PrintButton />
      </div>

      {/* Paper sheet */}
      <div className="page-sheet max-w-4xl mx-auto bg-white rounded-xl shadow-2xl px-14 py-12">
        {/* Confidential banner */}
        <div className="no-print mb-6 text-center text-xs font-semibold tracking-widest text-blue-700 uppercase border border-blue-200 bg-blue-50 rounded py-1.5">
          Confidential · For Internal Use Only
        </div>

        <article className="prose-doc">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-xs text-gray-400 flex justify-between">
          <span>HealthHub × Yuno — Deal Strategy & Commercial Proposal Package</span>
          <span>Prepared May 30, 2026 · Confidential</span>
        </div>
      </div>
    </div>
  );
}
