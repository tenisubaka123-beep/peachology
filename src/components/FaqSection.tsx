import React from 'react';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: "Do I need a business idea before I apply?",
      a: "No. Module 1 helps you find and validate an idea. Many students arrive with only a problem they care about."
    },
    {
      q: "Can I follow Peachology while studying full-time?",
      a: "Yes. The program is designed around academic schedules, with evening and weekend sessions and about four hours of work per week."
    },
    {
      q: "How does the €0 Free Trial and European Fund Check work?",
      a: "The Free Trial costs €0 and includes our initial European fund check plus one live introductory class. The fund check assesses your student status, location, and project stage to identify non-dilutive regional grants, 0% honor loans (Prêt d’Honneur), and tax relief programs."
    },
    {
      q: "How does the referral offer work?",
      a: "Everyone can try Peachology for free. If you join through a referral code (or link), you receive an additional 30-minute individual consultation to discuss your business idea—with zero paid enrollment required. The referrer receives a 30-minute mentoring session when their referred peer enrolls in a paid program."
    },
    {
      q: "How are the program prices billed and what is the VAT treatment?",
      a: "All prices are one-time program fees—there is no recurring monthly subscription. The Standard plan is our main launch price at €299 (including applicable 20% VAT). Individual Mentoring is €549 (including VAT). What you see is the total payable amount."
    },
    {
      q: "Who can apply?",
      a: "University and business-school students, recent graduates within their first year, and young founders. Schools and youth organizations can also enroll cohorts."
    },
    {
      q: "Will I really launch a business?",
      a: "Yes. Every participant builds a real offer, talks to real customers, and works toward their first sales before demo day."
    },
    {
      q: "How do I join an information session?",
      a: "Use the “Attend an info session” button to reserve a seat at the next online or on-campus meetup."
    }
  ];

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-24 bg-[#fffaf7]">
      <div className="max-w-[780px] mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-peach-600 mb-2">
            FAQ
          </span>
          <h2 id="faq-title" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2b1a14] tracking-tight leading-[1.15]">
            Questions students ask us
          </h2>
        </div>

        <div className="space-y-3.5 text-left">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group bg-white border border-[#f1dfd5] rounded-[16px] p-5 sm:p-6 transition-all open:border-peach-300 open:shadow-soft"
            >
              <summary className="cursor-pointer font-serif font-bold text-base sm:text-lg text-[#2b1a14] list-none flex items-center justify-between gap-4 select-none">
                <span>{faq.q}</span>
                <span className="w-6 h-6 rounded-full bg-peach-100 text-peach-600 flex items-center justify-center text-sm font-bold flex-shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#6b554b] leading-relaxed pt-2 border-t border-[#f1dfd5]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};
