import React from 'react';
import { X, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onGoToFundCheck: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onGoToFundCheck,
}) => {
  if (!article) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <div className="bg-[#fffaf7] border border-[#f1dfd5] rounded-[28px] shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col text-[#2b1a14] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#f1dfd5] flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-2 text-xs text-[#6b554b]">
            <span className="font-bold text-peach-700 uppercase tracking-wider bg-peach-100 px-2.5 py-0.5 rounded-full">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-peach-600" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#6b554b] hover:text-[#2b1a14] hover:bg-peach-100 transition-colors"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left leading-relaxed">
          
          <div className="space-y-4">
            <h1 id="article-modal-title" className="font-serif text-2xl sm:text-4xl font-extrabold text-[#2b1a14] leading-tight">
              {article.title}
            </h1>
            <p className="text-sm sm:text-base text-[#6b554b] font-normal">
              {article.summary}
            </p>
            <div className="flex items-center space-x-3 pt-2 text-xs text-[#6b554b] border-t border-[#f1dfd5]">
              <div className="w-8 h-8 rounded-full bg-peach-500 text-white font-serif flex items-center justify-center font-bold text-sm">
                🍑
              </div>
              <div>
                <span className="font-semibold text-[#2b1a14] block">{article.author.name}</span>
                <span>{article.author.role}</span>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="p-5 rounded-2xl bg-peach-50 border border-peach-200 space-y-2.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-peach-700 flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-leaf" />
              <span>Executive Summary & Founder Takeaways:</span>
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#2b1a14]">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-peach-500 mt-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 text-sm text-[#2b1a14]">
            {article.contentSections.map((sec, i) => (
              <div key={i} className="space-y-2.5">
                <h2 className="font-serif font-bold text-xl text-[#2b1a14]">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[#6b554b] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Embedded Funding Check Callout */}
          <div className="p-6 rounded-[22px] bg-white border-2 border-peach-500 shadow-soft space-y-3">
            <div className="flex items-center space-x-2 text-peach-700 text-xs font-bold uppercase tracking-wider">
              <span>Put Theory Into Practice</span>
            </div>
            <h2 className="font-serif font-bold text-xl text-[#2b1a14]">
              Check what grants and loans fit your diploma & project
            </h2>
            <p className="text-xs sm:text-sm text-[#6b554b]">
              {article.fundingCheckHook}
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onGoToFundCheck();
                }}
                className="btn-peach-primary text-xs py-3 px-6"
              >
                <span>Start Free European Fund Check</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-[#f1dfd5] flex items-center justify-between flex-shrink-0 text-xs text-[#6b554b]">
          <span>Student Project Resource • Peachology Entrepreneur</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-[#2b1a14] text-white font-semibold hover:bg-black transition-colors"
          >
            Close Reader
          </button>
        </div>

      </div>
    </div>
  );
};
