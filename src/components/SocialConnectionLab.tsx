import React, { useState } from 'react';
import { 
  Brain,
  Heart, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Lightbulb, 
  Users, 
  Eye, 
  Compass, 
  Zap, 
  RefreshCw, 
  Award, 
  Unlock, 
  AlertTriangle, 
  Smile, 
  Flame, 
  Radio,
  HelpCircle,
  Check,
  RotateCcw,
  BatteryCharging,
  EyeOff,
  UserCheck
} from 'lucide-react';

interface Scenario {
  id: string;
  context: string;
  partnerSays: string;
  options: {
    type: 'freeze' | 'tryhard' | 'charming';
    text: string;
    reaction: string;
    neuroscience: string;
    score: string;
  }[];
}

const PRACTICE_SCENARIOS: Scenario[] = [
  {
    id: 'class-partner',
    context: 'The teacher assigns you to sit next to someone new. You both sit down, unpack your notebooks, and there is a 10-second dead silence.',
    partnerSays: '(Looks down at their binder, taps their pen nervously, sighs quietly)',
    options: [
      {
        type: 'freeze',
        text: 'Put in one earbud, stare intensely at your phone screen, and pretend you have an urgent text to read.',
        reaction: 'They assume you dislike them or think you are too cool to talk, so they shut down too.',
        neuroscience: 'Your amygdala opted for the "Invisible Turtle" defense. Their mirror neurons sensed your withdrawal as social rejection.',
        score: 'Safety Behavior (Increases Isolation)'
      },
      {
        type: 'tryhard',
        text: '"Yeah, I already finished this whole unit last summer because it’s honestly super easy for me."',
        reaction: 'They give a polite "Oh, cool..." and turn away, feeling subtly judged and defensive.',
        neuroscience: 'Status-flexing triggers low-grade threat in the other person’s dorsal anterior cingulate cortex. Competence without warmth breeds distrust.',
        score: 'Coolness Trap (Breeds Distance)'
      },
      {
        type: 'charming',
        text: '"Hey, I’m Alex. Between you and me, I am genuinely praying this teacher doesn’t give a pop quiz today."',
        reaction: 'A visible breath of relief, a soft laugh: "Seriously! I didn’t understand last night’s homework at all."',
        neuroscience: 'Vulnerability + shared reality releases an instant micro-dose of oxytocin. You lowered their social vigilance and made the space safe.',
        score: 'Authentic Charm (Instant Rapport)'
      }
    ]
  },
  {
    id: 'hallway-sticker',
    context: 'You notice someone in your hallway has a sticker on their water bottle of an anime or band you secretly love.',
    partnerSays: '(Standing by the water fountain waiting in line)',
    options: [
      {
        type: 'freeze',
        text: 'Stare at the sticker, hope they notice you looking, say nothing, and quickly look at your shoes when they glance up.',
        reaction: 'They notice a brief glance and wonder if something is weird on their face.',
        neuroscience: 'Unspoken attention without a warm facial cue is registered by the human brain as ambiguous surveillance.',
        score: 'Hesitation Trap'
      },
      {
        type: 'tryhard',
        text: '"Oh, you like that band? Their old underground EP before they got mainstream is the only good one."',
        reaction: 'They roll their eyes: "Okay gatekeeper..." and grab their water bottle.',
        neuroscience: 'Gatekeeping is an insecure hierarchy flex. It signals that you value feeling superior over connecting.',
        score: 'Gatekeeper Glitch'
      },
      {
        type: 'charming',
        text: '"Hey, sorry to interrupt—is that a Jujutsu Kaisen sticker? That arc is legendary."',
        reaction: 'Their eyes light up: "Yes! Almost nobody here knows it! Did you finish season two?"',
        neuroscience: 'The "Choice Compliment" validates someone’s taste and self-expression. Their nucleus accumbens lights up with dopamine.',
        score: 'Magnetic Curiosity (Friendship Door Opened)'
      }
    ]
  }
];

const LADDER_STEPS = [
  {
    level: 1,
    title: 'The "Micro-Nod" (Zero Pressure)',
    mission: 'When walking past a teacher, librarian, or quiet classmate, make 1 second of soft eye contact and give a slight upward or downward nod with a relaxed mouth.',
    whyItWorks: 'Proves to your amygdala that looking people in the eye won’t kill you. It registers you as friendly and approachable without requiring speech.',
    badgeColor: 'border-pink-500/40 text-pink-300 bg-pink-500/10'
  },
  {
    level: 2,
    title: 'The Objective Fact-Check',
    mission: 'Ask someone a simple, un-opinionated factual question: "Hey, do you know what time this period ends?" or "Do you have an extra pencil?"',
    whyItWorks: 'Low-stakes questions carry virtually 0% risk of rejection. Nobody will judge you for asking what page we are on.',
    badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10'
  },
  {
    level: 3,
    title: 'The Choice Compliment',
    mission: 'Compliment something they chose (their shoes, a sticker, phone case, jacket, drawing): "That hoodie color is awesome, where did you find it?"',
    whyItWorks: 'Complimenting a choice validates their identity. It sparks a conversation topic automatically.',
    badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10'
  },
  {
    level: 4,
    title: 'The Shared Observation / Common Enemy',
    mission: 'Comment on the immediate environment: "It is freezing in this classroom today," or "This lunch line is moving at 1 mile per week."',
    whyItWorks: 'Shared suffering or humor unites people faster than anything on Earth. You are team "us vs. the slow cafeteria line".',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10'
  },
  {
    level: 5,
    title: 'The Casual Micro-Invite',
    mission: 'Invite someone into low-commitment shared action: "I’m walking to the library to grab a book, want to walk over?"',
    whyItWorks: 'Side-by-side activities (walking, eating, playing) have less eye contact pressure than sitting face-to-face, making deep bonding effortless.',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10'
  }
];

