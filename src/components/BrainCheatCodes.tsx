import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wind, 
  Clock, 
  EyeOff, 
  Flame, 
  Sparkles, 
  HelpCircle,
  Copy,
  Check,
  Zap
} from 'lucide-react';

interface CheatCode {
  id: string;
  title: string;
  trigger: string;
  theBiology: string;
  theHack: string;
  duration: string;
  category: 'panic' | 'overthinking' | 'social' | 'focus';
}

const CHEAT_CODES: CheatCode[] = [
  {
    id: 'physio-sigh',
    title: 'The Double Inhale "Physiological Sigh"',
    trigger: 'Heart hammering before a presentation, stage fright, sudden acute panic',
    theBiology: 'Two rapid nasal inhales pop open collapsed lung alveoli, followed by a long mouth exhale that directly stimulates the Vagus nerve to drop your heart rate in seconds.',
    theHack: 'Inhale deeply through your nose. At the top, take a second tiny sharp inhale. Then exhale slowly through your mouth like blowing through a straw for 6 seconds. Repeat 2 to 3 times.',
    duration: '20 Seconds',
    category: 'panic'
  },
  {
    id: 'name-it-tame-it',
    title: 'Affect Labeling ("Name It to Tame It")',
    trigger: 'Sudden blind rage, emotional breakdown over something tiny, crying spells',
    theBiology: 'Putting feelings into objective words forces electrical blood flow out of your reactive Amygdala into your rational Prefrontal Cortex (ventrolateral PFC), lowering emotional intensity.',
    theHack: 'Whisper or think in 3rd person: "My nervous system is experiencing acute sensory overload and social fatigue right now." Saying what is happening dampens the siren.',
    duration: '10 Seconds',
    category: 'panic'
  },
  {
    id: 'rule-of-5s',
    title: 'The Rule of 5s Time Machine',
    trigger: 'Replaying an awkward moment in your head, tripping, voice cracking',
    theBiology: 'Adolescent brains lack long-term temporal perspective because the PFC is still developing future-projection neural pathways. Everything feels permanent.',
    theHack: 'Ask: Will this matter in 5 minutes? (Yes). In 5 days? (Barely). In 5 months? (Nobody will remember). In 5 years? (It will be a hilarious story you tell at a dinner party).',
    duration: '30 Seconds',
    category: 'social'
  },
  {
    id: 'garbage-draft',
    title: 'The 5-Minute "Garbage Draft"',
    trigger: 'Freezing on an essay, homework paralysis, staring at blank screens',
    theBiology: 'Perfectionism triggers amygdala threat-avoidance. Lowering the quality requirement turns off the threat detector so your dopamine engine can start turning.',
    theHack: 'Give yourself explicit permission to write the worst paragraph in human history for exactly 5 minutes. No backspacing allowed. Once the friction breaks, momentum takes over.',
    duration: '5 Minutes',
    category: 'focus'
  },
  {
    id: 'spotlight-look-up',
    title: 'The Hallway Reality Check',
    trigger: 'Feeling like everyone is watching your walk, hair, or clothes in the hallway',
    theBiology: 'The "Imaginary Audience" bias makes you believe others are watching you as closely as you watch yourself.',
    theHack: 'Deliberately look at 5 people\'s faces as you walk. Count how many are looking at you vs how many are looking down at their phone, laughing at a joke, or staring blankly into space.',
    duration: '1 Minute',
    category: 'social'
  },
  {
    id: 'phone-jail',
    title: 'The Friction Barrier Phone Jail',
    trigger: 'Midnight doomscrolling, compulsive screen unlocking every 30 seconds',
    theBiology: 'The nucleus accumbens craves low-effort dopamine. Adding just 4 physical steps to reach your phone creates enough friction for the prefrontal cortex to wake up and stop you.',
    theHack: 'Put your phone charger in the closet or across the room. Never sleep with it within arm\'s reach of your pillow.',
    duration: 'Instant',
    category: 'focus'
  }
];

const THEMES: Record<string, { card: string; badge: string; border: string; accent: string }> = {
  panic: {
    card: 'border-rose-500/30 hover:border-rose-400/80 bg-gradient-to-b from-rose-950/20 to-slate-900',
    badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    border: 'border-rose-500/30',
    accent: 'text-rose-400'
  },
  social: {
    card: 'border-cyan-500/30 hover:border-cyan-400/80 bg-gradient-to-b from-cyan-950/20 to-slate-900',
    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    border: 'border-cyan-500/30',
    accent: 'text-cyan-400'
  },
  focus: {
    card: 'border-amber-500/30 hover:border-amber-400/80 bg-gradient-to-b from-amber-950/20 to-slate-900',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    border: 'border-amber-500/30',
    accent: 'text-amber-400'
  },
  overthinking: {
    card: 'border-purple-500/30 hover:border-purple-400/80 bg-gradient-to-b from-purple-950/20 to-slate-900',
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    border: 'border-purple-500/30',
    accent: 'text-purple-400'
  }
};

export const BrainCheatCodes: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'panic' | 'social' | 'focus'>('all');

  const filteredCodes = filter === 'all' 
    ? CHEAT_CODES 
    : CHEAT_CODES.filter(c => c.category === filter);

  const handleCopy = (code: CheatCode) => {
    const text = `🧠 Brain Cheat Code: ${code.title}\n🚨 When to use: ${code.trigger}\n⚡ The Hack: ${code.theHack}`;
    navigator.clipboard.writeText(text);
    setCopiedId(code.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-purple-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-bold shadow-md">
          <Zap className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>Neuroscience Micro-Hacks</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Adolescent Brain{' '}
          <span className="bg-gradient-to-r from-amber-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
            Cheat Codes
          </span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Practical cognitive tricks backed by neuropsychology. Keep these in your mental pocket for when your nervous system decides to freak out.
        </p>

        {/* Filter Pills with Color */}
        <div className="pt-2 flex flex-wrap justify-center gap-2">
          {(['all', 'panic', 'social', 'focus'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-2xl text-xs font-black capitalize transition-all shadow-sm ${
                filter === cat
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-pink-500/25 scale-105'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Cheat Codes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCodes.map((code) => {
          const theme = THEMES[code.category] || THEMES.panic;

          return (
            <div
              key={code.id}
              className={`rounded-3xl border p-6 flex flex-col justify-between transition-all shadow-xl hover:scale-[1.02] group ${theme.card}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full border uppercase tracking-wider ${theme.badge}`}>
                    {code.duration}
                  </span>
                  <button
                    onClick={() => handleCopy(code)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy hack"
                  >
                    {copiedId === code.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-pink-200 transition-colors leading-snug">
                    {code.title}
                  </h3>
                  <p className={`text-xs font-bold mt-1.5 ${theme.accent}`}>
                    When: {code.trigger}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 space-y-1.5 shadow-inner">
                  <div className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-300" />
                    The Neuro Hack
                  </div>
                  <p className="font-medium text-slate-100 leading-relaxed">
                    {code.theHack}
                  </p>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-normal">
                  <span className="font-bold text-white">Why it works: </span>
                  {code.theBiology}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between font-semibold">
                <span className="capitalize">Category: {code.category}</span>
                <span className="text-pink-400 font-bold">Tested Strategy</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
