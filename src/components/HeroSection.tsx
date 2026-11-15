import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Compass, ArrowUpRight } from 'lucide-react';
import { FOUNDATION_META, KALAM_QUOTES } from '../data/foundationData';

interface HeroSectionProps {
  onNavigate: (sectionId: string, initiativeId?: string) => void;
  onOpenApplyModal: (initiativeName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenApplyModal
}) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [heroImgError, setHeroImgError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % KALAM_QUOTES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const frameworkSummary = [
    { index: '01', label: 'Core Pillars', value: 'Nine Focus Domains' },
    { index: '02', label: 'Guiding Values', value: 'Integrity & Service' },
    { index: '03', label: 'Flagship Initiatives', value: 'Nine Open Programs' },
    { index: '04', label: 'Foundation Stage', value: 'Inaugural Cohorts Open' }
  ];

  const featuredQuickLinks = [
    { id: 'academy', title: 'Academy', subtitle: 'STEM & Learning' },
    { id: 'labs', title: 'Labs', subtitle: 'Robotics & AI' },
    { id: 'startups', title: 'Startups', subtitle: 'Founder Studio' }
  ];

  return (
    <section id="hero" className="pt-24 sm:pt-28 pb-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern 12-Column Architectural Split */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pb-10">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-5">
                <span>Kalam Inspire Foundation</span>
                <span aria-hidden="true">·</span>
                <span>{FOUNDATION_META.location}</span>
                <span aria-hidden="true">·</span>
                <span>Independent Non-Profit</span>
              </div>

              <h1 className="font-display font-bold text-[clamp(2.25rem,4.1vw,3.5rem)] text-slate-900 tracking-tight leading-[1.06] mb-5 [text-wrap:balance]">
                {FOUNDATION_META.tagline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                {FOUNDATION_META.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-10">
                <button
                  onClick={() => onNavigate('initiatives')}
                  className="px-6 py-3 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-sm font-semibold rounded-xl transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] focus-visible:ring-offset-2"
                >
                  <span>Explore 9 Initiatives</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenApplyModal('General')}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
                >
                  Apply or Partner
                </button>

                <button
                  onClick={() => onNavigate('ai-mentor')}
                  className="px-3 py-3 text-sm font-semibold text-[#1E40AF] hover:text-[#1E3A8A] underline underline-offset-4 whitespace-nowrap shrink-0"
                >
                  Ask AI Mentor
                </button>
              </div>
            </div>

            {/* Framed Quote Switcher */}
            <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 sm:p-6">
              <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed mb-4">
                "{KALAM_QUOTES[currentQuoteIndex].text}"
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/80">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">Dr. A.P.J. Abdul Kalam</span>
                  <span className="mx-1.5" aria-hidden="true">·</span>
                  <span className="hidden sm:inline">{KALAM_QUOTES[currentQuoteIndex].context}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() =>
                      setCurrentQuoteIndex((prev) => (prev - 1 + KALAM_QUOTES.length) % KALAM_QUOTES.length)
                    }
                    className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
                    aria-label="Previous quote"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono tabular-nums text-slate-500 px-1.5">
                    0{currentQuoteIndex + 1}/0{KALAM_QUOTES.length}
                  </span>
                  <button
                    onClick={() => setCurrentQuoteIndex((prev) => (prev + 1) % KALAM_QUOTES.length)}
                    className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
                    aria-label="Next quote"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Obsidian Showcase Frame (Nested Radius Math) */}
          <div className="lg:col-span-6 flex">
            <div className="flex-1 rounded-3xl bg-[#0B1120] p-3 flex flex-col justify-between shadow-xl">
              <div className="relative flex-1 min-h-[280px] lg:min-h-[380px] rounded-2xl overflow-hidden bg-slate-900">
                {!heroImgError ? (
                  <img
                    src={FOUNDATION_META.heroBanner}
                    alt="Youth learning and scientific discovery at Kalam Inspire Foundation"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-900 text-slate-200">
                    <Compass className="w-10 h-10 text-amber-400 mb-3" />
                    <span className="font-display text-lg font-semibold">{FOUNDATION_META.name}</span>
                    <span className="text-xs text-slate-400 mt-1">{FOUNDATION_META.location}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/85 via-[#0B1120]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-amber-300 mb-1">
                      Inaugural Programs
                    </p>
                    <p className="text-sm font-medium text-slate-100">
                      Education, Innovation, Skills &amp; Civic Leadership
                    </p>
                  </div>
                </div>
              </div>

              {/* Nested Quick-Jump Bar */}
              <div className="grid grid-cols-3 gap-2 pt-3">
                {featuredQuickLinks.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate('initiatives', item.id)}
                    className="rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 px-3.5 py-3 text-left transition-colors group"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-white mb-0.5">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">{item.subtitle}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Clean 4-Column Foundational Overview Bar (Zero Student Numbers) */}
        <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {frameworkSummary.map((item) => (
            <div key={item.index} className="p-5 sm:p-6">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                <span>{item.index}</span>
                <span aria-hidden="true">/</span>
                <span>{item.label}</span>
              </div>
              <div className="font-display text-base sm:text-lg font-semibold text-slate-900">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
