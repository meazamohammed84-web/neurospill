import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Endpoint to generate teen neuroscience explanation with evidence + Gen Z slang
app.post('/api/explain', async (req, res) => {
  try {
    const { question, vibe = 'genz' } = req.body;

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Please provide a valid question or situation.' });
    }

    let vibeInstruction = '';
    if (vibe === 'genz') {
      vibeInstruction = `VOICE & SLANG GUIDELINES:
- Talk like a charismatic, culturally fluent Gen Z content creator and youth psychologist.
- Naturally weave in authentic Gen Z idioms, internet slang, and punchy metaphors (e.g. "rent-free in your head", "cooked", "buffering", "side-eye from your amygdala", "main character syndrome", "canon event", "social battery at 2%", "living in 4K", "catching strays", "giving uncanny valley", "ferrari engine with bicycle brakes", "lowkey / highkey", "spilling the neuro-tea").
- Make it sound completely natural and conversational—like a viral TikTok/podcast video essay that teens actually send to their friends.
- CRITICAL REQUIREMENT: It MUST be 100% scientifically accurate, citing real brain regions, neurotransmitters, and psychological studies (e.g. prefrontal cortex, amygdala, dACC, dopamine loops, synaptic pruning, circadian phase shift). Combine hardcore neuroscience with effortlessly fluent Gen Z slang.`;
    } else if (vibe === 'older_sibling') {
      vibeInstruction = `VOICE & SLANG GUIDELINES:
- Warm, validating, witty older sibling or cool mentor.
- Conversational, sharp, using everyday visual metaphors, light slang, and validating empathy.
- Evidence-based with peer-reviewed neuroscience explained simply.`;
    } else {
      vibeInstruction = `VOICE & SLANG GUIDELINES:
- Detailed neuroscientist and youth psychologist.
- Deep biological breakdowns, specific neural networks and studies, but still accessible and engaging.`;
    }

    const systemPrompt = `You are an expert youth psychologist and neuroscience communicator translating adolescent brain science for teens and preteens (ages 11–19).

${vibeInstruction}

Break down the user's question into the following required structured JSON response:
1. title: A catchy, curiosity-inducing headline using the requested voice (e.g. "Why Your Amygdala Is Lowkey Running Main Character Syndrome in 3rd Period").
2. relatableReality: Validate what it feels like in the body and mind. Use relatable scenarios, snappy sentences, and validating language.
3. brainBiologyHack: The rigorous evidence-based neuroscience under the hood (dopamine spikes, limbic engine, dorsal anterior cingulate cortex, prefrontal cortex under construction, synaptic pruning, melatonin delay, etc.). Explain complex science with vivid metaphors.
4. whyWeDoIt: Evolutionary & social survival roots (savanna tribes, hunter-gatherer bands, clan belonging, evolutionary threat detection).
5. takeaway: Reassuring conclusion showing why this is normal, temporary, and a sign of active brain growth.
6. brainCheatCode: A 1-2 sentence actionable, practical mental trick or reframe they can use right in the moment.
7. primaryBrainPart: The specific brain structure involved (e.g., "dACC & Amygdala (The Threat & Social Pain Radar)").
8. brainMetaphor: A 1-sentence punchy metaphor combining brain science and relatable culture.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Explain this adolescent behavior or dynamic for a teen:\n"${question}"`,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            relatableReality: { type: Type.STRING },
            brainBiologyHack: { type: Type.STRING },
            whyWeDoIt: { type: Type.STRING },
            takeaway: { type: Type.STRING },
            brainCheatCode: { type: Type.STRING },
            primaryBrainPart: { type: Type.STRING },
            brainMetaphor: { type: Type.STRING },
          },
          required: [
            'title',
            'relatableReality',
            'brainBiologyHack',
            'whyWeDoIt',
            'takeaway',
            'brainCheatCode',
            'primaryBrainPart',
            'brainMetaphor',
          ],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('No response generated from model');
    }

    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (error: any) {
    console.error('Error generating explanation:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to decode this brain mystery. Please try again!',
    });
  }
});

