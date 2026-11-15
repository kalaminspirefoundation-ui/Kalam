import React, { useState } from 'react';
import {
  GraduationCap,
  Cpu,
  Wrench,
  Rocket,
  Briefcase,
  Trophy,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { FLAGSHIP_INITIATIVES } from '../data/foundationData';

interface FlagshipInitiativesProps {
  focusedInitiativeId: string;
  onSelectInitiative: (initiativeId: string) => void;
  onOpenApplyModal: (initiativeName?: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  GraduationCap,
  Cpu,
  Wrench,
  Rocket,
  Briefcase,
  Trophy,
  BookOpen,
  HeartHandshake,
  ShieldCheck
};

export const FlagshipInitiativesSection: React.FC<FlagshipInitiativesProps> = ({
  focusedInitiativeId,
  onSelectInitiative,
  onOpenApplyModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = [
    'All',
    'Education',
    'Innovation',
    'Skill Development',
    'Entrepreneurship',
    'Careers & Employment',
    'Sports & Youth',
    'Research & Policy',
    'Community Welfare',
    'Leadership & Ethics'
  ];

  const filteredInitiatives =
    selectedCategory === 'All'
      ? FLAGSHIP_INITIATIVES
      : FLAGSHIP_INITIATIVES.filter(
          (i) => i.category === selectedCategory || selectedCategory.includes(i.category.split(' ')[0])
        );

  const spotlightInitiative =
    filteredInitiatives.find((i) => i.id === focusedInitiativeId) ||
    filteredInitiatives[0] ||
    FLAGSHIP_INITIATIVES[0];

  const getIcon = (iconName: string, className: string = 'w-6 h-6') => {
    const IconComp = ICON_MAP[iconName] || Sparkles;
    return <IconComp className={className} />;
  };

  return (
    <section id="initiatives" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#1E40AF] mb-2">
              03 · Flagship Architecture
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
              Nine Flagship Initiatives
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Each initiative represents a dedicated starting domain—open for founding learners, mentors, and community partners.
          </p>
        </div>

        {/* Spotlight Showcase Frame */}
        {spotlightInitiative && (
          <div className="rounded-3xl bg-white border border-slate-200 p-3 mb-10 grid lg:grid-cols-12 gap-6 items-stretch shadow-xs">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] lg:aspect-auto lg:min-h-[340px]">
              {!failedImages[spotlightInitiative.id] ? (
                <img
                  src={spotlightInitiative.image}
                  alt={`${spotlightInitiative.name} — ${spotlightInitiative.subtitle}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setFailedImages((prev) => ({ ...prev, [spotlightInitiative.id]: true }))
                  }
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-100 text-slate-700">
                  <div className="w-12 h-12 rounded-2xl border border-slate-200 bg-white flex items-center justify-center mb-3 text-[#1E40AF]">
                    {getIcon(spotlightInitiative.iconName)}
                  </div>
                  <span className="font-display text-lg font-bold text-slate-900">
                    {spotlightInitiative.name}
                  </span>
                  <span className="text-xs text-slate-500 mt-1">{spotlightInitiative.category}</span>
                </div>
              )}
            </div>

            <div className="lg:col-span-6 p-4 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 mb-3">
                  <span className="text-[#1E40AF] font-medium">Featured Spotlight</span>
                  <span aria-hidden="true">·</span>
                  <span>{spotlightInitiative.plateNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span>{spotlightInitiative.category}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-1.5">
                  {spotlightInitiative.name}
                </h3>
                <p className="text-sm font-medium text-[#1E40AF] mb-4">
                  {spotlightInitiative.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {spotlightInitiative.description}
                </p>

                <div className="border-t border-slate-200 pt-4 mb-6">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2.5">
                    Inaugural Programs
                  </p>
                  <ul className="divide-y divide-slate-100">
                    {spotlightInitiative.programs.map((prog) => (
                      <li key={prog.id} className="py-2.5 first:pt-0 last:pb-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs sm:text-sm font-semibold text-slate-900">
                            {prog.title}
                          </span>
                          <span className="text-[11px] font-mono text-slate-500 shrink-0">
                            {prog.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">{prog.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-500">
                  {spotlightInitiative.stageLabel}
                </span>
                <button
                  onClick={() => onOpenApplyModal(spotlightInitiative.name)}
                  className="px-5 py-2.5 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Apply to {spotlightInitiative.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Bar */}
        <div
          className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 no-scrollbar"
          role="tablist"
          aria-label="Filter initiatives by category"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-colors border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 9 Flagship Initiatives Modern Bento Plate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInitiatives.map((initiative) => {
            const hasImageError = failedImages[initiative.id];
            const isSpotlighted = spotlightInitiative?.id === initiative.id;
            return (
              <article
                key={initiative.id}
                className={`rounded-2xl bg-white border p-2.5 flex flex-col justify-between transition-all group ${
                  isSpotlighted
                    ? 'border-[#1E40AF] ring-1 ring-[#1E40AF]/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Nested 4:3 Photo Frame (r_inner = rounded-xl inside rounded-2xl p-2.5) */}
                  <button
                    type="button"
                    onClick={() => onSelectInitiative(initiative.id)}
                    className="w-full text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] rounded-xl"
                  >
                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
                      {!hasImageError ? (
                        <img
                          src={initiative.image}
                          alt={`${initiative.name} — ${initiative.subtitle}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({ ...prev, [initiative.id]: true }))
                          }
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100 text-slate-700">
                          <div className="w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center mb-3 text-[#1E40AF]">
                            {getIcon(initiative.iconName)}
                          </div>
                          <span className="font-display text-base font-semibold text-slate-900">
                            {initiative.name}
                          </span>
                          <span className="text-xs text-slate-500 mt-1">{initiative.category}</span>
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Unboxed Plate Metadata + Content */}
                  <div className="px-3 pt-4 pb-3">
                    <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-500 mb-2">
                      <span>
                        {initiative.plateNumber} · {initiative.category}
                      </span>
                      <span className="text-[#B45309]">{initiative.stageLabel}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                      {initiative.name}
                    </h3>
                    <p className="text-xs font-medium text-[#1E40AF] mb-3">
                      {initiative.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {initiative.description}
                    </p>

                    <div className="border-t border-slate-100 pt-3 mb-4">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Focus Areas
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {initiative.focusAreas.join(' · ')}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-3">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Inaugural Programs
                      </p>
                      <ul className="divide-y divide-slate-100">
                        {initiative.programs.map((prog) => (
                          <li key={prog.id} className="py-2 first:pt-0.5 last:pb-0">
                            <div className="flex items-baseline justify-between gap-2">
                              <span className="text-xs font-semibold text-slate-900">
                                {prog.title}
                              </span>
                              <span className="text-[10px] font-mono text-slate-500 shrink-0">
                                {prog.status}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="px-3 pt-3 pb-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectInitiative(initiative.id)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-2 py-1.5"
                  >
                    {isSpotlighted ? 'In Spotlight' : 'Preview Details'}
                  </button>
                  <button
                    onClick={() => onOpenApplyModal(initiative.name)}
                    className="px-4 py-2 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <span>Apply / Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
