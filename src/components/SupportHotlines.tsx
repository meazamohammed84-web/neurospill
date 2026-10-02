import React from 'react';
import { Phone, MessageSquare, Heart, Shield, Sparkles, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface SupportHotlinesProps {
  onBackToApp?: () => void;
  onOpenComfort?: () => void;
}

export const SupportHotlines: React.FC<SupportHotlinesProps> = ({ onBackToApp, onOpenComfort }) => {
  const hotlines = [
    {
      name: "988 Suicide & Crisis Lifeline",
      desc: "Free, confidential 24/7 support for anyone experiencing sadness, depression, panic, self-harm thoughts, or emotional distress.",
      callNumber: "988",
      textAction: "Text 988",
      badge: "24/7 Free & Confidential",
      color: "from-pink-600 to-rose-600",
      border: "border-pink-500/40",
      bgBadge: "bg-pink-500/20 text-pink-300",
      primary: true,
    },
    {
      name: "Crisis Text Line",
      desc: "If you prefer texting instead of talking on the phone, text with a compassionate, trained crisis counselor anytime.",
      callNumber: "",
      textAction: "Text HOME to 741741",
      badge: "24/7 Text Support",
      color: "from-purple-600 to-indigo-600",
      border: "border-purple-500/40",
      bgBadge: "bg-purple-500/20 text-purple-300",
      primary: true,
    },
    {
      name: "Teen Line (Teens Helping Teens)",
      desc: "Talk or text with another trained teenager who understands what you're going through. Non-judgmental peer support.",
      callNumber: "1-800-852-8336",
      textAction: "Text TEEN to 839863 (6 PM - 9 PM PST)",
      badge: "Peer Support",
      color: "from-cyan-600 to-teal-600",
      border: "border-cyan-500/40",
      bgBadge: "bg-cyan-500/20 text-cyan-300",
      primary: false,
    },
    {
      name: "The Trevor Project",
      desc: "Dedicated 24/7 crisis intervention and suicide prevention for LGBTQ+ young people under 25.",
      callNumber: "1-866-488-7386",
      textAction: "Text START to 678-678",
      badge: "LGBTQ+ Youth 24/7",
      color: "from-amber-500 to-rose-500",
      border: "border-amber-500/40",
      bgBadge: "bg-amber-500/20 text-amber-300",
      primary: false,
    },
    {
      name: "SAMHSA National Helpline",
      desc: "Free, confidential 24/7 information service for individuals and families facing mental health challenges or substance use.",
      callNumber: "1-800-662-4357",
      textAction: "",
      badge: "24/7 Resource Hub",
      color: "from-emerald-600 to-teal-600",
      border: "border-emerald-500/40",
      bgBadge: "bg-emerald-500/20 text-emerald-300",
      primary: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-rose-950/20 to-slate-900 border border-rose-500/30 p-6 sm:p-10 shadow-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-black uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          <span>Support & Crisis Help Hub</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Numbers To Call If You're Sad, Depressed, or Overwhelmed
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          You never have to carry deep sadness, heartbreak, or painful thoughts alone. These are real, caring, 100% free human hotlines ready to listen right now.
        </p>

        {onOpenComfort && (
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenComfort}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-xs transition-all shadow-md active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Or Talk With Sage (Quiet Full-Screen Text)</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Helplines List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hotlines.map((h, i) => (
          <div
            key={i}
            className={`rounded-3xl bg-slate-900/90 border ${h.border} p-6 space-y-4 shadow-xl flex flex-col justify-between transition-all hover:scale-[1.01]`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${h.bgBadge} border ${h.border}`}>
                  {h.badge}
                </span>
                {h.primary && (
                  <span className="text-[10px] font-extrabold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/30">
                    Highest Recommended
                  </span>
                )}
              </div>

              <h2 className="text-xl font-black text-white">
                {h.name}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {h.desc}
              </p>
            </div>

            {/* Action buttons */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              {h.callNumber && (
                <a
                  href={`tel:${h.callNumber.replace(/-/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-black text-sm shadow-md transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {h.callNumber}</span>
                </a>
              )}

              {h.textAction && (
                <div className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-pink-300 border border-pink-500/30 font-bold text-xs transition-all">
                  <MessageSquare className="w-4 h-4" />
                  <span>{h.textAction}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* What to Expect When You Call / Text */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-black text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          <span>What Happens When You Call Or Text? (No Stress)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="font-extrabold text-pink-400 text-sm block">1. You Stay Anonymous</span>
            <p>You do NOT have to give your real name, address, or school. You can just talk or vent freely.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="font-extrabold text-cyan-400 text-sm block">2. You Won't Get In Trouble</span>
            <p>They are not police or teachers. They are compassionate counselors trained to listen without judging you.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="font-extrabold text-emerald-400 text-sm block">3. You Can Hang Up Anytime</span>
            <p>If you feel uncomfortable or change your mind, you can end the call or text STOP whenever you want.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
