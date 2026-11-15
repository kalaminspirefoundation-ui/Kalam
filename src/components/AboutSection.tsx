import React from 'react';
import { FOUNDATION_META } from '../data/foundationData';

export const AboutSection: React.FC = () => {
  const approachSteps = [
    {
      index: '01',
      title: 'Begins with Education',
      description:
        'Providing foundational learning tools, STEM mentorship, and accessible guidance to spark curiosity in young learners.'
    },
    {
      index: '02',
      title: 'Grows through Innovation',
      description:
        'Encouraging hands-on tinkering spaces, early founder support, and practical vocational skills for local problem-solving.'
    },
    {
      index: '03',
      title: 'Succeeds through Collaboration',
      description:
        'Working alongside schools, educators, industry mentors, and local volunteers to build lasting community capacity.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#1E40AF] mb-2">
              01 · Founding Charter
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
              About Kalam Inspire Foundation
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            An independent charitable organization building transparent, practical pathways across education, skills, and civic service.
          </p>
        </div>

        {/* Modern Asymmetric Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Bento Tile: Charter, Vision & Mission */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                Purpose &amp; Mandate
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                {FOUNDATION_META.about}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#1E40AF] mb-2">
                  Our Vision
                </p>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  Equitable Opportunity
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {FOUNDATION_META.vision}
                </p>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#B45309] mb-2">
                  Our Mission
                </p>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  Learn, Innovate &amp; Serve
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {FOUNDATION_META.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Right Bento Tile: Dark Contrast Method & Independence Frame */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0B1120] text-white p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-2">
                Three-Stage Method
              </p>
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                How We Drive Change
              </h3>

              <div className="divide-y divide-slate-800">
                {approachSteps.map((step) => (
                  <div key={step.index} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-mono text-xs text-amber-400 tabular-nums">
                        {step.index}
                      </span>
                      <h4 className="font-display text-base font-semibold text-white">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Independence Notice
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {FOUNDATION_META.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
