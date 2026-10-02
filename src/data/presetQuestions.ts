import { BrainExplanation, BrainRegion } from '../types';

export const BRAIN_REGIONS: BrainRegion[] = [
  {
    id: 'pfc',
    name: 'Prefrontal Cortex (PFC)',
    nickname: 'The CEO Still in Training',
    metaphor: 'A rookie manager who forgets their keycard, leaves early on Fridays, but is slowly building a Fortune 500 company.',
    status: 'Under Heavy Construction (Estimated completion: Age 25)',
    role: 'Long-term planning, impulse control, weighing future consequences, and regulating raw emotions.',
    teenSuperpower: 'Insane neuroplasticity—you can learn languages, instruments, code, or athletics faster than you ever will again.',
    teenGlitch: 'When emotions run high, the CEO gets locked out of the boardroom, letting impulsive thoughts take the microphone.',
    relatedBehaviors: [
      'Procrastinating until 11:59 PM',
      'Blurting out weird comments',
      'Spending money on things you regret 10 minutes later',
      'Overthinking tomorrow for 4 hours instead of sleeping'
    ],
    color: '#8B5CF6', // Purple
  },
  {
    id: 'amygdala',
    name: 'Amygdala & Limbic System',
    nickname: 'The Ferrari Gas Pedal',
    metaphor: 'A supercharged sports car with hyper-sensitive alarm sensors and bicycle-grade handbrakes.',
    status: 'Fully Operational & Running at 110% Overdrive',
    role: 'Detecting threats, firing instant fight-or-flight alarms, and amplifying emotional intensity.',
    teenSuperpower: 'High-definition empathy, boundless passion, legendary belly laughs, and unmatched hype for things you love.',
    teenGlitch: 'Treats an unread message or a teacher saying "Can I speak to you after class?" with the exact same panic as a charging grizzly bear.',
    relatedBehaviors: [
      'Sudden rage or tearful crashes over tiny things',
      'Heart racing when called on in class',
      'Getting defensive before someone even finishes talking',
      'Feeling feelings so deep they hurt physically'
    ],
    color: '#F43F5E', // Rose/Red
  },
  {
    id: 'dopamine',
    name: 'Nucleus Accumbens (Reward Hub)',
    nickname: 'The High-Voltage Slot Machine',
    metaphor: 'An adrenaline junkie holding a megaphone demanding novelty, drama, and dopamine RIGHT NOW.',
    status: 'Peak Sensitivity (Highest dopamine baseline swings of your lifespan)',
    role: 'Driving motivation, reward seeking, risk calculation, and feeling pleasure.',
    teenSuperpower: 'Courage to try wild new sports, start creative projects, reinvent your style, and make lifelong friends.',
    teenGlitch: 'Normal everyday stuff (like organizing your backpack or reading 3 pages of history) feels like dry oatmeal, while scrolling TikTok or gaming triggers fireworks.',
    relatedBehaviors: [
      'Doomscrolling until 2:30 AM',
      'Hyper-fixating on a new hobby for 5 days then abandoning it',
      'Doing something risky just because your friends are watching',
      'Craving sugar and snacks when bored'
    ],
    color: '#F59E0B', // Amber
  },
  {
    id: 'dacc',
    name: 'Dorsal Anterior Cingulate Cortex (dACC)',
    nickname: 'The Social Threat Radar',
    metaphor: 'A satellite dish pointed directly at your peer group, translating awkward silences into actual physical nerve ache.',
    status: 'Tuned to Maximum Gain',
    role: 'Monitoring social acceptance, rejection, and social standing in the group.',
    teenSuperpower: 'Master-level radar for group vibes, peer bonding, inside jokes, and micro-expressions.',
    teenGlitch: 'Shares the exact same neural circuitry as stubbing your toe or getting burned. Social pain literally hurts.',
    relatedBehaviors: [
      'The physical stomach-drop when left on Delivered',
      'Walking past a group of laughing teens and assuming it is about you',
      'Dressing exactly like everyone else so you blend into the background',
      'Fear of speaking up in front of peers'
    ],
    color: '#06B6D4', // Cyan
  },
  {
    id: 'pruning',
    name: 'Synaptic Pruning & Myelination',
    nickname: 'The Marie Kondo Neural Clean-Up Crew',
    metaphor: 'Rewiring gravel dirt roads into high-speed fiber-optic autobahns, while bulldozing paths you do not use.',
    status: 'Active Reno Phase (Peak brain remodeling)',
    role: 'Deleting surplus connections (pruning) and wrapping important brain highways in fatty insulation (myelin) for 100x speed.',
    teenSuperpower: 'Whatever you practice right now (music, gaming, empathy, coding, sports) gets permanently hardwired for adulthood.',
    teenGlitch: 'Can cause temporary mental "buffering wheels" and brain fog as old pathways vanish before the new ones finish paving.',
    relatedBehaviors: [
      'Walking into a room and instantly forgetting why you went in there',
      'Changing your aesthetic or identity 4 times in a single year',
      'Feeling like an entirely different person compared to 2 years ago',
      'Rapidly mastering complex video games or instruments'
    ],
    color: '#10B981', // Emerald
  },
  {
    id: 'circadian',
    name: 'Suprachiasmatic Nucleus (SCN)',
    nickname: 'The Night Owl Shift Clock',
    metaphor: 'A biological clock that was manually pushed forward by 2 full time zones without telling your school board.',
    status: 'Naturally Phase-Shifted by 2 to 3 Hours',
    role: 'Controlling melatonin release, core body temperature dips, and sleep-wake cycles.',
    teenSuperpower: 'Incredible burst of creative energy, late-night deep talks, and high alertness from 9 PM to midnight.',
    teenGlitch: 'Being forced to wake up at 6:30 AM for high school is the neurological equivalent of forcing an adult to wake up at 4:00 AM every single morning.',
    relatedBehaviors: [
      'Lying wide awake at 11 PM staring at the ceiling',
      'Feeling like a zombie through periods 1 and 2',
      'Getting an unexplained burst of energy right when you should sleep',
      'Sleeping until 1 PM on Saturday to recover sleep debt'
    ],
    color: '#6366F1', // Indigo
  },
];

