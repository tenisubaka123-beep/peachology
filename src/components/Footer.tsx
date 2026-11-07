import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#fffaf7] border-t border-[#f1dfd5] text-xs text-[#6b554b]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#f1dfd5]">
          <div>
            <a href="#" className="font-serif font-extrabold text-2xl text-[#2b1a14] tracking-tight">
              Peach<span className="text-[#ff8a5c]">ology</span> 🍑
            </a>
            <p className="mt-2 text-[#6b554b] text-sm">
              Hands-on entrepreneurship training for students.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-5 text-sm font-medium text-[#6b554b]">
              <li><a href="#program" className="hover:text-[#2b1a14] transition-colors">Program</a></li>
              <li><a href="#curriculum" className="hover:text-[#2b1a14] transition-colors">Curriculum</a></li>
              <li><a href="#pricing" className="hover:text-[#2b1a14] transition-colors">Pricing & Plans</a></li>
              <li><a href="#fund-check" className="hover:text-[#2b1a14] transition-colors">Fund Check</a></li>
              <li><a href="#runway-planner" className="hover:text-[#2b1a14] transition-colors">Runway Planner</a></li>
              <li><a href="#referrals" className="hover:text-[#2b1a14] transition-colors">Referrals</a></li>
              <li><a href="#stories" className="hover:text-[#2b1a14] transition-colors">Student Stories</a></li>
              <li><a href="#faq" className="hover:text-[#2b1a14] transition-colors">FAQ</a></li>
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#988177]">
          <div className="flex items-center space-x-2">
            <span>Student project prototype by Team Peachology.</span>
            <span>•</span>
            <span>European Student Entrepreneurship Initiative</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} Peachology. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
