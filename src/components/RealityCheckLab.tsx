import React, { useState } from 'react';
import { 
  Gauge, 
  Eye, 
  Moon, 
  Flame, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Clock,
  Zap,
  TrendingDown,
  Sun
} from 'lucide-react';

const SPOTLIGHT_SCENARIOS = [
  {
    id: 'voice-crack',
    label: 'Your voice cracked reading aloud in English class',
    actualNoticed: 21,
    typicalGuess: 88,
    truth: 'Only ~21% of classmates even registered it. Most were frantically rereading their own paragraph in terror so they would not mess up.'
  },
  {
    id: 'food-teeth',
    label: 'You had a speck of food on your chin after lunch',
    actualNoticed: 16,
    typicalGuess: 79,
    truth: 'Over 84% of people didn’t notice at all. The few who did forgot about it 90 seconds later when their phone buzzed.'
  },
  {
    id: 'tripped-hallway',
    label: 'You tripped on your shoelace in the busy cafeteria',
    actualNoticed: 19,
    typicalGuess: 92,
    truth: 'People glance for 0.8 seconds to see what made a noise, make sure nobody died, and immediately return to their own drama.'
  },
  {
    id: 'outfit-repeat',
    label: 'You wore the same hoodie two days in a row',
    actualNoticed: 11,
    typicalGuess: 72,
    truth: 'Almost nobody tracks what other people wear day-to-day. People are too busy stressing about their own look.'
  }
];