export const PRESET_EXPLANATIONS: BrainExplanation[] = [
  {
    id: 'embarrassed-in-class',
    question: 'Why does getting embarrassed in class feel like the absolute end of the world?',
    category: 'social',
    title: 'The Hallway Spotlight: Why Spilling Water in 3rd Period Feels Literally Fatal',
    primaryBrainPart: 'dACC & Amygdala (The Social Pain & Threat Radar)',
    brainMetaphor: 'Your brain just treated a cracked voice like a pack of wolves kicking you out of the cave into a snowstorm.',
    relatableReality: `You drop your water bottle in a silent classroom, or your voice cracks while reading paragraph three out loud. Instantly, your face turns molten lava red, your chest tightens like a vice grip, and you have this overpowering urge to melt through the linoleum floor and cease existing. 

For the rest of the day—and quite possibly for the next three weeks at 2 AM—your brain replays that four-second clip in 4K resolution, convinced that everyone in third period has labeled you an irredeemable clown.

Here is the truth: you are not being overly dramatic. That gut-wrenching, world-ending sensation is an ancient biological tripwire firing at full blast.`,
    brainBiologyHack: `Under the hood, your brain is navigating three wild dynamics simultaneously:

• **The Shared Pain Pathway:** Neuroscientists discovered that social rejection and public embarrassment activate the exact same brain region—the **dorsal anterior cingulate cortex (dACC)**—that fires when you break a bone or step on a rusty nail. Your nervous system literally cannot tell the difference between physical damage and social humiliation.
• **The "Imaginary Audience" Effect:** In adolescent psychology, this is known as David Elkind's *Imaginary Audience*. Because your prefrontal cortex is still developing the ability to separate "what I am thinking about myself" from "what other people are thinking about me," your brain assumes the entire room is operating a stadium spotlight pointed directly at you.
• **Gas Pedal Without Brakes:** Your emotional alarm center (the **amygdala**) is fully mature and hyperactive, but the prefrontal cortex (the chill CEO that says *"Hey, in 10 minutes nobody will remember"*) is still under heavy construction. The emotional alarm rings at maximum volume with nobody home to shut off the siren.`,
    whyWeDoIt: `Why would nature equip you with such an excruciating reaction? Evolution.

For 99% of human history, humans lived in small hunter-gatherer bands of about 50 to 100 people. If you got banished or ostracized by your peer group on the savanna, **you died**. You could not hunt a woolly mammoth alone or defend yourself against predators in the dark. 

During your teen years, your biology is programmed to complete the ultimate transition: stepping away from your parents and anchoring yourself into a peer tribe. To ancestral survival instincts, peer disapproval wasn't just a bummer—it was a literal death sentence. Your brain treats a slip-up in class as a potential tribal expulsion threat.`,
    takeaway: `The people in that classroom weren't writing an encyclopedia entry about your awkward moment. They were trapped in their own *Imaginary Audience*, desperately wondering if anyone noticed their own bad hair day, stain on their shirt, or awkward text. 

As your prefrontal cortex strengthens its neural wiring into your twenties, this spotlight illusion fades. You'll look back and realize the room wasn't judging you—they were all just waiting for their own turn to survive the spotlight.`,
    brainCheatCode: 'Use the "Rule of 5s": In 5 minutes, does this matter? (Maybe a little). In 5 days? (Barely). In 5 months? (Nobody on Earth will remember except your own bedtime overthinking reel).',
    tags: ['Embarrassment', 'Social Anxiety', 'Spotlight Effect', 'Amygdala', 'School']
  },
  {
    id: 'left-on-read',
    question: 'Why does getting left on "Read" or "Delivered" cause actual physical stomach drops?',
    category: 'social',
    title: 'Ghosted by the Tribe: The Neuroscience of the Dreaded Gray Bubble',
    primaryBrainPart: 'Insula & Nucleus Accumbens (Dopamine & Visceral Pain)',
    brainMetaphor: 'A dopamine slot machine that just pulled three blank wheels while an ancient survival alarm rings.',
    relatableReality: `You send a text that felt just slightly vulnerable—or even just a casual meme—and then... nothing. You see "Read 14m ago" or worse, "Delivered" while you see them active on Instagram. 

Your stomach does that sickening rollercoaster free-fall. You pick up your phone, unlock it, lock it, set it face-down, check it again 45 seconds later. You wonder: *Did I say something weird? Are they talking about me in a side group chat? Are we not friends anymore?*`,
    brainBiologyHack: `What is actually happening inside your skull:

• **The Dopamine Slot Machine (Variable Reward):** When you ping someone, your brain anticipates a dopamine hit. If the reply is unpredictable, your brain enters an obsessive loop—the same psychological mechanism that casinos use to keep gamblers glued to slot machines. Uncertainty spikes dopamine cravings 200% higher than predictable outcomes.
• **The Insular Cortex Gut-Punch:** The **insula** is the brain hub that reads gut signals and bodily tension. When you perceive an ambiguous social rejection, the insula orders a quick rush of adrenaline that slows digestion and constricts abdominal blood vessels. That physical stomach-drop isn't in your imagination; it is an actual biological clamp down on your stomach wall.
• **Catastrophic Script Filling:** Because the prefrontal cortex craves narrative closure, silence is interpreted as the worst possible scenario. The unfinished loop drives your imagination wild.`,
    whyWeDoIt: `In ancestral times, silent withdrawal from a clan member was a precursor to exile. If a tribal member stopped acknowledging your greeting or eye contact, it meant you were falling out of favor with the group hierarchy. 

Hyper-monitoring peer responsiveness was a life-saving radar. The ancestral teen who didn't care if others ignored them was the one who woke up abandoned when the camp moved. You are carrying survivor genes that refuse to let a broken communication thread slip by unnoticed.`,
    takeaway: `In the modern digital world, people don't leave you on Read because they are plotting your social downfall—they opened it while their mom asked them to unload the dishwasher, got distracted by a cat video, or fell asleep with their thumb on the screen. 

Remind yourself: An unread message is almost never a verdict on your worth; it is just another human being with an equally fragmented attention span.`,
    brainCheatCode: 'The "Phone Jail" Trick: Set your phone across the room or face-down in a drawer for 25 minutes. Taking away the micro-glance loop breaks the dopamine slot machine and lets your nervous system reset.',
    tags: ['Texting', 'Rejection', 'Dopamine', 'Insula', 'Anxiety']
  },
  {
    id: 'parents-suddenly-annoying',
    question: 'Why do parents suddenly feel so infuriating and irritating over nothing?',
    category: 'family',
    title: 'The Parent Glitch: Why Their Breathing and Questions Suddenly Sound Like Nails on a Chalkboard',
    primaryBrainPart: 'Prefrontal-Limbic Individuation Network',
    brainMetaphor: 'Your internal software updating from "Co-pilot passenger" to "Solo pilot", forcing a reboot of your authority sensors.',
    relatableReality: `A few years ago, you probably told your parents every detail about your day. Now, they walk into your room and ask: *"How was school? Did you study for biology?"* and inside your skull, every nerve ending screams. 

Even the tone of their voice, the way they chew their dinner, or their advice you didn't ask for feels like sandpaper on your soul. Afterward, you might feel guilty: *Why was I so short with them? They are just trying to be nice. Am I an awful person?*`,
    brainBiologyHack: `You are not an awful person—you are undergoing **Individuation**:

• **The Neural Shift from Parent-Anchor to Peer-Anchor:** Brain imaging studies show that around age 12–14, your brain's auditory processing centers literally tune down your parent's voice. When researchers played mothers' voices to teens in fMRI scanners, the reward circuits that lit up in childhood went dim—instead, unfamiliar peer voices lit up the social reward regions like Christmas trees.
• **Autonomy Alarm System:** Your developing prefrontal cortex is trying to establish your own independent identity and decision-making system. Any perceived micromanagement—even well-meaning questions—is flagged by your limbic system as a threat to your personal autonomy and territory.
• **Tone Distortion:** Because the adolescent amygdala misinterprets neutral facial expressions and vocal tones, when a parent says with mild curiosity *"Did you finish your homework?"*, your brain often registers it as aggressive, condescending, or accusatory.`,
    whyWeDoIt: `If human teenagers stayed completely cozy, comfortable, and emotionally attached to their parents' care, nobody would ever have had the courage to leave the nest, explore uncharted territory, find a partner, and build a new community. 

Nature intentionally injects friction into the parent-child relationship during puberty. That irritation is biological sandpaper designed to push you out of psychological dependence so you can become a self-sufficient adult capable of surviving independently.`,
    takeaway: `This friction doesn't mean your relationship is ruined forever. Almost every adult will tell you that the parent who drove them crazy at 15 became one of their closest confidants by age 23. 

Recognizing that your annoyance is biological, not personal, gives you the power to take a deep breath before snapping. You don't have to agree with everything they say, but knowing it's just your independence software installing can keep the house from burning down.`,
    brainCheatCode: 'The "Hostage Negotiator" Reframe: When they ask 5 annoying questions, answer with one calm, informative sentence before they can ask more: "School was okay, biology test is Friday, I have 30 mins of history to finish." Giving the information upfront cuts off their anxiety and buys you peaceful silence.',
    tags: ['Parents', 'Individuation', 'Irritation', 'Autonomy', 'Family']
  },
  {
    id: 'bedtime-doomscroll',
    question: 'Why do I lie awake doomscrolling until 2 AM even when I know I have to wake up early?',
    category: 'habits',
    title: 'The 2 AM Revenge: Why Your Brain Sabotages Its Own Sleep Schedule',
    primaryBrainPart: 'Suprachiasmatic Nucleus (SCN) & Melatonin Delay',
    brainMetaphor: 'A night-shift worker demanding their owed personal freedom after working a 12-hour unpaid corporate shift.',
    relatableReality: `It is 11:30 PM. You have to be on the school bus at 6:45 AM. You know the math: if you fall asleep right now, you get barely 7 hours. If you sleep at 1 AM, you will be a shambling corpse. 

Yet your thumb keeps swiping. One more video, one more Reddit thread, one more refresh. You aren't even enjoying what you are looking at anymore; your eyes burn and your brain feels pickled, but setting the phone on the nightstand feels virtually impossible.`,
    brainBiologyHack: `This isn't just lack of willpower; it is a two-pronged neurological collision:

• **The Biological Melatonin Shift:** In children and adults, the pineal gland begins pumping out the sleep hormone **melatonin** around 8:30–9:30 PM. In puberty, your biological circadian pacemaker (the **suprachiasmatic nucleus**) naturally shifts that release window by **2 to 3 hours later**—usually not peaking until 11:00 PM or midnight. You literally are not wired to feel sleepy at 10 PM.
• **"Revenge Bedtime Procrastination":** Throughout the daytime, every hour of your schedule is dictated by others: teachers, bells, parents, coaches, homework. Late night is the only window of your 24 hours where nobody is demanding anything from you. Your brain hoards those quiet midnight hours like stolen gold to reclaim a sense of control.
• **Blue Light Melatonin Suppression:** Staring at phone screens mimics daylight wavelengths, tricking the SCN into thinking the sun is still up, suppressing the remaining melatonin drip.`,
    whyWeDoIt: `Anthropologists hypothesize that in ancestral tribal camps, having individuals with staggered sleep cycles was an evolutionary masterstroke. 

If everyone in the clan fell asleep at the exact same hour (10 PM to 6 AM), the village was defenseless for eight straight hours against nocturnal predators or enemy raids. Teenagers and young adults were the natural night sentinels—alert, awake, and guarding the perimeter during the dead of night while elders slept early.`,
    takeaway: `You are not broken, lazy, or incapable of discipline—your biology is battling an outdated industrial school bell schedule created during the 19th century factory era. 

While you can't magically change your high school start time tomorrow, you can stop shaming yourself for not being tired at 10 PM. Working with your biology instead of against it will change your life.`,
    brainCheatCode: 'The "Friction Barrier": Plug your charger across the room, out of arm\'s reach of your bed. The 4 steps required to stand up and grab it gives your tired prefrontal cortex enough time to override the automatic scroll reflex.',
    tags: ['Sleep', 'Circadian Clock', 'Doomscrolling', 'Melatonin', 'Habits']
  },
  {
    id: 'hallway-paranoia',
    question: 'Why do I feel like everyone in the school hallway is judging my clothes, hair, and walking style?',
    category: 'identity',
    title: 'The Hallway Panopticon: Decoding Adolescent Self-Consciousness',
    primaryBrainPart: 'Temporoparietal Junction (TPJ) & Theory of Mind',
    brainMetaphor: 'A newly installed security camera control room that mistakenly thinks all 400 monitors are broadcasting your feed.',
    relatableReality: `You step out of the locker bay into the main school hallway during passing period. Suddenly, you become agonizingly aware of how your arms are swinging. *Are they swinging too much? Not enough? Do my pants look weird? Am I walking too fast?* 

Two people glance your way and burst into laughter, and your stomach hits the floor: you are 100% convinced they are laughing at your shoes or your haircut. You pull out your phone just to look busy and avoid eye contact.`,
    brainBiologyHack: `Here is the neurodevelopmental architecture behind the panic:

• **The Temporoparietal Junction (TPJ) Growth Spurt:** Around age 13–16, the brain region responsible for **Theory of Mind** (the ability to think about what other people are thinking) goes through a massive surge of new synaptic connections. For the first time in your life, you are acutely aware that other minds have opinions about you.
• **The Imaginary Audience Overload:** Because the TPJ is hyperactive while the prefrontal cortex is still refining its calibration, you fall into the classic cognitive bias known as *egocentrism*. Your brain falsely assumes that because *you* are intensely focused on your own appearance, *everyone else* must be equally focused on it.
• **Facial Expression Misreading:** Neuroscientists at Harvard showed photos of fearful or neutral faces to teens and adults in MRI machines. Adults correctly identified the neutral expressions 100% of the time, while teens misidentified neutral faces as angry, disgusted, or hostile over 40% of the time. Those kids in the hallway weren't judging you—they were just spacing out with a neutral face.`,
    whyWeDoIt: `In adolescence, humans undergo the critical social sorting process where mating, alliance-building, and social roles are established. 

Having a hyper-vigilant radar for social cues ensured that an ancestral youth didn't violate tribal norms, commit social taboos, or antagonize dominant group members. It was a self-protective mechanism designed to keep you safe inside the collective safety net of the tribe.`,
    takeaway: `Here is the ultimate life-saving secret that psychologists call the **Spotlight Illusion**: *Everyone is too obsessed with their own spotlight to watch yours.* 

That person in the hallway didn't notice your hair because they were panicking that their own breath smelled like lunch, or worrying about their math quiz. You are an extra in their movie, not the lead villain they are critiquing.`,
    brainCheatCode: 'The "Look Up" Experiment: Next time you walk down the hall, look at people\'s eyes instead of the floor. You will discover 90% of them are staring blankly into space, looking at their phone, or nervously looking around just like you.',
    tags: ['Self-Conscious', 'Spotlight Effect', 'Identity', 'Anxiety', 'Hallway']
  },
  {
    id: 'procrastinate-panic',
    question: 'Why do I freeze and procrastinate on school projects until pure panic sets in at midnight?',
    category: 'habits',
    title: 'The Deadline Adrenaline Trap: Why You Only Work When Your Hair Is on Fire',
    primaryBrainPart: 'Prefrontal Cortex vs Amygdala Threat Circuit',
    brainMetaphor: 'An electric generator that only turns on when struck by actual lightning.',
    relatableReality: `You were given this history paper two weeks ago. You had fourteen whole days. You swore that this time, you would do one page every afternoon like a functional human being. 

Instead, you cleaned your desk, organized your Spotify playlists, watched a 45-minute documentary on deep-sea isopods, stared at the blank Google Doc for four minutes, and shut your laptop in exhaustion. Now it is Sunday at 10:45 PM, due at 8:00 AM, and you are typing at 120 words per minute fueled by sheer terror and tears.`,
    brainBiologyHack: `Procrastination is almost never laziness; it is an **emotional regulation issue**:

• **Perfectionism and Threat Detection:** When a project feels big, unclear, or high-stakes, your amygdala interprets the possibility of doing it poorly as a threat to your self-esteem and social status. To protect you from that unpleasant feeling of failure, your brain redirects you to low-stakes tasks (cleaning your room, checking social media) that offer guaranteed safety and mini-dopamine hits.
• **The Prefrontal Under-Construction Delay:** Your PFC is responsible for "future self empathy"—imagining how Sunday-night you will feel. In adolescence, your brain views "future you" almost like a complete stranger. "Monday me can deal with that problem!"
• **The Adrenaline Bypass:** Why can you suddenly write 5 pages at 11 PM? Because when the deadline is imminent, real panic floods your brain with **norepinephrine** and **cortisol**. This synthetic chemical panic surge temporarily overrides the executive dysfunction and forces the prefrontal cortex into hyper-focus. You have accidentally trained your brain to need adrenaline as fuel.`,
    whyWeDoIt: `Energy conservation is one of evolution's core directives. In the wild, hunting or exerting mental and physical energy on low-probability or abstract future outcomes was a waste of precious calories. 

Ancestral humans only sprang into peak high-energy action when the immediate threat or opportunity was right in front of their eyes. Abstract deadlines weeks away don't trigger ancestral urgency—immediate pressure does.`,
    takeaway: `Relying on panic to get things done works in the short term, but it burns out your nervous system and makes school feel like continuous warfare. 

The secret isn't "forcing yourself to have iron willpower"; it is lowering the emotional barrier of starting so your amygdala doesn't freak out.`,
    brainCheatCode: 'The "5-Minute Garbage Draft": Tell yourself: "I am going to open the document and write 3 sentences of absolute trash for just 5 minutes. It can be the worst writing in human history." Once you break the friction of starting, 80% of the emotional panic evaporates.',
    tags: ['Procrastination', 'ADHD/Focus', 'Prefrontal Cortex', 'Stress', 'School']
  },
  {
    id: 'how-charm-works',
    question: 'What is real charm, and why does trying too hard to be cool always backfire?',
    category: 'social',
    title: 'The Secret Code of Real Charm: Why Warmth Beats "Coolness" Every Single Time',
    primaryBrainPart: 'Mirror Neuron System & Oxytocin Pathways',
    brainMetaphor: 'A warm fireplace that invites people to put down their heavy shields, rather than an icy statue that keeps everyone at arm’s length.',
    relatableReality: `Most of us grew up believing that "charm" means being the funniest, loudest, most effortlessly cool person in the room who always has a witty comeback ready. 

So when we enter a room full of people, we put on this exhausting emotional armor: we act aloof, pretend not to care, check our phones constantly, or obsess over saying the "perfect" clever thing. And ironically, it leaves us feeling even more isolated, disconnected, and drained.

Here is the life-changing truth: real charm is almost the exact opposite of trying to impress people. People don't care how impressive you are; they care how safe, seen, and comfortable they feel around you.`,
    brainBiologyHack: `The neuroscience of interpersonal warmth reveals how human rapport actually ignites:

• **The Mirror Neuron Cascade:** Humans possess specialized brain cells called **mirror neurons** (located in the premotor cortex and inferior parietal lobe). If you are tense, defensive, and evaluating yourself, the other person's mirror neurons detect your micro-tension and mirror it—making them feel subtly uneasy without knowing why. But when you relax and project genuine warmth, their nervous system mirrors that safety.
• **Oxytocin vs Cortisol:** Trying to "dominate" or look high-status spikes low-grade cortisol (the stress hormone) in social interactions. Warmth, unhurried eye contact, and sincere curiosity trigger a micro-burst of **oxytocin**—the neurochemical of trust and social safety.
• **The Amy Cuddy Equation (Warmth > Competence):** Harvard social psychologist Amy Cuddy discovered that when human brains evaluate a new person, they answer two questions in order: 1) *"Can I trust this person?"* (Warmth), and only then 2) *"Can I respect this person?"* (Competence). If you skip warmth to try to look cool, people perceive you as distant or untrustworthy.`,
    whyWeDoIt: `In ancestral bands, a person who tried too hard to stand above everyone else was flagged as a potential threat to group cohesion and harmony. 

True tribal glue came from people who noticed others, shared food, listened intently, and validated group members. Evolutionary biology wired us to love people who make *us* feel valued, not people who want an audience to applaud them.`,
    takeaway: `You don’t have to become an extrovert or a stand-up comedian to be deeply magnetic and charming. Real charisma is quiet. 

It is the superpower of asking someone a genuine question, remembering what they said, and giving them your full, undivided presence for 90 seconds. You become magnetic the second you stop asking *"Do they like me?"* and start asking *"How can I make them feel comfortable?"*`,
    brainCheatCode: 'The "Highlight Word" Trick: When someone speaks, pick one interesting noun or verb they just used, and ask about it: "Wait, you said you like editing video—what kind of projects do you make?" It proves you are actually listening, which is the rarest and most charming trait on Earth.',
    tags: ['Charm', 'Charisma', 'Communication', 'Friendship', 'Connection']
  },
  {
    id: 'decrease-social-anxiety',
    question: 'How do I decrease social anxiety and stop feeling so isolated and invisible?',
    category: 'emotions',
    title: 'Breaking the Isolation Bubble: The Neuroscience of Overcoming Social Freeze',
    primaryBrainPart: 'Amygdala Threat Filter & Polyvagal Nerve',
    brainMetaphor: 'Resetting a smoke detector that mistakes burnt toast for a house fire, one tiny micro-step at a time.',
    relatableReality: `You want friends. You want to be invited. You want to laugh in a group and feel like you belong. 

Yet when you walk into the cafeteria, the library, or a party, your throat closes up, your voice drops to a whisper, and your legs feel like lead. It feels safer to put in your earbuds, look down at your phone, and pretend you want to be left alone. 

Then you go home and feel that hollow, aching heaviness in your chest—feeling completely invisible, as if there is a thick pane of glass separating you from the rest of the world.`,
    brainBiologyHack: `What is physically happening during social anxiety and isolation:

• **The Polyvagal "Dorsal Vagal Freeze":** When your threat detector (the amygdala) calculates that social rejection is probable, your autonomic nervous system can trigger a **freeze response** via the dorsal vagal complex. Your heart rate might stay quiet or race internally, but your facial muscles freeze, eye contact feels unbearable, and vocal cords tighten. You aren't "boring"—your nervous system is in protective lockdown.
• **The Safety Behavior Trap:** When we are scared, we adopt unconscious "safety behaviors"—wearing headphones, crossing our arms, avoiding eye contact, never speaking unless spoken to. While these protect you from immediate embarrassment, they signal to other people: *"Please do not approach me, I want to be left alone."* You accidentally create the very isolation you are dreading.
• **The Attention Inversion:** Social anxiety turns your spotlight 100% inward: *"How is my posture? Did I say that weird? My voice sounds shaky."* This internal monitoring hijacks 90% of your working memory, leaving no brain bandwidth to actually listen or converse.`,
    whyWeDoIt: `To a vulnerable ancestral youth separated from their allies, drawing attention to themselves in an unfamiliar group was dangerous. 

The freeze-and-blend-in mechanism evolved to keep low-status or unprotected individuals safe from aggression. Your brain is running an ancient survival protocol: *"If they don't see me, they can't reject or attack me."*`,
    takeaway: `You don’t have to jump straight into being the life of the party. Courage isn't the absence of fear—it is taking one microscopic step while your hands are still shaking. 

Social confidence is not an innate personality trait; it is a neurological muscle. Every time you make 2 seconds of eye contact, drop one casual "hey", or ask someone for a pencil, your prefrontal cortex sends a signal to your amygdala: *"Look, we spoke to someone, and we didn't die."* The alarm recalibrates, and the glass wall begins to shatter.`,
    brainCheatCode: 'The "Micro-Courage Ladder": Start at Level 1 today: Give a warm nod to the school librarian or bus driver. Level 2 tomorrow: Ask a classmate "Do you know what page we are on?" You don\'t need a full conversation; just tiny micro-doses of social contact that teach your amygdala safety.',
    tags: ['Social Anxiety', 'Isolation', 'Belonging', 'Courage', 'Connection']
  }
];
