import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Clock } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES_DATA } from '../data/sampleData';

interface ResourcesSectionProps {
  onOpenArticle: (article: Article) => void;
  onGoToFundCheck: () => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  onOpenArticle,
  onGoToFundCheck,
}) => {
  return (
    <section id="resources" aria-labelledby="resources-title" className="py-20 sm:py-24 bg-[#fffaf7]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Section Head from peachology.vercel.app */}
        <div className="max-w-2xl text-left mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-peach-600 mb-2">
            The Peachology blog
          </span>
          <h2 id="resources-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
            Free guides for student entrepreneurs
          </h2>
          <p className="text-base sm:text-lg text-[#6b554b] leading-relaxed mt-2">
            Practical articles on starting a business while studying. Each guide links to the module where you'll practise it for real.
          </p>
        </div>

        {/* 3 Core Module Guides from peachology.vercel.app */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
          
          <div 
            onClick={() => onOpenArticle(ARTICLES_DATA[0])}
            className="bg-white border border-[#f1dfd5] rounded-[18px] p-6 sm:p-7 shadow-soft flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-all group"
          >
            <div>
              <div className="h-32 rounded-xl mb-4 bg-gradient-to-br from-peach-200 to-peach-400 flex items-center justify-center text-4xl shadow-inner select-none">
                💡
              </div>
              <span className="text-[11px] font-bold text-peach-600 uppercase tracking-wider block mb-1">
                Module 1 · Validate
              </span>
              <h3 className="font-serif font-bold text-xl text-[#2b1a14] group-hover:text-peach-600 transition-colors leading-snug">
                How to validate a business idea as a student (without spending money)
              </h3>
            </div>
            <span className="mt-5 pt-3 border-t border-[#f1dfd5] text-xs font-bold text-leaf flex items-center space-x-1">
              <span>Read the guide</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>

          <div 
            onClick={() => onOpenArticle(ARTICLES_DATA[1])}
            className="bg-white border border-[#f1dfd5] rounded-[18px] p-6 sm:p-7 shadow-soft flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-all group"
          >
            <div>
              <div className="h-32 rounded-xl mb-4 bg-gradient-to-br from-peach-200 to-peach-400 flex items-center justify-center text-4xl shadow-inner select-none">
                🧺
              </div>
              <span className="text-[11px] font-bold text-peach-600 uppercase tracking-wider block mb-1">
                Module 2 · Offer
              </span>
              <h3 className="font-serif font-bold text-xl text-[#2b1a14] group-hover:text-peach-600 transition-colors leading-snug">
                Creating your first offer: pricing and positioning for beginners
              </h3>
            </div>
            <span className="mt-5 pt-3 border-t border-[#f1dfd5] text-xs font-bold text-leaf flex items-center space-x-1">
              <span>Read the guide</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>

          <div 
            onClick={() => onOpenArticle(ARTICLES_DATA[0])}
            className="bg-white border border-[#f1dfd5] rounded-[18px] p-6 sm:p-7 shadow-soft flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-all group"
          >
            <div>
              <div className="h-32 rounded-xl mb-4 bg-gradient-to-br from-peach-200 to-peach-400 flex items-center justify-center text-4xl shadow-inner select-none">
                🚀
              </div>
              <span className="text-[11px] font-bold text-peach-600 uppercase tracking-wider block mb-1">
                Module 3 · Customers
              </span>
              <h3 className="font-serif font-bold text-xl text-[#2b1a14] group-hover:text-peach-600 transition-colors leading-snug">
                10 ways to find your first customers on a student budget
              </h3>
            </div>
            <span className="mt-5 pt-3 border-t border-[#f1dfd5] text-xs font-bold text-leaf flex items-center space-x-1">
              <span>Read the guide</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>

        </div>

        {/* Featured Deep-Dive Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {ARTICLES_DATA.map((article) => (
            <div
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="bg-peach-50/70 border border-peach-200 rounded-[20px] p-6 sm:p-7 shadow-xs hover:border-peach-400 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-[#6b554b]">
                  <span className="px-2.5 py-0.5 rounded-full font-bold bg-peach-100 text-peach-700 uppercase tracking-wider text-[10px]">
                    {article.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-ink-light" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#2b1a14] hover:text-peach-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6b554b] leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-peach-200 flex items-center justify-between text-xs font-bold text-peach-600">
                <span>Read Full In-Depth Guide →</span>
                <span className="text-leaf">Free assessment link inside</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