export const RealityCheckLab: React.FC = () => {
  // Spotlight state
  const [selectedScenario, setSelectedScenario] = useState(SPOTLIGHT_SCENARIOS[0]);
  const [userGuess, setUserGuess] = useState<number>(85);
  const [revealedSpotlight, setRevealedSpotlight] = useState<boolean>(false);

  // Sleep time state
  const [teenWakeTime, setTeenWakeTime] = useState<string>('06:30');

  const calculateAdultEquivalent = (wakeTime: string) => {
    const [hours, mins] = wakeTime.split(':').map(Number);
    let adultHours = hours - 2;
    let adultMins = mins - 30;
    if (adultMins < 0) {
      adultMins += 60;
      adultHours -= 1;
    }
    if (adultHours < 0) {
      adultHours += 24;
    }
    const formattedHours = adultHours % 12 === 0 ? 12 : adultHours % 12;
    const ampm = adultHours >= 12 ? 'PM' : 'AM';
    const formattedMins = adultMins < 10 ? `0${adultMins}` : adultMins;
    return `${formattedHours}:${formattedMins} ${ampm}`;
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-pink-500/20 border border-cyan-400/30 text-cyan-200 text-xs sm:text-sm font-bold shadow-md">
          <Gauge className="w-4 h-4 text-cyan-300 animate-pulse" />
          <span>Interactive Psychology Experiment Lab</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Reality Check{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
            Simulator
          </span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Your brain has evolutionary distortion filters that amplify shame and scramble time. 
          Use these scientific tools to expose what is actually happening.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Tool 1: The Spotlight Effect Simulator */}
        <div className="rounded-3xl bg-slate-900/95 border border-pink-500/30 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 blur-3xl pointer-events-none" />

          <div className="space-y-4 relative">
            <div className="flex items-center gap-2 text-pink-400 font-extrabold text-xs uppercase tracking-wider">
              <Eye className="w-4 h-4 text-pink-400" />
              <span>Experiment 01: The Spotlight Effect</span>
            </div>

            <h3 className="text-2xl font-black text-white">
              How Many People Actually Noticed?
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pick an awkward scenario, guess what percentage of people noticed you, and see what Cornell University psychological research proved.
            </p>

            {/* Scenario pills */}
            <div className="space-y-2 pt-1">
              <label className="text-xs font-bold text-slate-200">Select an awkward event:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SPOTLIGHT_SCENARIOS.map((scen) => (
                  <button
                    key={scen.id}
                    onClick={() => {
                      setSelectedScenario(scen);
                      setRevealedSpotlight(false);
                      setUserGuess(scen.typicalGuess);
                    }}
                    className={`p-3 rounded-2xl border text-xs text-left transition-all ${
                      selectedScenario.id === scen.id
                        ? 'bg-gradient-to-r from-pink-950/60 to-purple-950/60 border-pink-500 text-pink-200 font-bold shadow-md ring-1 ring-pink-400/40'
                        : 'bg-slate-950/70 hover:bg-slate-800 border-slate-800 text-slate-300'
                    }`}
                  >
                    {scen.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2 pt-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-200 font-bold">Your brain's panic guess:</span>
                <span className="text-pink-400 font-black text-base">{userGuess}% of people</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={userGuess}
                onChange={(e) => {
                  setUserGuess(Number(e.target.value));
                  setRevealedSpotlight(false);
                }}
                className="w-full accent-pink-500 h-2.5 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                <span>Nobody (0%)</span>
                <span>The entire room (100%)</span>
              </div>
            </div>

            {/* Reveal Button */}
            {!revealedSpotlight ? (
              <button
                onClick={() => setRevealedSpotlight(true)}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-pink-500/25 mt-2 flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Reveal Science Reality</span>
              </button>
            ) : (
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
                  <div className="text-center p-3 rounded-xl bg-rose-950/40 border-2 border-rose-500/40">
                    <span className="text-[10px] font-black text-rose-300 uppercase block tracking-wider">What Your Brain Screams</span>
                    <span className="text-3xl font-black text-rose-300 mt-1 block">{userGuess}%</span>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-emerald-950/40 border-2 border-emerald-500/40">
                    <span className="text-[10px] font-black text-emerald-300 uppercase block tracking-wider">Actual Science Reality</span>
                    <span className="text-3xl font-black text-emerald-300 mt-1 block">{selectedScenario.actualNoticed}%</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent border-l-4 border-emerald-400 text-xs sm:text-sm text-slate-100 leading-relaxed space-y-1">
                  <p className="font-extrabold text-emerald-300">Psychological Fact:</p>
                  <p className="font-normal">{selectedScenario.truth}</p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between font-medium">
            <span>Cornell University Social Psychology</span>
            <span className="text-pink-400 font-bold">The Spotlight Illusion</span>
          </div>
        </div>

        {/* Tool 2: The Biological Sleep Shift Reality Calculator */}
        <div className="rounded-3xl bg-slate-900/95 border border-cyan-500/30 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="space-y-4 relative">
            <div className="flex items-center gap-2 text-cyan-400 font-extrabold text-xs uppercase tracking-wider">
              <Moon className="w-4 h-4 text-cyan-400" />
              <span>Experiment 02: Circadian Phase Delay</span>
            </div>

            <h3 className="text-2xl font-black text-white">
              The 6:30 AM School Zombie Translator
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Why do you feel nauseous and half-asleep during Period 1? Because during adolescence, your pineal gland releases melatonin 2 to 3 hours later than children and adults.
            </p>

            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-slate-200">
                What time does your alarm ring on school days?
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['06:00', '06:30', '07:00', '07:30'].map((time) => (
                  <button
                    key={time}
                    onClick={() => setTeenWakeTime(time)}
                    className={`py-2.5 px-3 rounded-2xl border text-xs font-extrabold transition-all shadow-sm ${
                      teenWakeTime === time
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-400 text-white shadow-cyan-500/20'
                        : 'bg-slate-950/70 hover:bg-slate-800 border-slate-800 text-slate-300'
                    }`}
                  >
                    {time} AM
                  </button>
                ))}
              </div>
            </div>

            {/* Calculation output card */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 shadow-inner">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-bold">Your Alarm Time:</span>
                  <span className="text-2xl font-black text-white">{teenWakeTime} AM</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-cyan-300 font-extrabold block uppercase tracking-wider">
                    Adult Biological Equivalent:
                  </span>
                  <span className="text-2xl font-black text-cyan-300">
                    {calculateAdultEquivalent(teenWakeTime)}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border-l-4 border-cyan-400 text-xs sm:text-sm text-slate-100 leading-relaxed space-y-1.5">
                <div className="flex items-center gap-1.5 text-cyan-300 font-extrabold">
                  <Clock className="w-4 h-4 text-cyan-300" />
                  <span>The Pediatric Biological Reality:</span>
                </div>
                <p>
                  When adults wonder why you are groggy at {teenWakeTime} AM, remember: biologically, you were just asked to perform at {calculateAdultEquivalent(teenWakeTime)}. You aren't lazy—your brain was literally still in deep restorative REM sleep.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between font-medium">
            <span>American Academy of Pediatrics</span>
            <span className="text-cyan-400 font-bold">Circadian Biology</span>
          </div>
        </div>

      </div>
    </div>
  );
};
