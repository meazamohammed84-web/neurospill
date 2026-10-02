import React, { useState } from 'react';
import { BRAIN_REGIONS } from '../data/presetQuestions';
import { BrainRegion } from '../types';
import { 
  Zap, 
  Sparkles, 
  AlertTriangle, 
  Award, 
  Compass, 
  HelpCircle,
  Activity,
  Layers,
  Star
} from 'lucide-react';

export const BrainExplorer: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<BrainRegion>(BRAIN_REGIONS[0]);

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-bold shadow-md">
          <Activity className="w-4 h-4 text-cyan-300 animate-pulse" />
          <span>Interactive Neuroanatomy Blueprint</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          The Teen Brain:{' '}
          <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Under Active Renovation
          </span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Unlike an adult brain that is fully paved, your brain is actively remodeling 86 billion neurons. 
          Click on any brain station below to inspect its unique superpowers and why it glitches.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Brain Station Selector */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300 px-1 flex items-center justify-between">
            <span>Brain Stations</span>
            <span className="text-pink-400 font-extrabold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Tap To Inspect
            </span>
          </div>

          <div className="space-y-3">
            {BRAIN_REGIONS.map((region) => {
              const isSelected = selectedRegion.id === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between group shadow-sm hover:scale-[1.01] ${
                    isSelected
                      ? 'bg-slate-900 border-2 shadow-lg'
                      : 'bg-slate-950/70 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700'
                  }`}
                  style={{
                    borderColor: isSelected ? region.color : undefined,
                    boxShadow: isSelected ? `0 0 20px ${region.color}30` : undefined,
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <div 
                      className="w-4 h-4 rounded-full shrink-0 shadow-md ring-2 ring-slate-950"
                      style={{ 
                        backgroundColor: region.color,
                        boxShadow: `0 0 10px ${region.color}`
                      }}
                    />
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-white group-hover:text-pink-200 transition-colors">
                        {region.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
                        {region.nickname}
                      </p>
                    </div>
                  </div>

                  <span 
                    className="text-xs px-3 py-1 rounded-full font-bold transition-all shadow-sm"
                    style={{
                      backgroundColor: isSelected ? region.color : '#1e293b',
                      color: isSelected ? '#ffffff' : '#94a3b8'
                    }}
                  >
                    {isSelected ? 'Active' : 'Inspect'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick takeaway note with colorful gradient */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-cyan-950/40 border border-purple-500/30 text-xs text-slate-300 space-y-2 shadow-md">
            <div className="flex items-center gap-2 text-cyan-300 font-bold">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>The "Back-To-Front" Remodeling Rule</span>
            </div>
            <p className="leading-relaxed">
              The human brain matures from back to front. Emotional, sensory, and reward hubs in the back finish first, while the rational prefrontal cortex in the front finishes last (around age 25).
            </p>
          </div>
        </div>

        {/* Detailed Region Dossier */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-slate-900/95 border border-slate-800 overflow-hidden shadow-2xl">
            {/* Header with region color accent */}
            <div 
              className="p-6 sm:p-8 border-b border-slate-800 relative"
              style={{
                background: `linear-gradient(135deg, ${selectedRegion.color}30 0%, rgba(15, 23, 42, 0.95) 100%)`
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span 
                  className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm"
                  style={{ 
                    backgroundColor: `${selectedRegion.color}30`, 
                    color: selectedRegion.color,
                    border: `1.5px solid ${selectedRegion.color}`
                  }}
                >
                  {selectedRegion.status}
                </span>
                <span className="text-xs text-slate-300 font-semibold bg-slate-950/60 px-3 py-1 rounded-full border border-slate-700">
                  Part ID: #{selectedRegion.id.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {selectedRegion.name}
              </h3>
              <p className="text-base font-bold mt-1 text-slate-200">
                "{selectedRegion.nickname}"
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Everyday Metaphor */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-transparent border-l-4 border-amber-400 space-y-1.5 shadow-sm">
                <div className="text-xs font-extrabold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Everyday Metaphor
                </div>
                <p className="text-sm sm:text-base text-slate-100 italic font-medium leading-relaxed">
                  "{selectedRegion.metaphor}"
                </p>
              </div>

              {/* Primary Role */}
              <div className="space-y-1.5 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Core Neurological Mission
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {selectedRegion.role}
                </p>
              </div>

              {/* Two Column: Superpower vs Glitch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/30 border-2 border-emerald-500/40 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 text-emerald-300 font-extrabold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4 text-emerald-400" />
                    Teen Superpower
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                    {selectedRegion.teenSuperpower}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/30 border-2 border-rose-500/40 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 text-rose-300 font-extrabold text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    Adolescent Glitch
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                    {selectedRegion.teenGlitch}
                  </p>
                </div>
              </div>

              {/* Real Life Behaviors Triggered */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-pink-400" />
                  Real-Life Scenarios This Explains:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedRegion.relatedBehaviors.map((behavior, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 flex items-center gap-2.5 shadow-sm"
                    >
                      <span 
                        className="w-2 h-2 rounded-full shrink-0 shadow-sm"
                        style={{ backgroundColor: selectedRegion.color }}
                      />
                      <span className="font-medium">{behavior}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
