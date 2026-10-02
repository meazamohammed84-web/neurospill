import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Heart, 
  RotateCcw, 
  CheckCheck, 
  Coffee,
  ArrowLeft,
  X,
  Sparkles
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
  liked?: boolean;
}

interface VoiceTherapistProps {
  onClose?: () => void;
  onOpenSupport?: () => void;
}

export const VoiceTherapist: React.FC<VoiceTherapistProps> = ({ onClose, onOpenSupport }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-comfort-1',
      role: 'model',
      content: "Hey... I'm right here for you. 🤍\n\nTake a slow, gentle breath. Drop your shoulders two inches and unclench your jaw. Whatever you are carrying today, I want you to know: **This is normal. This is okay. You can go through this, and we can go through this together.**\n\nWhat's on your mind right now?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBreathingGuide, setShowBreathingGuide] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'Inhale (4s)' | 'Hold (4s)' | 'Exhale (6s)'>('Inhale (4s)');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Guarantee that speech synthesis is completely stopped and silenced
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    inputRef.current?.focus();
  }, []);

  // Breathing Guide Loop
  useEffect(() => {
    if (!showBreathingGuide) return;
    let timer: NodeJS.Timeout;

    const runCycle = () => {
      setBreathingPhase('Inhale (4s)');
      timer = setTimeout(() => {
        setBreathingPhase('Hold (4s)');
        timer = setTimeout(() => {
          setBreathingPhase('Exhale (6s)');
          timer = setTimeout(runCycle, 6000);
        }, 4000);
      }, 4000);
    };

    runCycle();
    return () => clearTimeout(timer);
  }, [showBreathingGuide]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Send message
  const handleSend = async (overrideText?: string) => {
    const textToSend = (overrideText ?? inputVal).trim();
    if (!textToSend || isLoading) return;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    setInputVal('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/comfort/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedHistory.map((m) => ({ role: m.role, content: m.content })),
          userMessage: textToSend,
        }),
      });

      if (!res.ok) {
        throw new Error('Response failed');
      }

      const data = await res.json();
      const botReply = data.reply || "I hear you. Take a slow breath with me. What you're feeling is normal, and we're going to get through it together.";
      const newBotMsgId = `model-${Date.now()}`;

      const botMsg: ChatMessage = {
        id: newBotMsgId,
        role: 'model',
        content: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error(err);
      const fallbackMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        content: "Hey, I'm right here with you. 🤍 Take a slow, gentle breath. Whatever feels overwhelming right now: this is normal, this is okay, and we can go through this together. You don't have to figure it all out this minute. Tell me what's feeling hardest right now?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-comfort-reset',
        role: 'model',
        content: "Clean slate. You are safe here. 🤍 I'm right here for you—what's on your mind?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const toggleHeart = (id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, liked: !m.liked } : m))
    );
  };

  const comfortPrompts = [
    { label: '🤍 "Tell me this is normal..."', text: "Can you please tell me that what I'm feeling right now is normal and that I'm not broken?" },
    { label: '🫂 "We can get through this"', text: "I'm having a really hard day. Can you remind me that I can get through this?" },
    { label: '🥀 "I feel so overwhelmed"', text: "Everything feels way too heavy and loud right now. I feel frozen." },
    { label: '💔 "Can\'t stop overthinking"', text: "My brain won't stop replaying an embarrassing awkward moment. Help me turn down the noise." },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col overflow-hidden text-slate-100 animate-fade-in font-sans">
      {/* Sleek Top Sanctuary Bar */}
      <header className="h-16 px-4 sm:px-6 bg-slate-950/90 backdrop-blur-md border-b border-pink-500/20 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          {onClose && (
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors text-xs font-bold"
              title="Return to main app"
            >
              <ArrowLeft className="w-4 h-4 text-pink-400" />
              <span className="hidden sm:inline">Back to App</span>
            </button>
          )}

          {/* Sage Presence Indicator */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 p-[2px] shadow-md shadow-pink-500/20">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm text-white">Sage</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-pink-300/90 font-medium">
                Here for you 🤍
              </p>
            </div>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowBreathingGuide(!showBreathingGuide)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all border ${
              showBreathingGuide
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40 shadow-sm'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <Coffee className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">{showBreathingGuide ? 'Hide Breath' : 'Breathe With Me'}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title="Start Fresh"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 border border-slate-800 transition-colors"
              title="Close full screen"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>

      {/* Breathing Guide Floating Box */}
      {showBreathingGuide && (
        <div className="bg-slate-900/95 border-b border-cyan-500/30 p-3 flex items-center justify-center gap-4 text-center shrink-0">
          <div 
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-[10px] text-white transition-all duration-1000 ${
              breathingPhase.startsWith('Inhale')
                ? 'bg-cyan-500 scale-110 shadow-lg shadow-cyan-500/50'
                : breathingPhase.startsWith('Hold')
                ? 'bg-purple-500 scale-105 shadow-lg shadow-purple-500/50'
                : 'bg-emerald-500 scale-95 shadow-md shadow-emerald-500/40'
            }`}
          >
            Breathe
          </div>
          <div className="text-left space-y-0.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 block">
              4-4-6 Calming Cycle
            </span>
            <p className="text-xs font-extrabold text-white">
              {breathingPhase}
            </p>
          </div>
        </div>
      )}

      {/* Full-Screen Chat Thread */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-4 max-w-3xl w-full mx-auto">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
            >
              <div className="flex items-center gap-2 mb-1 px-1 text-[11px] text-slate-400 font-medium">
                {isUser ? (
                  <span>You</span>
                ) : (
                  <span className="flex items-center gap-1 text-pink-400 font-bold">
                    <Heart className="w-3 h-3 fill-pink-400" /> Sage
                  </span>
                )}
                <span>• {msg.timestamp}</span>
              </div>

              <div
                className={`max-w-[90%] sm:max-w-[85%] rounded-3xl p-4 sm:p-5 text-sm sm:text-base leading-relaxed space-y-2 relative shadow-md ${
                  isUser
                    ? 'bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 text-white rounded-tr-none'
                    : 'bg-slate-900 border border-pink-500/20 text-slate-100 rounded-tl-none shadow-pink-950/20'
                }`}
              >
                <div className="whitespace-pre-wrap font-normal">
                  {msg.content}
                </div>

                {/* Footer with save heart or delivered tick */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-800/60 text-xs">
                  {!isUser ? (
                    <button
                      onClick={() => toggleHeart(msg.id)}
                      className={`p-1 rounded-lg transition-colors flex items-center gap-1.5 ${
                        msg.liked ? 'text-rose-400 fill-rose-400' : 'text-slate-500 hover:text-rose-400'
                      }`}
                      title="Save comforting message"
                    >
                      <Heart className="w-3.5 h-3.5" />
                      <span className="text-[10px]">{msg.liked ? 'Saved' : 'Save'}</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1 text-[11px] text-pink-200/80 ml-auto">
                      <span>Delivered</span>
                      <CheckCheck className="w-3.5 h-3.5 text-pink-200" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-2">
            <div className="bg-slate-900 border border-pink-500/20 rounded-2xl rounded-tl-none p-4 text-xs text-slate-300 flex items-center gap-2.5">
              <span className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
              <span className="font-semibold text-pink-300">Sage is here...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Comfort Chips (What to text when you're overwhelmed) */}
      <div className="px-4 py-2 max-w-3xl w-full mx-auto shrink-0">
        <div className="flex flex-wrap gap-1.5">
          {comfortPrompts.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(item.text)}
              disabled={isLoading}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-pink-950/40 text-slate-300 hover:text-pink-200 border border-slate-800 hover:border-pink-500/40 transition-all active:scale-95 disabled:opacity-50"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Composer Bar */}
      <footer className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800/80 shrink-0">
        <div className="max-w-3xl w-full mx-auto">
          <div className="rounded-2xl bg-slate-900 border border-pink-500/30 p-2 flex items-center gap-2 shadow-xl">
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Text Sage... What's on your mind? (I'm here for you)"
              disabled={isLoading}
              className="flex-1 bg-transparent px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            />

            <button
              onClick={() => handleSend()}
              disabled={!inputVal.trim() || isLoading}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-black text-xs shadow-md transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
