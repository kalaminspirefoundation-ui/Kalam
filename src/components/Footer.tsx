import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { FOUNDATION_META, FLAGSHIP_INITIATIVES } from '../data/foundationData';

interface FooterProps {
  onNavigate: (sectionId: string, initiativeId?: string) => void;
  onOpenApplyModal: (initiativeName?: string) => void;
}

const socialPlatforms = [
  {
    name: 'LinkedIn',
    url: FOUNDATION_META.socials.linkedin,
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    )
  },
  {
    name: 'Twitter / X',
    url: FOUNDATION_META.socials.twitter,
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: FOUNDATION_META.socials.instagram,
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    url: FOUNDATION_META.socials.facebook,
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    name: 'YouTube',
    url: FOUNDATION_META.socials.youtube,
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
];

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenApplyModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#0B1120] text-slate-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Foundation Summary & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white p-1 shrink-0">
                <img
                  src={FOUNDATION_META.logo}
                  alt="Kalam Inspire Foundation Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">
                  {FOUNDATION_META.name}
                </p>
                <p className="text-xs text-slate-400">{FOUNDATION_META.location}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-md">
              {FOUNDATION_META.about}
            </p>

            <div className="max-w-md mb-6">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Foundation Updates
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-300 border border-emerald-800 bg-emerald-950/40 rounded-xl px-3.5 py-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you for subscribing to our updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-colors whitespace-nowrap shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {socialPlatforms.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Kalam Inspire Foundation on ${social.name}`}
                  className="w-8 h-8 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-600 flex items-center justify-center transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-slate-800">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Founding Charter
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pillars')} className="hover:text-white transition-colors">
                  9 Pillars &amp; 9 Values
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('initiatives')} className="hover:text-white transition-colors">
                  9 Flagship Initiatives
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-mentor')} className="hover:text-white transition-colors">
                  Kalam AI Mentor
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('impact')} className="hover:text-white transition-colors">
                  Commitments &amp; FAQs
                </button>
              </li>
              <li>
                <button onClick={() => onOpenApplyModal('General')} className="hover:text-white transition-colors">
                  Get Involved / Apply
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: 9 Flagship Initiatives */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-slate-800">
              9 Flagships
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {FLAGSHIP_INITIATIVES.map((init) => (
                <li key={init.id}>
                  <button
                    onClick={() => onNavigate('initiatives', init.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {init.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-slate-800">
              Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{FOUNDATION_META.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${FOUNDATION_META.contactPhone}`} className="hover:text-white transition-colors">
                  {FOUNDATION_META.formattedPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${FOUNDATION_META.email}`} className="hover:text-white transition-colors break-all">
                  {FOUNDATION_META.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                <span>www.kalaminspire.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed">
          <span className="font-mono uppercase tracking-wider text-slate-300 mr-2">
            Official Disclaimer:
          </span>
          {FOUNDATION_META.disclaimer}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Kalam Inspire Foundation. All rights reserved.</p>
          <p>{FOUNDATION_META.tagline}</p>
        </div>
      </div>
    </footer>
  );
};
