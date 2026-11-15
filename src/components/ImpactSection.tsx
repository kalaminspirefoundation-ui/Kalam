import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { FAQS, FOUNDATION_COMMITMENTS } from '../data/foundationData';

interface ImpactSectionProps {
  onOpenApplyModal: (initiativeName?: string) => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenApplyModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="impact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#1E40AF] mb-2">
              05 · Foundational Commitments &amp; FAQs
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
              Starting With Integrity &amp; Clarity
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            As a newly launched foundation, we focus on open access, small honest cohorts, and transparent community collaboration.
          </p>
        </div>

        {/* Basic New-Foundation Commitments Bento Strip (Zero Fake Numbers) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {FOUNDATION_COMMITMENTS.map((item) => (
            <div
              key={item.code}
              className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs font-mono text-slate-500">
                  <span className="tabular-nums">{item.code}</span>
                  <span className="uppercase tracking-wider text-[#1E40AF]">{item.label}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 rounded-3xl bg-[#F8FAFC] border border-slate-200 p-7">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
              Questions &amp; Governance
            </p>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Key details on our independent non-profit status, inaugural applications, and institutional partnerships.
            </p>
            <button
              onClick={() => onOpenApplyModal('General')}
              className="px-5 py-2.5 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-8 rounded-3xl bg-white border border-slate-200 divide-y divide-slate-200 overflow-hidden">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx}>
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-[#1E40AF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1E40AF]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#1E40AF] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
