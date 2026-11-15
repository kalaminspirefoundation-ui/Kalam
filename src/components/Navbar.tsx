import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FOUNDATION_META } from '../data/foundationData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string, initiativeId?: string) => void;
  onOpenApplyModal: (initiativeName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenApplyModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'pillars', label: 'Framework' },
    { id: 'initiatives', label: 'Initiatives' },
    { id: 'ai-mentor', label: 'AI Mentor' },
    { id: 'impact', label: 'Commitments' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-slate-200 shadow-xs'
          : 'bg-white/85 backdrop-blur-md border-slate-200/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] rounded-lg"
        >
          <span className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={FOUNDATION_META.logo}
              alt="Kalam Inspire Foundation emblem"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </span>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 whitespace-nowrap shrink-0">
            Kalam Inspire Foundation
          </span>
        </button>

        {/* Zone 2: 5 concise single-line text links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] ${
                  isActive
                    ? 'text-[#1E40AF] border-[#1E40AF]'
                    : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenApplyModal('General')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] focus-visible:ring-offset-2"
          >
            Get Involved
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 border border-slate-200 bg-white rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 shadow-lg">
          <nav className="flex flex-col divide-y divide-slate-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-3 text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-[#1E40AF] font-semibold' : 'text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal('General');
                }}
                className="w-full py-2.5 bg-[#1E40AF] text-white text-xs font-semibold rounded-xl"
              >
                Get Involved
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
