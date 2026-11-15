import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  HeartHandshake,
  Rocket,
  GraduationCap,
  Building2,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { FLAGSHIP_INITIATIVES, FOUNDATION_META } from '../data/foundationData';

interface GetInvolvedModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedInitiative?: string;
}

export const GetInvolvedModal: React.FC<GetInvolvedModalProps> = ({
  isOpen,
  onClose,
  preselectedInitiative = 'General'
}) => {
  const [appType, setAppType] = useState<'volunteer' | 'startup' | 'scholarship' | 'partner'>('volunteer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [initiativeInterest, setInitiativeInterest] = useState(preselectedInitiative);
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedInitiative) {
      setInitiativeInterest(preselectedInitiative);
    }
  }, [preselectedInitiative]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMessage('Please fill in your name and email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: appType,
          name,
          email,
          phone,
          organization,
          initiativeInterest,
          message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionSuccess(data.message);
        setName('');
        setEmail('');
        setPhone('');
        setOrganization('');
        setMessage('');
      } else {
        setErrorMessage(data.error || 'Failed to submit application. Please try again.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const categoryOptions: Array<{
    id: 'volunteer' | 'startup' | 'scholarship' | 'partner';
    label: string;
    icon: React.ReactNode;
  }> = [
    { id: 'volunteer', label: 'Volunteer', icon: <HeartHandshake className="w-4 h-4" /> },
    { id: 'startup', label: 'Startup Pitch', icon: <Rocket className="w-4 h-4" /> },
    { id: 'scholarship', label: 'Scholarship', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'partner', label: 'Partner / CSR', icon: <Building2 className="w-4 h-4" /> }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="get-involved-title"
    >
      <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 border border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 rounded-xl transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="pb-5 border-b border-slate-200 mb-6 flex items-start gap-4 pr-10">
          <div className="w-12 h-12 rounded-2xl border border-slate-200 bg-white p-1.5 shrink-0">
            <img
              src={FOUNDATION_META.logo}
              alt="Kalam Inspire Foundation Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#1E40AF] mb-1">
              Inaugural Participation Form
            </p>
            <h2 id="get-involved-title" className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Get Involved / Apply
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Join as a founding volunteer, mentor, institutional partner, or program applicant.
            </p>
          </div>
        </div>

        {submissionSuccess ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center my-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
              Application Recorded
            </h3>
            <p className="text-sm text-slate-700 mb-6 leading-relaxed">
              {submissionSuccess}
            </p>
            <button
              onClick={() => {
                setSubmissionSuccess(null);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-xl transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2">
                Participation Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {categoryOptions.map((cat) => {
                  const active = appType === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setAppType(cat.id)}
                      className={`p-2.5 border text-xs font-semibold rounded-xl transition-colors flex flex-col items-center gap-1.5 ${
                        active
                          ? 'bg-[#1E40AF] border-[#1E40AF] text-white'
                          : 'bg-[#F8FAFC] border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {cat.icon}
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E40AF]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E40AF]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E40AF]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  School / Institution / Organization
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Optional affiliation"
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E40AF]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Initiative Interest
              </label>
              <select
                value={initiativeInterest}
                onChange={(e) => setInitiativeInterest(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1E40AF]"
              >
                <option value="General">General Interest / Unsure</option>
                {FLAGSHIP_INITIATIVES.map((init) => (
                  <option key={init.id} value={init.name}>
                    {init.name} ({init.subtitle})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Brief Note
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your background, interest, or how you would like to participate..."
                className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E40AF]"
              />
            </div>

            {errorMessage && (
              <p className="text-xs text-rose-800 bg-rose-50 border border-rose-200 p-3 rounded-xl">
                {errorMessage}
              </p>
            )}

            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 border border-slate-200 bg-white text-slate-700 hover:text-slate-900 text-xs font-semibold rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-2 transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