// QUIZ DATA
interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: {
    text: string;
    style: 'observer' | 'chameleon' | 'overthinker' | 'soloist';
  }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'You walk into the cafeteria or a crowded event where you don’t know many people. What is your immediate physical reflex?',
    context: 'Notice your unconscious bodily reaction:',
    options: [
      { text: 'Pull out my phone or put in earbuds immediately so I look occupied and nobody talks to me.', style: 'observer' },
      { text: 'Scan for a friendly group, put on a big smile, and instantly match whatever mood they have.', style: 'chameleon' },
      { text: 'Heart hammers in my chest, and I start mentally rehearsing what to say if someone speaks to me.', style: 'overthinker' },
      { text: 'Look for a quiet, low-noise corner or scan for the 1 person I know; big crowds drain me fast.', style: 'soloist' }
    ]
  },
  {
    id: 2,
    question: 'Someone in a group expresses an opinion you completely disagree with (e.g. hating your favorite game, artist, or movie). How do you react?',
    context: 'How do you handle social conflict or difference?',
    options: [
      { text: 'Stay completely silent and look at the floor. It’s not worth drawing attention to myself.', style: 'observer' },
      { text: 'Nod along or laugh politely: "Yeah, totally, haha, I can see why you’d think that!"', style: 'chameleon' },
      { text: 'Blurt out an intense debate or sarcastic remark, then spend the next hour regretting how it sounded.', style: 'overthinker' },
      { text: 'Shrug mildly and say nothing; I don’t care to waste precious energy arguing with people I barely know.', style: 'soloist' }
    ]
  },
  {
    id: 3,
    question: 'After a full school day or group hangout, what does your mind do the moment you finally get home?',
    context: 'Your post-social mental recovery state:',
    options: [
      { text: 'Relieved to be in my safe room, but feeling a bit lonely and wishing I knew how to easily connect.', style: 'observer' },
      { text: 'Physically and emotionally wiped out from spending all day making sure everyone else was happy.', style: 'chameleon' },
      { text: 'Lying in bed replaying every single interaction in 4K: "Why did I say that? Did they think I was weird?"', style: 'overthinker' },
      { text: 'Social battery is at 0%. I need absolute silence, a closed door, and solo hobbies to reboot.', style: 'soloist' }
    ]
  },
  {
    id: 4,
    question: 'When you want to start a conversation with someone new, what is your biggest internal obstacle?',
    context: 'The main fear holding you back:',
    options: [
      { text: 'Fear that I am bothering them or that they already have their friends and don’t want me around.', style: 'observer' },
      { text: 'Fear that if they see the real, unedited me, they won’t like me as much as the agreeable version.', style: 'chameleon' },
      { text: 'Terror of awkward silence or accidentally saying something stupid that ruins my reputation.', style: 'overthinker' },
      { text: 'Small talk feels shallow and artificial; I don’t know how to skip straight to real, deep connection.', style: 'soloist' }
    ]
  },
  {
    id: 5,
    question: 'What does your ideal Friday night look like?',
    context: 'Your authentic comfort zone:',
    options: [
      { text: 'Having one solid friend invite me over so I don’t have to figure out a big scary group dynamic.', style: 'observer' },
      { text: 'Being in a lively group where everyone is getting along with zero awkward tension or drama.', style: 'chameleon' },
      { text: 'An exciting hangout where I feel funny, confident, on-point, and everyone is genuinely laughing with me.', style: 'overthinker' },
      { text: 'Chilling with 1 or 2 close best friends playing video games or watching movies, or recharging solo.', style: 'soloist' }
    ]
  }
];

interface SocialStyleProfile {
  id: 'observer' | 'chameleon' | 'overthinker' | 'soloist';
  name: string;
  tagline: string;
  color: string;
  badgeStyle: string;
  borderStyle: string;
  description: string;
  superpower: string;
  anxietyBlindspot: string;
  brainBiology: string;
  actionSteps: { title: string; desc: string }[];
  charmCheatCode: string;
}