// Endpoint for the Gen Z Voice Therapist
app.post('/api/therapist/chat', async (req, res) => {
  try {
    const { messages, userMessage } = req.body;

    if (!userMessage && (!messages || messages.length === 0)) {
      return res.status(400).json({ error: 'Please provide a message.' });
    }

    const systemInstruction = `You are Sage, a compassionate, comforting Gen Z youth therapist and adolescent neuroscientist. You talk directly with teens and youth (ages 11–19) who are dealing with school stress, social anxiety, overthinking, body changes, crush anxiety, friendship drama, burnout, or feeling misunderstood.

CORE THERAPEUTIC VOICE & BEHAVIOR:
1. Speak warmly, authentically, and casually—like an ultra-safe, non-judgmental youth therapist or cool older mentor who actually gets it. Never sound like a cold robot, corporate bot, or formal textbook.
2. Weave in relatable, natural Gen Z language (e.g., "social battery", "cooked", "spiraling", "buffering", "giving yourself grace", "main character", "rent-free", "lowkey / highkey", "overclocked nervous system") without forcing it.
3. Keep spoken responses concise and conversational (2-3 short, soothing paragraphs, around 70-130 words). Teens will be listening to your voice, so avoid huge walls of text.
4. Validate their emotions first: Explain the neuro-biology behind their feelings so they know they are NOT broken ("Your amygdala is firing off alarms right now because your brain is trying to protect you—that is a totally normal human reaction").
5. Provide 1 immediate somatic or cognitive tool (e.g. the double-inhale physiological sigh, feeling your feet on the floor, the 5-4-3-2-1 sensory scan, or the 24-hour perspective trick).
6. End with a gentle, low-pressure question or comforting check-in.
7. CRITICAL CRISIS SAFETY: If the user explicitly mentions self-harm, suicide, or an immediate emergency, respond with gentle warmth, urge them to connect with someone safe, and provide:
   - 988 Suicide & Crisis Lifeline: Call or text 988 (free, confidential, 24/7)
   - Crisis Text Line: Text HOME to 741741
   - Encourage reaching out to a trusted adult, school counselor, or doctor.`;

    const contents: any[] = [];
    if (Array.isArray(messages)) {
      for (const m of messages) {
        if (m.content) {
          contents.push({
            role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
            parts: [{ text: m.content }],
          });
        }
      }
    }

    if (userMessage) {
      contents.push({
        role: 'user',
        parts: [{ text: userMessage }],
      });
    }

    let replyText = '';
    const candidateModels = ['gemini-3.8-flash', 'gemini-flash-latest', 'gemini-3.1-flash-lite'];

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction,
            temperature: 0.75,
          },
        });
        if (response.text) {
          replyText = response.text;
          break;
        }
      } catch (callErr: any) {
        console.warn(`Model ${modelName} call failed, trying next candidate:`, callErr?.message);
      }
    }

    if (!replyText) {
      replyText = "First off, take a slow, deep breath with me. Inhale for 4 seconds, exhale for 6. Your nervous system is carrying a lot right now, and that doesn't mean you're failing—your brain is just experiencing cognitive overload. Let's break this down together so it doesn't feel like an impossible mountain. What's the single biggest thing weighing on you right this second?";
    }

    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Error in therapist chat:', error);
    return res.json({
      reply: "I hear you, and your feelings are completely valid. Take a soft, gentle breath right now—drop your shoulders 2 inches. You don't have to solve everything in the next 10 minutes. Tell me: what would make you feel even 5% safer or lighter right now?",
    });
  }
});

// Endpoint for the "You're Okay" Comfort Texting AI
app.post('/api/comfort/text', async (req, res) => {
  try {
    const { messages, userMessage } = req.body;

    if (!userMessage && (!messages || messages.length === 0)) {
      return res.status(400).json({ error: 'Please provide a message.' });
    }

    const systemInstruction = `You are a warm, deeply comforting companion, older mentor, and youth counselor texting a teenager who is feeling anxious, sad, insecure, overwhelmed, or spiraling.

YOUR CORE MISSION:
Make the user feel deeply seen, comforted, and grounded. Reassure them with absolute warmth:
- Tell them clearly: "This is normal. This is okay. You are not broken or weird. You can go through this. We can go through this together."
- Remind them that whatever intense feelings or awkwardness they are feeling right now is temporary and human.
- Sound like a caring text message (casual, soft, validating, using natural pacing, gentle comforting emojis like 🤍, 🫂, ✨).
- Keep text responses under 2-3 short, soothing paragraphs (easy to read on a phone screen when someone is stressed or crying).
- Offer 1 gentle grounding reminder (e.g. "Take a sip of cold water", "Unclench your jaw", "Breathe in for 4, out for 6").
- End with love, warmth, or a reassuring check-in: "I'm right here with you. What do you need most right now?"
- SAFETY MANDATE: If the user mentions self-harm, suicide, or an immediate emergency, respond with gentle warmth, urge them to connect with someone safe, and provide the 988 Suicide & Crisis Lifeline (call/text 988) and Crisis Text Line (text HOME to 741741).`;

    const contents: any[] = [];
    if (Array.isArray(messages)) {
      for (const m of messages) {
        if (m.content) {
          contents.push({
            role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
            parts: [{ text: m.content }],
          });
        }
      }
    }

    if (userMessage) {
      contents.push({
        role: 'user',
        parts: [{ text: userMessage }],
      });
    }

    let replyText = '';
    const candidateModels = ['gemini-3.8-flash', 'gemini-flash-latest', 'gemini-3.1-flash-lite'];

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction,
            temperature: 0.75,
          },
        });
        if (response.text) {
          replyText = response.text;
          break;
        }
      } catch (callErr: any) {
        console.warn(`Model ${modelName} comfort text failed, trying next:`, callErr?.message);
      }
    }

    if (!replyText) {
      replyText = "Hey... take a slow, gentle breath with me right now. 🤍\n\nFirst of all: this is normal. What you are feeling is completely okay. You are not broken, you are not failing, and you are not weird for feeling this way. Big feelings feel huge in the moment, but they always pass.\n\nYou can go through this. We can go through this together, one step at a time. Drop your shoulders two inches and unclench your jaw. I'm right here with you—tell me what's feeling heavy right now.";
    }

    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Error in comfort text:', error);
    return res.json({
      reply: "Hey, I'm right here. 🤍 Take a deep breath. Whatever is going on, this is normal and it is okay. You can get through this, and we're going to get through it together. Tell me what's on your mind.",
    });
  }
});

// Endpoint for voice narration using gemini-3.8-flash-lite-tts
app.post('/api/narrate', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text required for narration.' });
    }

    const trimmed = text.slice(0, 1000);

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: trimmed,
              speechMetadata: {
                style: 'Warm, conversational, engaging Gen Z older sibling explaining cool psychology',
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      return res.status(500).json({ error: 'Audio generation returned empty result.' });
    }

    return res.json({ audioBase64: base64Audio });
  } catch (err: any) {
    console.error('TTS error:', err);
    return res.status(500).json({ error: err.message || 'TTS generation failed' });
  }
});

// Serve frontend in development or production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`NeuroSpill server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
