import React from 'react';
import { Brain, Sparkles, Compass, Gauge, ShieldCheck, Flame, Heart, Phone } from 'lucide-react';

interface NavbarProps {
  activeTab: 'decoder' | 'therapist' | 'charm' | 'connection' | 'brainMap' | 'simulators' | 'cheatCodes' | 'support';
  setActiveTab: (tab: 'decoder' | 'therapist' | 'charm' | 'connection' | 'brainMap' | 'simulators' | 'cheatCodes' | 'support') => void;
  onAskClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onAskClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-lg border-b border-purple-500/20 text-slate-100 shadow-lg shadow-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div 
          onClick={() => setActiveTab('decoder')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 p-[2px] shadow-lg shadow-pink-500/25 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Brain className="w-5 h-5 text-pink-400 group-hover:text-cyan-300 transition-colors" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                NeuroSpill
              </span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/40">
                Teen Brain Lab
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium hidden sm:block">
              Why your mind does that • Zero judgment, pure neuroscience
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden xl:flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('decoder')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'decoder'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Brain Decoders</span>
          </button>

          {/* Full-Screen Comfort Chat Tab */}
          <button
            onClick={() => setActiveTab('therapist')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'therapist'
                ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white shadow-md shadow-pink-500/30 font-bold ring-2 ring-pink-400/40'
                : 'text-pink-300 hover:text-white hover:bg-pink-950/40'
            }`}
          >
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span>Comfort</span>
          </button>

          <button
            onClick={() => setActiveTab('charm')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'charm'
                ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white shadow-md shadow-pink-500/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Charm & Rizz</span>
          </button>

          <button
            onClick={() => setActiveTab('connection')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'connection'
                ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-600/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <span className="text-pink-400 font-bold">♥</span>
            <span>Social Lab</span>
          </button>

          <button
            onClick={() => setActiveTab('brainMap')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'brainMap'
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Compass className="w-4 h-4 text-cyan-300" />
            <span>Brain Map</span>
          </button>

          <button
            onClick={() => setActiveTab('simulators')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'simulators'
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-600/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Gauge className="w-4 h-4 text-emerald-300" />
            <span>Reality Lab</span>
          </button>

          <button
            onClick={() => setActiveTab('cheatCodes')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'cheatCodes'
                ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md shadow-amber-500/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Cheat Codes</span>
          </button>

          {/* Dedicated Helplines / Sad & Depressed Support Tab */}
          <button
            onClick={() => setActiveTab('support')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all border ${
              activeTab === 'support'
                ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-400 font-bold shadow-md shadow-rose-600/30'
                : 'border-rose-500/30 bg-rose-950/20 text-rose-300 hover:bg-rose-900/40 hover:text-white'
            }`}
            title="Real phone and text numbers to call if you're sad, depressed, or need someone"
          >
            <Phone className="w-3.5 h-3.5 text-rose-400" />
            <span>Helplines (988)</span>
          </button>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onAskClick}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:from-pink-400 hover:to-cyan-400 text-white font-extrabold text-sm shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
            <span>Decode A Question</span>
          </button>
        </div>
      </div>

      {/* Mobile Tab Bar */}
      <div className="xl:hidden flex items-center justify-around border-t border-slate-800/80 bg-slate-950/95 py-2 px-1 text-[11px] overflow-x-auto">
        <button
          onClick={() => setActiveTab('decoder')}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl shrink-0 ${
            activeTab === 'decoder' ? 'text-pink-400 font-extrabold bg-pink-500/10' : 'text-slate-400'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Decoders</span>
        </button>
        <button
          onClick={() => setActiveTab('therapist')}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl shrink-0 ${
            activeTab === 'therapist' ? 'text-pink-400 font-extrabold bg-pink-500/20 border border-pink-500/30' : 'text-slate-400'
          }`}
        >
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
          <span>Comfort</span>
        </button>
        <button
          onClick={() => setActiveTab('charm')}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl shrink-0 ${
            activeTab === 'charm' ? 'text-amber-400 font-extrabold bg-amber-500/10' : 'text-slate-400'
          }`}
        >
          <Flame className="w-3.5 h-3.5" />
          <span>Charm</span>
        </button>
        <button
          onClick={() => setActiveTab('connection')}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl shrink-0 ${
            activeTab === 'connection' ? 'text-rose-400 font-extrabold bg-rose-500/10' : 'text-slate-400'
          }`}
        >
          <span>♥</span>
          <span>Social</span>
        </button>
        <button
          onClick={() => setActiveTab('brainMap')}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl shrink-0 ${
            activeTab === 'brainMap' ? 'text-purple-400 font-extrabold bg-purple-500/10' : 'text-slate-400'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Map</span>
        </button>
        <button
          onClick={() => setActiveTab('simulators')}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl shrink-0 ${
            activeTab === 'simulators' ? 'text-cyan-400 font-extrabold bg-cyan-500/10' : 'text-slate-400'
          }`}
        >
          <Gauge className="w-3.5 h-3.5" />
          <span>Reality</span>
        </button>
        <button
          onClick={() => setActiveTab('cheatCodes')}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl shrink-0 ${
            activeTab === 'cheatCodes' ? 'text-amber-400 font-extrabold bg-amber-500/10' : 'text-slate-400'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Hacks</span>
        </button>
        <button
          onClick={() => setActiveTab('support')}
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl shrink-0 ${
            activeTab === 'support' ? 'text-rose-400 font-extrabold bg-rose-500/20 border border-rose-500/30' : 'text-rose-400/70'
          }`}
        >
          <Phone className="w-3.5 h-3.5 text-rose-400" />
          <span>988 Help</span>
        </button>
      </div>
    </header>
  );
};