const SOCIAL_STYLES: Record<string, SocialStyleProfile> = {
  observer: {
    id: 'observer',
    name: 'The Invisible Observer',
    tagline: 'The Perimeter Guardian • Hyper-Observant & Deeply Empathetic',
    color: '#06B6D4', // Cyan
    badgeStyle: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
    borderStyle: 'border-cyan-500/40',
    description: 'You tend to freeze and observe social scenes from the perimeter. You rely on "safety armor" like your phone, hoodie, or earbuds to avoid looking awkward. You genuinely want close friends, but stepping into the spotlight feels like stepping into a lion’s den.',
    superpower: 'Elite Situational Radar. Because you aren’t talking constantly, you notice micro-expressions, who is feeling left out, and group dynamics 10x faster than anyone else.',
    anxietyBlindspot: 'The Safety Behavior Trap. Your phone and earbuds protect you from immediate anxiety, but they accidentally signal to others: "Do not approach me, I want to be left alone."',
    brainBiology: 'Dorsal Vagal Freeze. Your nervous system defaults to the freeze-and-blend-in response when threat detection spikes in unfamiliar groups.',
    actionSteps: [
      { title: 'The "One Earbud" Rule', desc: 'In hallways or during study periods, keep one earbud out. It breaks your barrier and signals approachability without you having to speak.' },
      { title: 'Find the Other Soloist', desc: 'Scan the room for the one person who looks just as quiet as you. Give them a gentle micro-nod or sit nearby. You both want connection.' },
      { title: 'Objective Fact-Checking', desc: 'Ask low-stakes factual questions ("What page did the teacher say?" or "What time does 4th period end?"). Rejection probability is literally zero.' }
    ],
    charmCheatCode: 'The "Validation Hero": Since you notice everything, drop a quiet observational compliment: "Hey, that drawing on your binder is incredible." It takes 3 seconds and opens a lifelong door.'
  },
  chameleon: {
    id: 'chameleon',
    name: 'The People-Pleasing Chameleon',
    tagline: 'The Harmonizer • Warm, Empathetic & Secretly Exhausted',
    color: '#EC4899', // Pink
    badgeStyle: 'bg-pink-500/20 text-pink-300 border-pink-400/40',
    borderStyle: 'border-pink-500/40',
    description: 'You are warm, well-liked, and friendly, but you constantly mold your opinions, music, and laughter to match whoever is in front of you. You fear awkward silences or disagreements, so you say yes to everyone and go home feeling hollow and socially drained.',
    superpower: 'High-Definition Emotional Empathy. You make people feel instantly accepted, safe, and comfortable. People naturally open up to you.',
    anxietyBlindspot: 'Fear of Authentic Visibility. You subconsciously believe that if people see your real opinions, weird hobbies, or boundaries, they will stop liking you.',
    brainBiology: 'Hyperactive Dorsal Anterior Cingulate (dACC). Your social pain radar is so sensitive that even mild disagreement feels like impending tribal banishment.',
    actionSteps: [
      { title: 'The Playful Micro-Disagreement', desc: 'Practice stating mild differing opinions: "Actually, I kind of love that movie!" Disagreement shows you have a real backbone, which people respect.' },
      { title: 'The 3-Second Favor Buffer', desc: 'When someone asks you to do something you dread, pause for 3 seconds: "Let me check if I have time today." Stop instant reflexive yes-saying.' },
      { title: 'The Energy Audit', desc: 'Ask yourself after hanging out: "Did I actually enjoy being with them, or was I just performing to make sure they liked me?"' }
    ],
    charmCheatCode: 'The "Genuine Passion Drop": Talk for 60 seconds about something you genuinely love, even if it’s quirky. People fall in love with authenticity, not agreeable echoes.'
  },
  overthinker: {
    id: 'overthinker',
    name: 'The Performance Overthinker',
    tagline: 'The Stage Manager • Witty, Passionate & Trapped in Post-Mortem Loops',
    color: '#8B5CF6', // Purple
    badgeStyle: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
    borderStyle: 'border-purple-500/40',
    description: 'You treat everyday conversations like a Broadway audition. You pre-plan 4 different scripts before speaking, sometimes blurt things out quickly or tell self-deprecating jokes to beat others to the punch, and then lie awake in bed replaying every syllable for 3 days.',
    superpower: 'Quick Wit & Electric Storytelling. When you feel safe and unjudged, you are hysterically funny, passionate, and bring magnetic energy to conversations.',
    anxietyBlindspot: 'Hyper-Self-Monitoring. While speaking, 80% of your brain is floating above your head grading your own performance: "Did my voice sound weird? Am I talking too fast?"',
    brainBiology: 'Prefrontal Cortical Hijack. Your executive brain is running endless future-simulations and past-regret loops, starving your working memory in real-time.',
    actionSteps: [
      { title: 'The Spotlight Inversion', desc: 'Turn your mental camera 180 degrees outward. Focus on the other person’s eyebrows, eyes, and tone. How are they feeling? Are they nervous too?' },
      { title: 'Befriend the 2-Second Pause', desc: 'When conversation pauses, don’t panic and blurt out an overshare. Take a slow breath. Pauses make you look confident and thoughtful.' },
      { title: 'The Bedtime Theater Curfew', desc: 'When your brain starts replaying 3rd period at midnight, whisper: "The show closed at 3 PM. The theater is dark until tomorrow."' }
    ],
    charmCheatCode: 'The "Highlight Word" Technique: Instead of planning what to say next while they talk, pick one interesting word they just said and ask about it. It forces you into the present moment.'
  },
  soloist: {
    id: 'soloist',
    name: 'The Low-Battery Soloist',
    tagline: 'The Deep-Water Diver • Loyal, Genuine & Anti-Small-Talk',
    color: '#10B981', // Emerald
    badgeStyle: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
    borderStyle: 'border-emerald-500/40',
    description: 'You despise fake small talk, loud cafeteria cliques, and chaotic parties. You thrive in meaningful 1-on-1 conversations about video games, creative passions, or deep topics. But in big groups, your social battery drains in 45 minutes, and you go completely silent.',
    superpower: 'Ride-or-Die Loyalty & Authentic Depth. You don’t collect 100 fake acquaintances; you build 2 or 3 unbreakable, lifelong friendships that truly matter.',
    anxietyBlindspot: 'Social Battery Guilt. You feel broken or defective for getting tired around people, or you withdraw completely because group dynamics feel overwhelming.',
    brainBiology: 'Dopamine Introversion Sensitivity. High-stimulus environments (noise, multiple voices, forced eye contact) quickly overload your sensory processing circuits.',
    actionSteps: [
      { title: 'Side-by-Side Hangouts', desc: 'Avoid face-to-face dinner or loud parties. Invite someone to game online, study at a library, or walk. Side-by-side connection has 80% less pressure.' },
      { title: 'The "Honest Battery" Script', desc: 'Tell friends without shame: "I’m super introverted today, so if I’m quiet, my battery is just at 5%—it’s nothing to do with you!"' },
      { title: 'The Clean Exit Strategy', desc: 'Give yourself permission to leave events after 1 hour. A good 45 minutes beats staying 3 hours and ending up completely resentful and drained.' }
    ],
    charmCheatCode: 'The "Deep Cut" Question: Skip "How are you?" and ask: "What has been the most interesting rabbit hole you went down on YouTube lately?" It bypasses boring small talk instantly.'
  }
};

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

