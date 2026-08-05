import { useState } from 'react';
import { Check, X, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';

interface MembershipProps {
  onSelectPlan: (planName: string, billingCycle: string) => void;
}

export default function Membership({ onSelectPlan }: MembershipProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'annual'>('quarterly');

  const getPrice = (plan: typeof MEMBERSHIP_PLANS[0]) => {
    if (billingCycle === 'monthly') return plan.monthlyPrice;
    if (billingCycle === 'quarterly') return Math.round(plan.quarterlyPrice / 3);
    return Math.round(plan.annualPrice / 12);
  };

  const getBillingLabel = () => {
    if (billingCycle === 'monthly') return 'billed monthly';
    if (billingCycle === 'quarterly') return 'billed quarterly';
    return 'billed annually';
  };

  return (
    <section id="membership" className="py-24 bg-[#0A0A0A] relative border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.25em] bg-[#D4AF37]/10 px-4 py-1.5 border border-[#D4AF37]/30 inline-block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Membership{' '}
            <span className="text-[#D4AF37] italic font-serif">
              Plans & Packages
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Choose the membership tier that aligns with your lifestyle and fitness ambitions. Zero hidden charges or maintenance fees.
          </p>
        </div>

        {/* Billing Cycle Selector */}
        <div className="flex items-center justify-center mt-10">
          <div className="p-1 bg-black border border-[#D4AF37]/30 flex items-center gap-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Quarterly
              <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 font-bold">
                SAVE 15%
              </span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Annual
              <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 font-bold">
                SAVE 35%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-14 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = getPrice(plan);
            const isElite = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative p-8 flex flex-col justify-between transition-all duration-300 ${
                  isElite
                    ? 'bg-[#111111] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.25)] scale-105 z-20'
                    : 'bg-[#111111] border border-zinc-800 hover:border-[#D4AF37]/50 shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isElite && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-black font-black text-[10px] uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 fill-black" /> Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white uppercase">
                      {plan.name}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-light">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-4 border-y border-zinc-900">
                    <div className="flex items-baseline gap-1">
                      <span className="text-zinc-400 text-sm font-light">₹</span>
                      <span className="text-4xl sm:text-5xl font-serif font-bold text-[#D4AF37]">
                        {price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-zinc-400 text-xs font-light">/ mo</span>
                    </div>
                    <span className="text-[10px] text-[#D4AF37] font-medium uppercase tracking-widest block mt-1">
                      {getBillingLabel()}
                    </span>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-white uppercase tracking-widest block">
                      What's Included:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                          <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}

                      {/* Not Included */}
                      {plan.notIncluded?.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 line-through font-light">
                          <X className="w-4 h-4 text-zinc-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-6 border-t border-zinc-900">
                  <button
                    onClick={() => onSelectPlan(plan.name, billingCycle)}
                    className={`w-full py-4 font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      isElite
                        ? 'gold-btn text-black'
                        : 'bg-black hover:bg-zinc-900 text-[#D4AF37] border border-[#D4AF37]/40'
                    }`}
                    id={`membership-select-${plan.id}`}
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    Enroll in {plan.name}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Callout */}
        <div className="mt-12 text-center text-xs text-zinc-400 flex items-center justify-center gap-2 font-light">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>Have questions about corporate or student passes? Contact owner Prashant directly at <strong className="text-white">+91 7291994495</strong></span>
        </div>

      </div>
    </section>
  );
}
