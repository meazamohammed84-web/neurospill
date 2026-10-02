import React, { useState } from 'react';
import { 
  Sparkles, 
  Flame, 
  Heart, 
  Eye, 
  Compass, 
  Brain, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

interface CharmPlay {
  id: string;
  target: string;
  targetBadge: string;
  npcTrap: string;
  charmPlayName: string;
  script: string;
  neuroscience: string;
  bodyLanguage: string;
  charmTip: string;
}

const GENZ_CHARM_PLAYS: CharmPlay[] = [
  {
    id: 'crush',
    target: 'Talking to a Crush (Without Freezing or Being Weird)',
    targetBadge: 'High-Stakes Connection',
    npcTrap: 'Acting cold/aloof to look "mysterious," or reciting a corny pickup line from TikTok that gives instant second-hand embarrassment.',
    charmPlayName: 'The "Shared Conspiracy" Move',
    script: '"Hey, please tell me you also have zero idea what the teacher is talking about right now."',
    neuroscience: 'Shared vulnerability powers down the amygdala threat radar. By whispering a low-key relatable truth, you create an instant two-person "in-group" alliance that floods their brain with oxytocin and dopamine without awkward pressure.',
    bodyLanguage: 'Relax your shoulders, give 2-3 seconds of soft eye contact with relaxed eyelids, laugh gently, then glance back at your desk so they don’t feel cornered.',
    charmTip: 'Never try to impress a crush with status. Make them feel funny, unjudged, and comfortable, and you instantly become magnetic.'
  },
  {
    id: 'new-class',
    target: 'Sitting Next to Someone New on Day 1',
    targetBadge: 'Cold Open / New Peers',
    npcTrap: 'Putting in both earbuds, staring into your lockscreen for the 40th time, and treating them like a hostile NPC.',
    charmPlayName: 'The "Low-Stakes Intel" Ask',
    script: '"Hey, do you know if this teacher actually collects the homework or are they pretty chill?"',
    neuroscience: 'This triggers the psychological "Benjamin Franklin Effect": when someone does a small, simple favor for you, their brain’s cognitive dissonance resolves by deciding: "I helped them, so I must like them."',
    bodyLanguage: 'Angle your torso slightly toward them. Keep both hands visible and relaxed on the desk, phone away.',
    charmTip: 'People secretly love feeling helpful. Asking for simple information is the smoothest, zero-rejection doorway into conversation.'
  },
  {
    id: 'awkward-silence',
    target: 'Reviving a Dead Conversation or Awkward Silence',
    targetBadge: 'Mid-Convo Rescue',
    npcTrap: 'Panicking, laughing nervously, looking around frantically, or blurting out an unhinged random fact to fill the void.',
    charmPlayName: 'The "Real-Time Brain Buffer" Callout',
    script: '"Wait, my brain just literally buffered for five seconds—what were we just talking about? Oh right, that concert!"',
    neuroscience: 'Naming the awkwardness kills it on contact. Being comfortable with your own brain glitching is the ultimate signal of high social status and emotional security. Their mirror neurons immediately relax.',
    bodyLanguage: 'Smile warmly, roll your eyes playfully at yourself, take a slow breath. A confident pause looks thoughtful, not awkward.',
    charmTip: 'Silence only turns awkward when you panic. If you treat a pause like it’s completely chill, they will too.'
  },
  {
    id: 'hallway-pass',
    target: 'Walking Past an Acquaintance in the Hallway',
    targetBadge: 'Hallway Micro-Interaction',
    npcTrap: 'Staring intensely at your sneakers, pretending to tie your shoe, or fumbling with your locker to dodge eye contact.',
    charmPlayName: 'The "Eyebrow Flash + Upward Micro-Nod"',
    script: '"Yo, how’s your day going?" (Said while keeping your stride, zero pressure for them to stop)',
    neuroscience: 'Evolutionary anthropologists found the quick upward eyebrow flash (raising brows for 1/6th of a second) is the universal human code for "friend, not threat." It leaves a lingering glow of warmth in under 1 second.',
    bodyLanguage: 'Chin slightly up, soft upward nod, relaxed smile, don’t break your stride unless they stop to talk.',
    charmTip: 'You don\'t need a full 10-minute convo. Three warm hallway micro-nods per day will make everyone in school consider you a friend.'
  }
];

export const CharmPlaybook: React.FC = () => {
  const [activeCharmPlayIdx, setActiveCharmPlayIdx] = useState(0);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-pink-950/40 to-purple-950/60 border border-pink-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="absolute top-0 right-10 -mt-16 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 -mb-16 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span>The Neuroscience of Unspoken Aura</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            The Gen Z Charm &{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-300 via-amber-300 to-cyan-300 bg-clip-text text-transparent">
              Unspoken Rizz Playbook
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Forget cringe pickup lines, fake mystery, and rehearsed TikTok scripts. 
            Real charm is an evidence-based superpower: <strong className="text-pink-300">making the other person feel like the main character</strong> so their brain floods with dopamine and oxytocin whenever you speak.
          </p>
        </div>
      </section>

      {/* Rizz Reality Check: Fake Rizz vs Real Aura */}
      <section className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Flame className="w-6 h-6 text-amber-400" />
          <span>The Rizz Reality Check: Fake Rizz vs. Real Unspoken Charm</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Fake Rizz */}
          <div className="p-6 rounded-2xl bg-rose-950/20 border-2 border-rose-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-rose-400">
                ❌ Fake Rizz (The NPC Way)
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                Flops 99% of Time
              </span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              Using scripted lines from TikTok, acting cold/aloof to look "mysterious," trying to look untouchable, or flexing status, grades, and clothes.
            </p>
            <div className="text-xs text-rose-300/90 font-medium pt-2 border-t border-rose-900/40">
              <strong>Why it gives uncanny valley:</strong> Status-flexing and emotional detachment trigger low-grade threat alerts in their <em>anterior cingulate cortex</em>. It screams insecurity and makes others feel guarded around you.
            </div>
          </div>

          {/* Real Aura */}
          <div className="p-6 rounded-2xl bg-emerald-950/20 border-2 border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                ⚡ Real Charm (The Aura Law)
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                Pure Magnetic Aura
              </span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              Giving someone your 100% undivided attention, laughing with genuine warmth, dropping micro-relatability, and making <em>them</em> feel funny, interesting, and safe.
            </p>
            <div className="text-xs text-emerald-300/90 font-medium pt-2 border-t border-emerald-900/40">
              <strong>Why it hits like magic:</strong> People don't remember how "cool" you were; they remember how good and validated they felt around you. It releases a rush of <strong>oxytocin</strong> and <strong>dopamine</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* How Charm Works In The Brain (3 Neuro Pillars) */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-cyan-400 block">
            Neuroscience Breakdown
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
            <Brain className="w-6 h-6 text-cyan-400" />
            <span>How Charm Actually Works Inside Their Skull</span>
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            Charisma isn't an inborn trait; it's a series of micro-signals your nervous system sends to theirs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="rounded-3xl bg-slate-900/90 border border-pink-500/30 p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30">
              <Heart className="w-6 h-6 fill-pink-400" />
            </div>
            <h3 className="text-xl font-black text-white">
              1. The Mirror Neuron Vibe Sync
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Humans have specialized brain cells called <strong>mirror neurons</strong> that subconsciously mimic the physical tension of whoever they are talking to. If your jaw is clenched and you’re overthinking, they feel tense too. If your shoulders are dropped and your eyelids are soft, their body mirrors safety.
            </p>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="font-bold text-pink-400 block">The Neuro Play:</span>
              Before speaking, exhale slowly and drop your shoulders 2 inches. You literally dictate the room's temperature.
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-3xl bg-slate-900/90 border border-purple-500/30 p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white">
              2. Radical Undivided Presence
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              In a world where everyone is holding their phone like a shield and glancing away every 8 seconds, looking someone in the eye and listening without checking notifications is practically hypnotic. It signals directly to their limbic system: <em>"You matter more than my screen."</em>
            </p>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="font-bold text-purple-400 block">The Neuro Play:</span>
              Flip your phone face-down or leave it in your pocket. Perceived charisma instantly multiplies by 300%.
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white">
              3. The 70/30 Main Character Rule
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Neuroimaging at Harvard proved that talking about yourself activates the same brain reward centers as eating dessert or winning money. Truly charming people don't dominate the airwaves—they ask curious follow-up questions and let the other person speak 70% of the time.
            </p>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="font-bold text-cyan-400 block">The Neuro Play:</span>
              Treat every person like they have a fascinating secret passion or funny story you haven't unlocked yet.
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Everyday Charm Plays */}
      <section className="rounded-3xl bg-slate-900/95 border border-purple-500/30 p-6 sm:p-10 space-y-6 shadow-xl">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-pink-400 block">
            Field Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            The 5 Everyday Charm Plays (How to Actually Use It on People)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Zero cringe pickup lines. These are five psychological moves you can execute in class, lunch, or the hallway today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {/* Move 1 */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                Play 1
              </span>
              <h3 className="text-base font-black text-white">The "Highlight Reel" Keyword Move</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Never panic about what to say next. When someone speaks, grab one specific keyword and ask about it.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 text-xs text-pink-200 border border-slate-800">
              <strong>Example:</strong> They say: "My weekend was hectic, my dog ate my sister's homework." ➔ <em>"Wait, did he actually eat it? Is the dog okay?!"</em>
            </div>
          </div>

          {/* Move 2 */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Play 2
              </span>
              <h3 className="text-base font-black text-white">The "Soft Triangle" Eye Gaze</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                How to hold magnetic eye contact with zero creepy staring: gently alternate looking between their left eye, right eye, and bridge of the nose.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 text-xs text-purple-200 border border-slate-800">
              <strong>Neuro Hack:</strong> Relax your upper eyelids. Soft eyes signal trust; wide open eyes signal predator/prey threat.
            </div>
          </div>

          {/* Move 3 */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Play 3
              </span>
              <h3 className="text-base font-black text-white">The "Micro-Relatability" Drop</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Drop a harmless, funny self-roast early on: "Not gonna lie, I stared at that math problem for 15 minutes and questioned my entire existence."
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 text-xs text-cyan-200 border border-slate-800">
              <strong>Why it works:</strong> Admitting a tiny imperfection instantly disarms their defenses and lets them be authentic around you.
            </div>
          </div>

          {/* Move 4 */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Play 4
              </span>
              <h3 className="text-base font-black text-white">The "Choice Compliment"</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Never compliment generic traits they can't control (like height or looks). Always compliment a <em>choice</em> they made.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 text-xs text-emerald-200 border border-slate-800">
              <strong>Example:</strong> "That hoodie color is clean," or "That sticker on your laptop is elite, where'd you get it?" Validates their taste!
            </div>
          </div>

          {/* Move 5 */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Play 5
              </span>
              <h3 className="text-base font-black text-white">The "Clean Exit" (Peak Energy Leave)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Never wait until a conversation runs out of gas and gets awkward. Wrap it up while you are both still smiling and laughing.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 text-xs text-amber-200 border border-slate-800">
              <strong>Example:</strong> "I gotta run to 4th period before the bell rings, but catch you later!" Leaves them anticipating the next convo.
            </div>
          </div>

          {/* Pro Tip */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-950/30 to-purple-950/30 border border-pink-500/40 space-y-2.5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-pink-500/30 text-pink-200 border border-pink-400/40">
                Golden Rule
              </span>
              <h3 className="text-base font-black text-white mt-1">The Name Recall Dopamine Hit</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Saying someone's name once naturally in conversation activates their brain's middle frontal cortex.
              </p>
            </div>
            <div className="text-xs text-pink-300 font-bold p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
              "See you tomorrow, Jordan" beats "See you later" every single time.
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Charm Play Simulator */}
      <section className="rounded-3xl bg-slate-900/95 border border-cyan-500/30 p-6 sm:p-10 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block">
              Interactive Playbook
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Charm Play Simulator: Pick Your Target Scenario
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Click a scenario below to see the exact words, body language cues, and neuroscience to execute.
            </p>
          </div>

          {/* Target Scenario Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            {GENZ_CHARM_PLAYS.map((play, idx) => (
              <button
                key={play.id}
                onClick={() => setActiveCharmPlayIdx(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCharmPlayIdx === idx
                    ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-sm scale-105'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {play.targetBadge}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Scenario Display */}
        {(() => {
          const currentPlay = GENZ_CHARM_PLAYS[activeCharmPlayIdx];
          return (
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-pink-400">
                    Target Scenario
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-white">
                    {currentPlay.target}
                  </h3>
                </div>
                <span className="text-xs px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 font-bold">
                  {currentPlay.targetBadge}
                </span>
              </div>

              {/* NPC vs Play Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-rose-950/20 border-2 border-rose-500/30 space-y-2">
                  <span className="text-xs font-black uppercase text-rose-400 block">
                    🛑 The NPC Blunder (What Most People Do)
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {currentPlay.npcTrap}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-950/20 border-2 border-emerald-500/30 space-y-2">
                  <span className="text-xs font-black uppercase text-emerald-400 block">
                    ⚡ The Charm Play: {currentPlay.charmPlayName}
                  </span>
                  <p className="text-sm sm:text-base text-emerald-200 font-bold leading-relaxed">
                    {currentPlay.script}
                  </p>
                </div>
              </div>

              {/* Under the hood neuroscience & body language */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                    🧠 Why This Hits Their Brain:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentPlay.neuroscience}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    🕺 Body Language & Micro-Cues:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentPlay.bodyLanguage}
                  </p>
                </div>
              </div>

              {/* Pro Tip */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent border-l-4 border-pink-500 text-xs sm:text-sm text-slate-200">
                <strong className="text-pink-300 font-bold">Charm Mindset Cheat Code: </strong>
                {currentPlay.charmTip}
              </div>
            </div>
          );
        })()}
      </section>
    </div>
  );
};
