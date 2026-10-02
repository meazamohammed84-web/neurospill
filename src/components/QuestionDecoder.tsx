import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  Share2, 
  Check, 
  Lightbulb, 
  AlertCircle, 
  Zap, 
  Flame, 
  Dna, 
  Compass, 
  ShieldCheck, 
  Loader2, 
  Heart, 
  Radio, 
  Star, 
  Layers,
  BookOpen,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { BrainExplanation } from '../types';
import { PRESET_EXPLANATIONS } from '../data/presetQuestions';

interface QuestionDecoderProps {
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

const TRENDING_SUGGESTIONS = [
  { text: "Why does getting embarrassed in class feel like the absolute end of the world?", color: "border-pink-500/40 text-pink-300 hover:border-pink-400 hover:bg-pink-950/30" },
  { text: "Why does getting left on Delivered feel like a literal canon event?", color: "border-purple-500/40 text-purple-300 hover:border-purple-400 hover:bg-purple-950/30" },
  { text: "Why is my brain buffering when the teacher calls on me unexpectedly?", color: "border-cyan-500/40 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-950/30" },
  { text: "Why does my social battery go from 100% to 2% in twenty minutes?", color: "border-emerald-500/40 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-950/30" },
  { text: "Why do I replay awkward moments in 4K resolution at 2 AM?", color: "border-amber-500/40 text-amber-300 hover:border-amber-400 hover:bg-amber-950/30" },
  { text: "Why can I hyperfocus on video games for 6 hours but can't read 2 pages of homework?", color: "border-rose-500/40 text-rose-300 hover:border-rose-400 hover:bg-rose-950/30" }
];

const CATEGORY_COLORS: Record<string, { badge: string; text: string; bg: string; border: string }> = {
  social: { badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40', text: 'text-cyan-300', bg: 'hover:bg-cyan-950/20', border: 'border-cyan-500/30' },
  emotions: { badge: 'bg-pink-500/20 text-pink-300 border-pink-500/40', text: 'text-pink-300', bg: 'hover:bg-pink-950/20', border: 'border-pink-500/30' },
  habits: { badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40', text: 'text-amber-300', bg: 'hover:bg-amber-950/20', border: 'border-amber-500/30' },
  family: { badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40', text: 'text-emerald-300', bg: 'hover:bg-emerald-950/20', border: 'border-emerald-500/30' },
  identity: { badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40', text: 'text-purple-300', bg: 'hover:bg-purple-950/20', border: 'border-purple-500/30' },
};

const SLANG_TRANSLATOR = [
  { slang: 'Living rent-free in your head at 2 AM', science: 'Default Mode Network (DMN) rumination loop & lack of sleep sensory gating' },
  { slang: 'Brain is literally buffering', science: 'Prefrontal cortex working memory overload during executive task switching' },
  { slang: 'Side-eye from your amygdala', science: 'Hyper-vigilant threat appraisal misinterpreting neutral human faces as hostile' },
  { slang: 'Social battery hit 2%', science: 'Dorsal vagal complex fatigue & dopamine receptor desensitization in high-stimulus spaces' },
  { slang: 'Main character syndrome / spotlight', science: 'David Elkind’s Imaginary Audience cognitive bias during synaptic remodeling' },
  { slang: 'Stomach dropped into the basement', science: 'Insular cortex triggering vagus nerve vasoconstriction in response to perceived rejection' },
  { slang: 'Canon event', science: 'Synaptic pruning & myelination carving durable neuro-pathways through lived adversity' },
  { slang: 'Ferrari engine with bicycle brakes', science: 'Fully mature limbic reward/threat drive vs under-construction prefrontal cortex' }
];

export const QuestionDecoder: React.FC<QuestionDecoderProps> = ({ inputRef }) => {
  const [selectedExplanation, setSelectedExplanation] = useState<BrainExplanation>(PRESET_EXPLANATIONS[0]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [playingAudio, setPlayingAudio] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'social' | 'emotions' | 'habits' | 'family' | 'identity'>('all');
  
  // Vibe Mode: Gen Z slang + science is the flagship!
  const [vibe, setVibe] = useState<'genz' | 'older_sibling' | 'neuro_nerd'>('genz');
  const [showSlangDictionary, setShowSlangDictionary] = useState(false);

  const filteredPresets = activeCategory === 'all' 
    ? PRESET_EXPLANATIONS 
    : PRESET_EXPLANATIONS.filter(p => p.category === activeCategory);

  const handleAsk = async (questionText?: string) => {
    const q = (questionText || query).trim();
    if (!q) return;

    // Check if it exactly matches one of our rich preset deep dives first (only if default vibe)
    if (vibe === 'older_sibling') {
      const existing = PRESET_EXPLANATIONS.find(
        p => p.question.toLowerCase() === q.toLowerCase()
      );
      if (existing) {
        setSelectedExplanation(existing);
        setQuery('');
        window.scrollTo({ top: 400, behavior: 'smooth' });
        return;
      }
    }

    setLoading(true);
    setError(null);
    stopAudio();

    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, vibe }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Server responded with ${res.status}`);
      }

      const data = await res.json();
      const newExplanation: BrainExplanation = {
        id: `custom-${Date.now()}`,
        question: q,
        category: 'emotions',
        title: data.title || 'Neuroscience Breakdown',
        primaryBrainPart: data.primaryBrainPart || 'Prefrontal-Limbic Network',
        brainMetaphor: data.brainMetaphor || 'Your brain under active construction.',
        relatableReality: data.relatableReality,
        brainBiologyHack: data.brainBiologyHack,
        whyWeDoIt: data.whyWeDoIt,
        takeaway: data.takeaway,
        brainCheatCode: data.brainCheatCode || 'Take 3 deep physiological sigh breaths.',
        tags: [vibe === 'genz' ? 'Gen Z Slang + Science' : 'Evidence-Based', 'Teen Brain', 'Neuroscience']
      };

      setSelectedExplanation(newExplanation);
      setQuery('');
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } catch (err: any) {
      console.error('Decoding error:', err);
      setError(err?.message || 'Could not decode this brain question. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  const handleAudioToggle = async () => {
    if (playingAudio) {
      stopAudio();
      return;
    }

    try {
      setPlayingAudio(true);
      
      const narrationScript = `${selectedExplanation.title}. 
First, the relatable reality: ${selectedExplanation.relatableReality.slice(0, 300)}. 
Under the hood: ${selectedExplanation.brainMetaphor}. 
The takeaway: ${selectedExplanation.takeaway.slice(0, 250)}`;

      const res = await fetch('/api/narrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: narrationScript }),
      });

      if (res.ok) {
        const { audioBase64 } = await res.json();
        if (audioBase64) {
          const audio = new Audio(`data:audio/wav;base64,${audioBase64}`);
          audio.onended = () => setPlayingAudio(false);
          audio.onerror = () => {
            fallbackBrowserTTS(narrationScript);
          };
          setAudioElement(audio);
          audio.play();
          return;
        }
      }
      
      fallbackBrowserTTS(narrationScript);
    } catch {
      fallbackBrowserTTS(selectedExplanation.relatableReality);
    }
  };

  const fallbackBrowserTTS = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 1.05;
      utterance.rate = 1.0;
      utterance.onend = () => setPlayingAudio(false);
      utterance.onerror = () => setPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setPlayingAudio(false);
    }
  };

  const stopAudio = () => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      setAudioElement(null);
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setPlayingAudio(false);
  };

  const handleCopyCard = () => {
    const textToCopy = `🧠 NeuroSpill Breakdown: "${selectedExplanation.question}"
    
✨ Title: ${selectedExplanation.title}
⚡ The Reality: ${selectedExplanation.relatableReality.slice(0, 160)}...
🧬 The Science: ${selectedExplanation.brainMetaphor}
🛡️ Brain Cheat Code: ${selectedExplanation.brainCheatCode}

Read full breakdown on NeuroSpill!`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section - Super Colorful & Welcoming */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/80 to-purple-950/70 border border-purple-500/20 p-6 sm:p-10 lg:p-12 shadow-2xl">
        {/* Vibrant Glowing Color Orbs */}
        <div className="absolute top-0 right-10 -mt-16 w-80 h-80 rounded-full bg-gradient-to-br from-pink-500/25 to-purple-600/25 blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-10 -mb-16 w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-400/25 to-emerald-500/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-pink-400/30 text-pink-200 text-xs sm:text-sm font-semibold tracking-wide shadow-md backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span>Evidence-Based Neuroscience Meets Gen Z Slang</span>
          </div>

          {/* Welcoming Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Ever wonder why you feel everything{' '}
            <span className="bg-gradient-to-r from-pink-400 via-amber-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              so intensely
            </span>?
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
            Welcome to the biggest neurological glow-up of your life. 
            Ask any question below and get <strong>evidence-based, peer-reviewed brain science</strong> served in authentic, relatable Gen Z slang. Zero judgment, zero boring textbook lectures.
          </p>

          {/* VIBE / SLANG SELECTOR DIAL */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              Answer Vibe Mode:
            </span>
            <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-2xl border border-purple-500/30 shadow-inner">
              <button
                type="button"
                onClick={() => setVibe('genz')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  vibe === 'genz'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/20 scale-105'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>⚡ Gen Z Slang + Science</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-pink-400/20 text-pink-200">Popular</span>
              </button>

              <button
                type="button"
                onClick={() => setVibe('older_sibling')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                  vibe === 'older_sibling'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md scale-105'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🧠 Older Sibling / Podcast</span>
              </button>

              <button
                type="button"
                onClick={() => setVibe('neuro_nerd')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                  vibe === 'neuro_nerd'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md scale-105'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🔬 Neuro-Lab Deep Dive</span>
              </button>
            </div>
          </div>

          {/* Multi-Color Gradient Search Bar */}
          <div className="pt-2">
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 to-amber-400 shadow-xl shadow-purple-900/20">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAsk();
                }}
                className="relative flex items-center rounded-[14px] bg-slate-950/95 p-2 focus-within:ring-2 focus-within:ring-pink-500/50 transition-all"
              >
                <div className="pl-3 pr-2 text-pink-400">
                  <Brain className="w-5 h-5 text-pink-400 animate-pulse" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask anything (e.g. Why does getting left on read make my stomach drop?)"
                  className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base px-2 py-2 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading || !query.trim()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:from-pink-400 hover:to-cyan-400 disabled:opacity-50 text-white font-bold text-sm transition-all shadow-md shrink-0 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="hidden sm:inline">Decoding...</span>
                    </>
                  ) : (
                    <>
                      <span>Spill Science</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {error && (
              <div className="mt-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            {/* Colorful Trending Quick Suggestions */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-amber-300 flex items-center gap-1 font-bold">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Popular Questions:
              </span>
              {TRENDING_SUGGESTIONS.slice(0, 4).map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAsk(item.text)}
                  className={`px-3 py-1.5 rounded-full bg-slate-900/90 text-slate-200 border transition-all text-left truncate max-w-[280px] sm:max-w-xs shadow-sm hover:scale-105 ${item.color}`}
                >
                  "{item.text}"
                </button>
              ))}
            </div>

            {/* Quick Toggle: Gen Z Slang ↔ Neuroscience Translator */}
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setShowSlangDictionary(!showSlangDictionary)}
                className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/60 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Gen Z Slang ↔ Neuroscience Translator Guide</span>
                {showSlangDictionary ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            </div>

            {/* Expandable Slang to Science Dictionary */}
            {showSlangDictionary && (
              <div className="mt-3 text-left rounded-2xl bg-slate-950/95 border border-purple-500/30 p-5 space-y-3 shadow-xl animate-fade-in">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-pink-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    How Gen Z Slang Maps to Real Brain Biology
                  </span>
                  <span className="text-[10px] text-slate-400">Click any slang to ask about it!</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {SLANG_TRANSLATOR.map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => handleAsk(`Why does ${item.slang.toLowerCase()} happen in our brain?`)}
                      className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-pink-500/40 cursor-pointer transition-all space-y-0.5 group"
                    >
                      <div className="text-xs font-bold text-pink-300 group-hover:text-pink-200 flex items-center justify-between">
                        <span>"{item.slang}"</span>
                        <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-pink-400 transition-colors" />
                      </div>
                      <div className="text-[11px] text-slate-300 font-normal leading-tight">
                        <strong className="text-cyan-400">Science: </strong>{item.science}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Selected Explanation Display */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-pink-400 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                Evidence-Based Neuroscience Breakdown
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs text-cyan-300 font-medium capitalize">
                Voice Mode: {vibe === 'genz' ? 'Gen Z Slang + Science' : vibe === 'older_sibling' ? 'Older Sibling' : 'Neuro-Nerd'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Decoding: "{selectedExplanation.question}"
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAudioToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold transition-all shadow-sm ${
                playingAudio
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                  : 'bg-gradient-to-r from-purple-950/60 to-indigo-950/60 hover:from-purple-900/80 hover:to-indigo-900/80 text-purple-200 border-purple-500/40'
              }`}
            >
              {playingAudio ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
              <span>{playingAudio ? 'Stop Voice Note' : 'Listen to Voice Note'}</span>
            </button>

            <button
              onClick={handleCopyCard}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold transition-all shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-pink-400" />}
              <span>{copied ? 'Copied Card!' : 'Share Card'}</span>
            </button>
          </div>
        </div>

        {/* The 4-Part Structured Card with Vibrant Accents */}
        <div className="rounded-3xl bg-slate-900/95 border border-purple-500/30 overflow-hidden shadow-2xl">
          {/* Header Card Banner - Holographic Violet & Rose */}
          <div className="bg-gradient-to-r from-purple-900/90 via-indigo-900/80 to-pink-950/80 p-6 sm:p-8 border-b border-purple-500/30 relative">
            <div className="absolute top-0 right-0 w-64 h-32 bg-cyan-500/10 blur-2xl pointer-events-none" />
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/25 text-cyan-200 border border-cyan-400/40 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Brain className="w-3.5 h-3.5 text-cyan-300" />
                {selectedExplanation.primaryBrainPart}
              </span>
              <span className="text-xs text-pink-200/90 font-medium italic bg-pink-500/15 px-3 py-1 rounded-full border border-pink-400/20">
                "{selectedExplanation.brainMetaphor}"
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              {selectedExplanation.title}
            </h3>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* 1. The Relatable Reality - Sunset Amber / Coral Glow */}
            <div className="bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-transparent border-l-4 border-amber-400 p-5 sm:p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm tracking-wide uppercase">
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-300">
                  <Zap className="w-4 h-4" />
                </div>
                <span>1. The Relatable Reality</span>
              </div>
              <div className="text-slate-100 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
                {selectedExplanation.relatableReality}
              </div>
            </div>

            {/* 2. The Brain & Biology Hack - Electric Cyan / Azure Glow */}
            <div className="bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-transparent border-l-4 border-cyan-400 p-5 sm:p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-cyan-300 font-extrabold text-sm tracking-wide uppercase">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <Dna className="w-4 h-4" />
                </div>
                <span>2. The Brain & Biology Hack (Under The Hood)</span>
              </div>
              <div className="text-slate-100 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
                {selectedExplanation.brainBiologyHack}
              </div>
            </div>

            {/* 3. The "Why We Do It" - Emerald / Mint Glow */}
            <div className="bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent border-l-4 border-emerald-400 p-5 sm:p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-300 font-extrabold text-sm tracking-wide uppercase">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                  <Compass className="w-4 h-4" />
                </div>
                <span>3. The "Why We Do It" (Tribe Survival & Evolution)</span>
              </div>
              <div className="text-slate-100 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
                {selectedExplanation.whyWeDoIt}
              </div>
            </div>

            {/* 4. The Takeaway - Lavender & Violet Glow */}
            <div className="bg-gradient-to-r from-purple-500/15 via-fuchsia-500/10 to-transparent border-l-4 border-purple-400 p-5 sm:p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-purple-300 font-extrabold text-sm tracking-wide uppercase">
                <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>4. The Reassuring Takeaway</span>
              </div>
              <div className="text-slate-100 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
                {selectedExplanation.takeaway}
              </div>
            </div>

            {/* Bonus: The Brain Cheat Code - Shimmering Multi-Color Card */}
            {selectedExplanation.brainCheatCode && (
              <div className="rounded-3xl bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-cyan-500/20 border-2 border-amber-400/50 p-6 flex flex-col sm:flex-row items-start gap-4 shadow-lg shadow-amber-500/5">
                <div className="p-3 rounded-2xl bg-amber-400/20 text-amber-300 shrink-0 border border-amber-400/30">
                  <Lightbulb className="w-6 h-6 text-amber-300 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                    <span>Instant Brain Cheat Code</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-200 border border-amber-400/40">
                      Try Right Now
                    </span>
                  </h4>
                  <p className="text-white text-base sm:text-lg font-semibold leading-relaxed">
                    {selectedExplanation.brainCheatCode}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Preset Library / Browse Other Mysteries with Colorful Badges */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span>Explore More Teen Brain Mysteries</span>
            </h3>
            <p className="text-sm text-slate-300">
              Curated by youth psychologists & neuroscientists. Click any mystery to unlock its full breakdown.
            </p>
          </div>

          {/* Colorful Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 text-xs">
            {(['all', 'social', 'emotions', 'habits', 'family', 'identity'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl capitalize font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPresets.map((preset) => {
            const isSelected = selectedExplanation.id === preset.id;
            const style = CATEGORY_COLORS[preset.category] || CATEGORY_COLORS.emotions;

            return (
              <div
                key={preset.id}
                onClick={() => {
                  setSelectedExplanation(preset);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`cursor-pointer rounded-3xl p-6 border transition-all text-left flex flex-col justify-between group shadow-md hover:scale-[1.02] ${
                  isSelected
                    ? 'bg-gradient-to-b from-purple-950/60 to-slate-900 border-pink-500 ring-2 ring-pink-500/30 shadow-pink-900/20'
                    : `bg-slate-900/80 hover:bg-slate-900 border-slate-800 hover:${style.border}`
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${style.badge}`}>
                      {preset.category}
                    </span>
                    <span className="text-xs text-pink-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read Breakdown <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base text-white group-hover:text-pink-300 transition-colors leading-snug">
                    {preset.question}
                  </h4>

                  <p className="text-xs text-slate-300 line-clamp-2">
                    {preset.brainMetaphor}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="truncate max-w-[190px] text-slate-400 font-medium">{preset.primaryBrainPart}</span>
                  <span className="text-cyan-400 font-bold">4-Step Breakdown</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