export const SocialConnectionLab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'quiz' | 'charm' | 'conversation' | 'anxiety'>('quiz');
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [chosenOptionIdx, setChosenOptionIdx] = useState<number | null>(null);
  const [activeCharmPlayIdx, setActiveCharmPlayIdx] = useState(0);

  // Quiz State
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, 'observer' | 'chameleon' | 'overthinker' | 'soloist'>>({});
  const [quizResult, setQuizResult] = useState<SocialStyleProfile | null>(null);
  const [inspectingStyleId, setInspectingStyleId] = useState<string | null>(null);

  // FORD Generator state
  const [fordCategory, setFordCategory] = useState<'F' | 'O' | 'R' | 'D'>('F');

  const FORD_PROMPTS = {
    F: [
      '"Do you have any pets? (If yes) Dog or cat? What are they like?"',
      '"Are you close with your siblings or are they completely unhinged?"',
      '"Did your family do anything fun over the weekend or just relax?"'
    ],
    O: [
      '"Who do you have for history / English? How is their homework load?"',
      '"What class are you dreading the most this semester?"',
      '"If you could delete one subject from the school curriculum forever, which one?"'
    ],
    R: [
      '"What music have you been playing on repeat lately?"',
      '"Are you watching anything good on Netflix / YouTube right now?"',
      '"What do you usually do when you finally get home from school and collapse?"'
    ],
    D: [
      '"If you had a free weekend and unlimited money, where would you go?"',
      '"Are you planning to go to the football game / dance this Friday?"',
      '"If you could fast-forward to any age, what age would you pick?"'
    ]
  };

  const handleSelectQuizOption = (style: 'observer' | 'chameleon' | 'overthinker' | 'soloist') => {
    const updated = { ...quizAnswers, [currentQuizQuestion]: style };
    setQuizAnswers(updated);

    if (currentQuizQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      // Calculate winner
      const counts: Record<string, number> = { observer: 0, chameleon: 0, overthinker: 0, soloist: 0 };
      Object.values(updated).forEach(s => {
        counts[s] = (counts[s] || 0) + 1;
      });

      let winner = 'observer';
      let maxCount = -1;
      Object.entries(counts).forEach(([k, count]) => {
        if (count > maxCount) {
          maxCount = count;
          winner = k;
        }
      });

      setQuizResult(SOCIAL_STYLES[winner] || SOCIAL_STYLES.observer);
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setCurrentQuizQuestion(0);
    setQuizResult(null);
    setInspectingStyleId(null);
  };

  const currentScenario = PRACTICE_SCENARIOS[activeScenarioIdx];

  return (
    <div className="space-y-12">
      {/* Empathetic Header Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/80 to-purple-950/70 border border-purple-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="absolute top-0 right-10 -mt-16 w-80 h-80 rounded-full bg-gradient-to-br from-pink-500/25 to-purple-600/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 -mb-16 w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-400/25 to-emerald-500/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-pink-400/40 text-pink-200 text-xs sm:text-sm font-bold shadow-sm">
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
            <span>Connection, Empathy & Real Charisma</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            How to Connect, Speak With Confidence, and{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-300 via-amber-300 to-cyan-300 bg-clip-text text-transparent">
              Break Free From Isolation
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            If you’ve ever eaten lunch feeling invisible, kept your earbuds in so nobody would talk to you, 
            or spent hours overthinking how to say a simple hello—you are not alone. 
            Real charm isn’t about being loud or popular; it’s a learned neuroscience skill of making others feel safe.
          </p>

          {/* Sub-navigation buttons */}
          <div className="pt-2 flex flex-wrap justify-center gap-2 text-xs sm:text-sm font-extrabold">
            <button
              onClick={() => setActiveSubTab('quiz')}
              className={`px-5 py-2.5 rounded-2xl transition-all shadow-sm flex items-center gap-2 ${
                activeSubTab === 'quiz'
                  ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white shadow-pink-500/25 scale-105 ring-2 ring-pink-400/30'
                  : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Social Style Quiz (Discover Yours)</span>
            </button>

            <button
              onClick={() => setActiveSubTab('charm')}
              className={`px-5 py-2.5 rounded-2xl transition-all shadow-sm flex items-center gap-2 ${
                activeSubTab === 'charm'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-pink-500/25 scale-105 ring-2 ring-pink-400/30'
                  : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Gen Z Charm & Rizz Playbook</span>
            </button>

            <button
              onClick={() => setActiveSubTab('conversation')}
              className={`px-5 py-2.5 rounded-2xl transition-all shadow-sm flex items-center gap-2 ${
                activeSubTab === 'conversation'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-purple-500/25 scale-105'
                  : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-cyan-300" />
              <span>Talk to Anyone</span>
            </button>

            <button
              onClick={() => setActiveSubTab('anxiety')}
              className={`px-5 py-2.5 rounded-2xl transition-all shadow-sm flex items-center gap-2 ${
                activeSubTab === 'anxiety'
                  ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Micro-Courage Ladder</span>
            </button>
          </div>
        </div>
      </section>

      {/* SUB-TAB: SOCIAL STYLE QUIZ */}
      {activeSubTab === 'quiz' && (
        <section className="space-y-8">
          {!quizResult ? (
            /* Quiz Active Questions */
            <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900/95 border border-purple-500/30 p-6 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>The Social Style Diagnostic</span>
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                  Question {currentQuizQuestion + 1} of {QUIZ_QUESTIONS.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition-all duration-300"
                  style={{ width: `${((currentQuizQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Header */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {QUIZ_QUESTIONS[currentQuizQuestion].context}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {QUIZ_QUESTIONS[currentQuizQuestion].question}
                </h3>
              </div>

              {/* 4 Choices */}
              <div className="space-y-3 pt-2">
                {QUIZ_QUESTIONS[currentQuizQuestion].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectQuizOption(opt.style)}
                    className="w-full p-4 sm:p-5 rounded-2xl bg-slate-950/70 hover:bg-slate-800/90 border border-slate-800 hover:border-pink-500/50 text-left transition-all flex items-start gap-4 group shadow-sm hover:scale-[1.01]"
                  >
                    <div className="w-7 h-7 rounded-xl bg-slate-900 group-hover:bg-pink-500 text-slate-400 group-hover:text-white flex items-center justify-center font-bold text-xs shrink-0 transition-colors border border-slate-700">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 group-hover:text-white font-medium leading-relaxed">
                      {opt.text}
                    </p>
                  </button>
                ))}
              </div>

              {/* Back button if past question 0 */}
              {currentQuizQuestion > 0 && (
                <div className="pt-2 flex justify-start">
                  <button
                    onClick={() => setCurrentQuizQuestion(currentQuizQuestion - 1)}
                    className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 font-semibold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Previous Question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Result Card */
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              {/* Main Result Dossier */}
              <div className="rounded-3xl bg-slate-900/95 border-2 overflow-hidden shadow-2xl" style={{ borderColor: quizResult.color }}>
                {/* Header Banner */}
                <div 
                  className="p-6 sm:p-10 border-b border-slate-800 relative"
                  style={{
                    background: `linear-gradient(135deg, ${quizResult.color}30 0%, rgba(15, 23, 42, 0.95) 100%)`
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span 
                      className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm"
                      style={{ 
                        backgroundColor: `${quizResult.color}25`, 
                        color: quizResult.color,
                        border: `1.5px solid ${quizResult.color}`
                      }}
                    >
                      Your Social Archetype
                    </span>
                    <button
                      onClick={handleResetQuiz}
                      className="text-xs text-slate-300 hover:text-white bg-slate-950/80 px-3.5 py-1.5 rounded-full border border-slate-700 flex items-center gap-1.5 transition-colors font-bold"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
                    </button>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                    {quizResult.name}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-slate-200 mt-2">
                    {quizResult.tagline}
                  </p>
                </div>

                {/* Content Sections */}
                <div className="p-6 sm:p-10 space-y-8">
                  {/* The Reality */}
                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-pink-400 block">
                      Your Natural Interaction Pattern
                    </span>
                    <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
                      {quizResult.description}
                    </p>
                  </div>

                  {/* Superpower vs Blindspot Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-5 rounded-2xl bg-emerald-950/30 border-2 border-emerald-500/40 space-y-2 shadow-sm">
                      <div className="flex items-center gap-2 text-emerald-300 font-extrabold text-xs uppercase tracking-wider">
                        <Award className="w-4 h-4 text-emerald-400" />
                        Your Secret Superpower
                      </div>
                      <p className="text-sm text-slate-100 leading-relaxed font-medium">
                        {quizResult.superpower}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-rose-950/30 border-2 border-rose-500/40 space-y-2 shadow-sm">
                      <div className="flex items-center gap-2 text-rose-300 font-extrabold text-xs uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4 text-rose-400" />
                        Your Anxiety Blindspot
                      </div>
                      <p className="text-sm text-slate-100 leading-relaxed font-medium">
                        {quizResult.anxietyBlindspot}
                      </p>
                    </div>
                  </div>

                  {/* Why it happens in your brain */}
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <span className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      What's Happening in Your Nervous System:
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {quizResult.brainBiology}
                    </p>
                  </div>

                  {/* 3 Personalized Action Steps */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-300 font-black text-sm uppercase tracking-wide">
                      <ShieldCheck className="w-4 h-4 text-amber-300" />
                      <span>Your 3 Custom Anxiety-Reduction Action Steps</span>
                    </div>

                    <div className="space-y-3">
                      {quizResult.actionSteps.map((step, idx) => (
                        <div 
                          key={idx}
                          className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3.5 shadow-sm"
                        >
                          <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center text-xs font-black shrink-0 border border-amber-400/30 mt-0.5">
                            {idx + 1}
                          </div>
                          <div>
                            <h5 className="font-extrabold text-sm text-white">{step.title}</h5>
                            <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Personalized Charm Cheat Code */}
                  <div className="rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border-2 border-pink-400/40 p-5 sm:p-6 space-y-2 shadow-lg">
                    <span className="text-xs font-black uppercase tracking-wider text-pink-300 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      Your Custom Charm Cheat Code
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                      {quizResult.charmCheatCode}
                    </p>
                  </div>
                </div>
              </div>

              {/* View Other Profiles Explorer */}
              <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-4">
                <h4 className="text-lg font-black text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>Explore the Other 3 Social Styles (Understand Your Friends)</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {Object.values(SOCIAL_STYLES)
                    .filter(s => s.id !== quizResult.id)
                    .map(other => (
                      <button
                        key={other.id}
                        onClick={() => setQuizResult(other)}
                        className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-left transition-all hover:scale-[1.02] space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: other.color }} />
                          <span className="text-xs font-extrabold text-white">{other.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-2">{other.tagline}</p>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* TAB 1: GEN Z CHARM & RIZZ PLAYBOOK */}
      {activeSubTab === 'charm' && (
        <section className="space-y-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>The Neuroscience of Unspoken Aura</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              The Gen Z Charm & Unspoken Rizz Playbook
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Forget the cringe pickup lines, fake mystery, and rehearsed TikTok rizz. 
              Real charm is an evidence-based superpower: <strong className="text-pink-300">making the other person feel like the main character</strong> so their brain floods with dopamine whenever you're around.
            </p>
          </div>

          {/* Rizz Reality Check: Fake Rizz vs Real Aura */}
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
            <h4 className="text-xl font-black text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>The Rizz Reality Check: Fake Rizz vs. Real Unspoken Charm</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-400">
                    ❌ Fake Rizz (The NPC Way)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">Flops 99% of Time</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200">
                  Using cheesy scripted lines, acting detached or "mysterious," trying to look untouchable, or flexing your grades, money, or follower count.
                </p>
                <div className="text-xs text-rose-300/90 font-medium pt-1 border-t border-rose-900/30">
                  <strong>Why it gives uncanny valley:</strong> Status-flexing and emotional coldness trigger low-grade threat in their <em>anterior cingulate cortex</em>. It screams insecurity and makes people feel guarded around you.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                    ⚡ Real Charm (The Aura Law)
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Pure Magnetic Aura</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200">
                  Giving someone your 100% undivided attention, laughing with genuine warmth, dropping micro-relatability, and making <em>them</em> feel witty, seen, and valued.
                </p>
                <div className="text-xs text-emerald-300/90 font-medium pt-1 border-t border-emerald-900/30">
                  <strong>Why it hits like magic:</strong> Harvard developmental research proves people don't remember how "impressive" you were; they remember how safe and good they felt around you. It releases a flood of <strong>oxytocin</strong> and <strong>dopamine</strong>.
                </div>
              </div>
            </div>
          </div>

          {/* How Charm Works In The Brain (3 Neuro Pillars) */}
          <div className="space-y-4">
            <h4 className="text-xl font-black text-white flex items-center gap-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span>How Charm Actually Works Inside Their Skull</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="rounded-3xl bg-slate-900/90 border border-pink-500/30 p-6 space-y-3.5 shadow-xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30">
                  <Heart className="w-6 h-6 fill-pink-400" />
                </div>
                <h5 className="text-lg font-black text-white">
                  1. The Mirror Neuron Vibe Sync
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Humans have specialized brain cells called <strong>mirror neurons</strong> that subconsciously mimic the physical state of the person they are talking to. If your jaw is clenched and you’re overthinking, they feel anxious too. If your shoulders are dropped and your eyelids are soft, their body mirrors safety.
                </p>
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-0.5">
                  <span className="font-bold text-pink-400 block">The Neuro Play:</span>
                  Before speaking, exhale slowly and drop your shoulders 2 inches. You set the room's temperature.
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-3xl bg-slate-900/90 border border-purple-500/30 p-6 space-y-3.5 shadow-xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                  <Eye className="w-6 h-6" />
                </div>
                <h5 className="text-lg font-black text-white">
                  2. Radical Undivided Presence
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  In a world where everyone is holding their phone like a shield and glancing away every 8 seconds, looking someone in the eye and listening without checking notifications is practically a superpower. It tells their limbic system: <em>"You matter more than my screen."</em>
                </p>
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-0.5">
                  <span className="font-bold text-purple-400 block">The Neuro Play:</span>
                  Flip your phone face-down or leave it in your pocket. Perceived charisma instantly multiplies by 300%.
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-6 space-y-3.5 shadow-xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <Compass className="w-6 h-6" />
                </div>
                <h5 className="text-lg font-black text-white">
                  3. The 70/30 Main Character Rule
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Neuroimaging at Harvard proved that talking about yourself activates the same brain pleasure centers as eating chocolate or winning money. Charming people don't dominate the airwaves—they ask curious follow-up questions and let the other person speak 70% of the time.
                </p>
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-0.5">
                  <span className="font-bold text-cyan-400 block">The Neuro Play:</span>
                  Treat every person like they have a secret passion or story you haven't unlocked yet.
                </div>
              </div>
            </div>
          </div>

          {/* The 5 Everyday Charm Plays (How to Use It On People) */}
          <div className="rounded-3xl bg-slate-900/95 border border-purple-500/30 p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-pink-400 block">
                Field Guide
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                The 5 Everyday Charm Plays (How to Actually Use It on People)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Zero pickup lines. These are psychological cheat codes you can execute in class, lunch, or the hallway today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
              {/* Move 1 */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  Play 1
                </span>
                <h5 className="text-sm font-black text-white">The "Highlight Reel" Keyword Move</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Never panic about what to say next. When someone speaks, grab one specific keyword and ask about it.
                </p>
                <div className="p-2.5 rounded-xl bg-slate-900 text-[11px] text-pink-200 border border-slate-800">
                  <strong>Example:</strong> They say: "My weekend was hectic, my dog ate my sister's homework." ➔ <em>"Wait, did he actually eat it? Is the dog okay?!"</em>
                </div>
              </div>

              {/* Move 2 */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Play 2
                </span>
                <h5 className="text-sm font-black text-white">The "Soft Triangle" Eye Gaze</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  How to hold magnetic eye contact with zero creepy staring: gently alternate looking between their left eye, right eye, and bridge of the nose.
                </p>
                <div className="p-2.5 rounded-xl bg-slate-900 text-[11px] text-purple-200 border border-slate-800">
                  <strong>Neuro Hack:</strong> Relax your upper eyelids. Soft eyes signal trust; wide open eyes signal predator/prey threat.
                </div>
              </div>

              {/* Move 3 */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Play 3
                </span>
                <h5 className="text-sm font-black text-white">The "Micro-Relatability" Drop</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Drop a harmless, funny self-roast early on: "Not gonna lie, I stared at that math problem for 15 minutes and questioned my entire existence."
                </p>
                <div className="p-2.5 rounded-xl bg-slate-900 text-[11px] text-cyan-200 border border-slate-800">
                  <strong>Why it works:</strong> Admitting a tiny imperfection instantly disarms their defenses and lets them be authentic around you.
                </div>
              </div>

              {/* Move 4 */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Play 4
                </span>
                <h5 className="text-sm font-black text-white">The "Choice Compliment"</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Never compliment generic traits they can't control (like height or looks). Always compliment a <em>choice</em> they made.
                </p>
                <div className="p-2.5 rounded-xl bg-slate-900 text-[11px] text-emerald-200 border border-slate-800">
                  <strong>Example:</strong> "That hoodie color is clean," or "That sticker on your laptop is elite, where'd you get it?" Validates their taste!
                </div>
              </div>

              {/* Move 5 */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Play 5
                </span>
                <h5 className="text-sm font-black text-white">The "Clean Exit" (Peak Energy Leave)</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Never wait until a conversation runs out of gas and gets awkward. Wrap it up while you are both still smiling and laughing.
                </p>
                <div className="p-2.5 rounded-xl bg-slate-900 text-[11px] text-amber-200 border border-slate-800">
                  <strong>Example:</strong> "I gotta run to 4th period before the bell rings, but catch you later!" Leaves them anticipating the next convo.
                </div>
              </div>

              {/* Pro Tip */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-950/30 to-purple-950/30 border border-pink-500/40 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-pink-500/30 text-pink-200 border border-pink-400/40">
                    Golden Rule
                  </span>
                  <h5 className="text-sm font-black text-white mt-1">The Name Recall Dopamine Hit</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Saying someone's name once naturally in conversation activates their brain's middle frontal cortex.
                  </p>
                </div>
                <div className="text-[11px] text-pink-300 font-bold">
                  "See you tomorrow, Jordan" beats "See you later" every single time.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Charm Play Simulator */}
          <div className="rounded-3xl bg-slate-900/95 border border-cyan-500/30 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block">
                  Interactive Playbook
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  Charm Play Simulator: Pick Your Target Scenario
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  See the exact words, body language cues, and neuroscience behind each situation.
                </p>
              </div>

              {/* Target Scenario Pills */}
              <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                {GENZ_CHARM_PLAYS.map((play, idx) => (
                  <button
                    key={play.id}
                    onClick={() => setActiveCharmPlayIdx(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
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
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-pink-400">
                        Target Scenario
                      </span>
                      <h5 className="text-lg sm:text-xl font-black text-white">
                        {currentPlay.target}
                      </h5>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 font-bold">
                      {currentPlay.targetBadge}
                    </span>
                  </div>

                  {/* NPC vs Play Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1.5">
                      <span className="text-xs font-black uppercase text-rose-400 block">
                        🛑 The NPC Blunder (What Most People Do)
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200">
                        {currentPlay.npcTrap}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                      <span className="text-xs font-black uppercase text-emerald-400 block">
                        ⚡ The Charm Play: {currentPlay.charmPlayName}
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-200 font-bold">
                        {currentPlay.script}
                      </p>
                    </div>
                  </div>

                  {/* Under the hood neuroscience & body language */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                        🧠 Why This Hits Their Brain:
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {currentPlay.neuroscience}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                        🕺 Body Language & Micro-Cues:
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {currentPlay.bodyLanguage}
                      </p>
                    </div>
                  </div>

                  {/* Pro Tip */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent border-l-4 border-pink-500 text-xs text-slate-200">
                    <strong className="text-pink-300 font-bold">Charm Mindset Cheat Code: </strong>
                    {currentPlay.charmTip}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* TAB 2: COMMUNICATION TOOLKIT */}
      {activeSubTab === 'conversation' && (
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              The Never-Run-Out-Of-Words Toolkit
            </h3>
            <p className="text-slate-300 text-sm">
              Social anxiety makes you freeze because your working memory gets overwhelmed. 
              Use these concrete conversational cheat codes to keep talks easy and organic.
            </p>
          </div>

          {/* Interactive FORD Generator */}
          <div className="rounded-3xl bg-slate-900/95 border border-purple-500/30 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-purple-400 block">
                  Psychologist Framework
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  The F.O.R.D. Question Generator
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Whenever conversation hits a lull, pick one of the 4 universal connection buckets.
                </p>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                {[
                  { key: 'F', label: 'Friends/Family' },
                  { key: 'O', label: 'Occupation/Classes' },
                  { key: 'R', label: 'Recreation/Hobbies' },
                  { key: 'D', label: 'Dreams/Plans' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setFordCategory(item.key as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      fordCategory === item.key
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.key} ({item.label.split('/')[0]})
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {FORD_PROMPTS[fordCategory].map((prompt, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm font-medium flex items-center gap-3 shadow-inner hover:border-purple-500/40 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-purple-400 shrink-0" />
                  <p>{prompt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Conversation Simulator */}
          <div className="rounded-3xl bg-slate-900/95 border border-cyan-500/30 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 block">
                  Interactive Practice Lab
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  Real-World Scenario Simulator
                </h4>
              </div>
              <div className="flex gap-2">
                {PRACTICE_SCENARIOS.map((scen, idx) => (
                  <button
                    key={scen.id}
                    onClick={() => {
                      setActiveScenarioIdx(idx);
                      setChosenOptionIdx(null);
                    }}
                    className={`px-3 py-1 rounded-xl text-xs font-bold border transition-all ${
                      activeScenarioIdx === idx
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Scenario {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Scenario Box */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                The Situation:
              </span>
              <p className="text-sm sm:text-base text-slate-100 font-medium">
                {currentScenario.context}
              </p>
              <div className="p-3 rounded-xl bg-slate-900 text-xs text-slate-300 italic border border-slate-800">
                Partner: {currentScenario.partnerSays}
              </div>
            </div>

            {/* 3 Choices */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                What do you do? (Click to test the psychological response):
              </span>

              <div className="grid grid-cols-1 gap-3">
                {currentScenario.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setChosenOptionIdx(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col gap-2 ${
                      chosenOptionIdx === idx
                        ? option.type === 'charming'
                          ? 'bg-emerald-950/30 border-emerald-500 ring-2 ring-emerald-500/30'
                          : option.type === 'tryhard'
                          ? 'bg-amber-950/30 border-amber-500 ring-2 ring-amber-500/30'
                          : 'bg-rose-950/30 border-rose-500 ring-2 ring-rose-500/30'
                        : 'bg-slate-950/60 hover:bg-slate-800 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Option {idx + 1}
                      </span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                        option.type === 'charming' ? 'bg-emerald-500/20 text-emerald-300' :
                        option.type === 'tryhard' ? 'bg-amber-500/20 text-amber-300' :
                        'bg-rose-500/20 text-rose-300'
                      }`}>
                        {option.score}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-white font-medium">
                      "{option.text}"
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback box */}
            {chosenOptionIdx !== null && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-slate-950 border border-purple-500/30 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-purple-300 font-extrabold text-sm uppercase">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span>The Brain Reaction:</span>
                </div>
                <p className="text-sm text-slate-100 font-medium">
                  {currentScenario.options[chosenOptionIdx].reaction}
                </p>
                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <strong className="text-cyan-400">Why this happens under the hood: </strong>
                  {currentScenario.options[chosenOptionIdx].neuroscience}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* TAB 3: DEFEATING SOCIAL ANXIETY & ISOLATION */}
      {activeSubTab === 'anxiety' && (
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              The Micro-Courage Ladder Out of Isolation
            </h3>
            <p className="text-slate-300 text-sm">
              Social confidence is not an innate gift—it is a neurological muscle. 
              You don’t have to jump from silent isolation to party extrovert. Take one microscopic step per day.
            </p>
          </div>

          {/* Ladder of Micro-Steps */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {LADDER_STEPS.map((step) => (
              <div
                key={step.level}
                className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-lg hover:border-slate-700 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg border shrink-0 ${step.badgeColor}`}>
                  L{step.level}
                </div>

                <div className="space-y-1.5 flex-1">
                  <h4 className="text-lg font-black text-white group-hover:text-pink-300 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-200 font-medium">
                    {step.mission}
                  </p>
                  <p className="text-xs text-slate-400 pt-1">
                    <strong className="text-emerald-400">Why it heals anxiety: </strong>
                    {step.whyItWorks}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* The Spotlight Inversion Reframe */}
          <div className="rounded-3xl bg-gradient-to-r from-pink-950/40 via-purple-950/40 to-cyan-950/40 border-2 border-pink-500/40 p-6 sm:p-8 space-y-4 max-w-3xl mx-auto shadow-xl">
            <div className="flex items-center gap-2.5 text-pink-400 font-black text-sm uppercase tracking-wide">
              <Zap className="w-5 h-5 text-amber-300" />
              <span>The "Spotlight Inversion" (The Greatest Mind Trick for Social Anxiety)</span>
            </div>

            <h4 className="text-xl sm:text-2xl font-black text-white">
              Stop Asking "Do They Like Me?" — Ask "How Are They Feeling?"
            </h4>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              When you feel social anxiety, 100% of your mental spotlight is shining inside your own head: 
              <em>"Am I being awkward? Is my face red? Do I look weird?"</em>
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-semibold">
              The life-changing cheat code: <span className="text-amber-300">Turn the spotlight outward</span>. 
              Look around the room and realize that almost everyone is carrying their own secret insecurity. 
              The moment your mission becomes <em>"Let me make this person feel comfortable and unjudged,"</em> your anxiety instantly vanishes. 
              You can't be intensely compassionate and socially anxious at the exact same moment.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};
