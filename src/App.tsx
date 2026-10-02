import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { QuestionDecoder } from './components/QuestionDecoder';
import { VoiceTherapist } from './components/VoiceTherapist';
import { SupportHotlines } from './components/SupportHotlines';
import { CharmPlaybook } from './components/CharmPlaybook';
import { SocialConnectionLab } from './components/SocialConnectionLab';
import { BrainExplorer } from './components/BrainExplorer';
import { RealityCheckLab } from './components/RealityCheckLab';
import { BrainCheatCodes } from './components/BrainCheatCodes';
import { Brain, Heart, Sparkles, Phone, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'decoder' | 'therapist' | 'charm' | 'connection' | 'brainMap' | 'simulators' | 'cheatCodes' | 'support'>('decoder');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAskClick = () => {
    setActiveTab('decoder');
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-pink-500 selection:text-white flex flex-col font-sans">
      {/* Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onAskClick={handleAskClick} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'decoder' && (
          <QuestionDecoder inputRef={inputRef} />
        )}

        {/* Sage Comfort: Full-Screen Dedicated Sanctuary */}
        {activeTab === 'therapist' && (
          <VoiceTherapist 
            onClose={() => setActiveTab('decoder')} 
            onOpenSupport={() => setActiveTab('support')} 
          />
        )}

        {/* Dedicated Support & Crisis Helplines Tab */}
        {activeTab === 'support' && (
          <SupportHotlines 
            onBackToApp={() => setActiveTab('decoder')} 
            onOpenComfort={() => setActiveTab('therapist')} 
          />
        )}

        {activeTab === 'charm' && (
          <CharmPlaybook />
        )}

        {activeTab === 'connection' && (
          <SocialConnectionLab />
        )}

        {activeTab === 'brainMap' && (
          <BrainExplorer />
        )}

        {activeTab === 'simulators' && (
          <RealityCheckLab />
        )}

        {activeTab === 'cheatCodes' && (
          <BrainCheatCodes />
        )}
      </main>

      {/* Reassuring Footer with Dedicated Helpline Notice */}
      <footer className="border-t border-slate-900 bg-slate-950/90 text-slate-400 py-10 px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
        {/* Dedicated Helpline Highlight Banner in Footer */}
        <div className="max-w-7xl mx-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-slate-900 border border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">
                Thinking about sad stuff or feeling depressed?
              </h4>
              <p className="text-xs text-slate-300">
                You never have to be alone with painful thoughts. Real trained people are ready to talk or text 24/7.
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('support')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs shadow-md transition-all shrink-0 active:scale-95"
          >
            <span>View Numbers to Call & Text (988)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs pt-4 border-t border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-pink-600/20 border border-pink-500/30 flex items-center justify-center">
              <Brain className="w-4 h-4 text-pink-400" />
            </div>
            <div>
              <p className="font-bold text-slate-200">NeuroSpill: Teen Brain & Youth Psychology</p>
              <p className="text-slate-500">Translating neuroscience into relatable clarity for ages 11–19.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-400 font-semibold">
            <button 
              onClick={() => setActiveTab('decoder')}
              className="hover:text-pink-400 transition-colors"
            >
              Brain Decoders
            </button>
            <button 
              onClick={() => setActiveTab('therapist')}
              className="hover:text-pink-400 transition-colors text-pink-300 font-bold flex items-center gap-1"
            >
              <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
              <span>Comfort Chat (Sage)</span>
            </button>
            <button 
              onClick={() => setActiveTab('support')}
              className="hover:text-rose-400 transition-colors text-rose-300 font-bold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Helplines (988)</span>
            </button>
            <button 
              onClick={() => setActiveTab('charm')}
              className="hover:text-amber-400 transition-colors"
            >
              Charm & Rizz
            </button>
            <button 
              onClick={() => setActiveTab('connection')}
              className="hover:text-pink-400 transition-colors"
            >
              Social Lab
            </button>
            <button 
              onClick={() => setActiveTab('brainMap')}
              className="hover:text-purple-400 transition-colors"
            >
              Brain Map
            </button>
            <button 
              onClick={() => setActiveTab('simulators')}
              className="hover:text-cyan-400 transition-colors"
            >
              Reality Lab
            </button>
            <button 
              onClick={() => setActiveTab('cheatCodes')}
              className="hover:text-amber-400 transition-colors"
            >
              Cheat Codes
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with science & empathy</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </footer>
    </div>
  );
}
