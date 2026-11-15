import React, { useState } from 'react';
import {
  GraduationCap,
  Lightbulb,
  Wrench,
  Rocket,
  Briefcase,
  Trophy,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Shield,
  Sparkles,
  Award,
  Users,
  Heart,
  Handshake,
  CheckCircle2,
  BookMarked,
  Globe,
  ArrowRight
} from 'lucide-react';
import { PILLARS, VALUES } from '../data/foundationData';

interface PillarsAndValuesProps {
  onOpenApplyModal: (initiativeName?: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  GraduationCap,
  Lightbulb,
  Wrench,
  Rocket,
  Briefcase,
  Trophy,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Shield,
  Sparkles,
  Award,
  Users,
  Heart,
  Handshake,
  CheckCircle2,
  BookMarked,
  Globe
};

export const PillarsAndValuesSection: React.FC<PillarsAndValuesProps> = ({
  onOpenApplyModal
}) => {
  const [activeTab, setActiveTab] = useState<'pillars' | 'values'>('pillars');
  const [activePillarId, setActivePillarId] = useState<string>(PILLARS[0].id);

  const selectedPillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  const getIcon = (name: string, className: string = 'w-5 h-5') => {
    const IconComponent = ICON_MAP[name] || Sparkles;
    return <IconComponent className={className} />;
  };

  return (
    <section id="pillars" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Segmented Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#1E40AF] mb-2">
              02 · Institutional Framework
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
              Nine Pillars &amp; Nine Values
            </h2>
            <p className="mt-2 text-slate-600 text-sm max-w-2xl">
              Explore each strategic pillar in our interactive framework view or switch to the ethical values guiding our work.
            </p>
          </div>

          <div
            className="inline-flex items-center p-1 bg-slate-100 border border-slate-200 rounded-xl self-start md:self-auto"
            role="tablist"
            aria-label="Framework view"
          >
            <button
              role="tab"
              aria-selected={activeTab === 'pillars'}
              onClick={() => setActiveTab('pillars')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'pillars'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Nine Pillars (09)
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'values'}
              onClick={() => setActiveTab('values')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'values'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Nine Values (09)
            </button>
          </div>
        </div>

        {/* MASTER-DETAIL INTERACTIVE FRAME FOR 9 PILLARS */}
        {activeTab === 'pillars' && (
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Selector List */}
            <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-2.5 flex flex-col gap-1">
              {PILLARS.map((pillar, idx) => {
                const isSelected = pillar.id === selectedPillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`w-full px-4 py-3 rounded-2xl text-left transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-white border border-slate-200 shadow-xs text-slate-900'
                        : 'border border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`font-mono text-xs tabular-nums shrink-0 ${
                          isSelected ? 'text-[#1E40AF] font-semibold' : 'text-slate-400'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display font-semibold text-sm sm:text-base truncate">
                        {pillar.title}
                      </span>
                    </div>
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#1E40AF] text-white'
                          : 'bg-slate-200/70 text-slate-600'
                      }`}
                    >
                      {getIcon(pillar.iconName, 'w-4 h-4')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Active Pillar Showcase Frame */}
            <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-blue-100 text-[#1E40AF] flex items-center justify-center shrink-0">
                      {getIcon(selectedPillar.iconName, 'w-6 h-6')}
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                        Pillar Focus Detail
                      </p>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                        {selectedPillar.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  {selectedPillar.summary}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  {selectedPillar.details}
                </p>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                    Strategic Focus Areas
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedPillar.keyFocusAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-4 flex items-start gap-3"
                      >
                        <span className="font-mono text-xs text-[#1E40AF] font-semibold tabular-nums mt-0.5">
                          0{idx + 1}
                        </span>
                        <span className="text-sm font-medium text-slate-800 leading-snug">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Open for mentors, volunteers, and community collaborators
                </span>
                <button
                  onClick={() => onOpenApplyModal('General')}
                  className="px-5 py-2.5 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Participate in This Pillar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* BENTO GRID FOR 9 VALUES */}
        {activeTab === 'values' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((val, idx) => (
              <div
                key={val.name}
                className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs tabular-nums text-slate-500">
                      Value {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="w-10 h-10 rounded-xl border border-slate-200 bg-white text-[#1E40AF] flex items-center justify-center">
                      {getIcon(val.iconName, 'w-5 h-5')}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {val.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
