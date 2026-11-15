import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PillarsAndValuesSection } from './components/PillarsAndValuesSection';
import { FlagshipInitiativesSection } from './components/FlagshipInitiativesSection';
import { KalamMentorSection } from './components/KalamMentorSection';
import { ImpactSection } from './components/ImpactSection';
import { GetInvolvedModal } from './components/GetInvolvedModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [preselectedInitiative, setPreselectedInitiative] = useState<string>('General');
  const [focusedInitiativeId, setFocusedInitiativeId] = useState<string>('academy');

  const handleNavigate = (sectionId: string, initiativeId?: string) => {
    setActiveSection(sectionId);
    if (initiativeId) {
      setFocusedInitiativeId(initiativeId);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'get-involved') {
      handleOpenApplyModal('General');
    }
  };

  const handleOpenApplyModal = (initiativeName?: string) => {
    if (initiativeName) {
      setPreselectedInitiative(initiativeName);
    } else {
      setPreselectedInitiative('General');
    }
    setIsApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#1E40AF] selection:text-white">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenApplyModal={handleOpenApplyModal}
      />

      <main>
        <HeroSection
          onNavigate={handleNavigate}
          onOpenApplyModal={handleOpenApplyModal}
        />

        <AboutSection />

        <PillarsAndValuesSection onOpenApplyModal={handleOpenApplyModal} />

        <FlagshipInitiativesSection
          focusedInitiativeId={focusedInitiativeId}
          onSelectInitiative={setFocusedInitiativeId}
          onOpenApplyModal={handleOpenApplyModal}
        />

        <KalamMentorSection />

        <ImpactSection onOpenApplyModal={handleOpenApplyModal} />
      </main>

      <GetInvolvedModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        preselectedInitiative={preselectedInitiative}
      />

      <Footer
        onNavigate={handleNavigate}
        onOpenApplyModal={handleOpenApplyModal}
      />
    </div>
  );
}
