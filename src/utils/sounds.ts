const audioCache: Record<string, HTMLAudioElement> = {};

function getAudio(url: string, volume: number = 0.5): HTMLAudioElement | null {
  try {
    if (!audioCache[url]) {
      const audio = new Audio(url);
      audio.volume = volume;
      audio.preload = 'auto';
      audioCache[url] = audio;
    }
    return audioCache[url];
  } catch {
    return null;
  }
}

const SHUFFLE_URL = 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_6b9295d588.mp3?filename=card-shuffle-1-37164.mp3';
const FLIP_URL = 'https://cdn.pixabay.com/download/audio/2022/10/30/audio_82d334823e.mp3?filename=card-flip-1-47870.mp3';
const DEAL_URL = 'https://cdn.pixabay.com/download/audio/2021/08/02/audio_04195e9a8a.mp3?filename=whoosh-6316.mp3';

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch {
    return null;
  }
}

function playSyntheticFlip() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);
  gain.gain.setValueAtTime(0.15, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.15);
}

function playSyntheticShuffle() {
  const ctx = getAudioContext();
  if (!ctx) return;
  for (let i = 0; i < 3; i++) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const noise = ctx.createBufferSource();
    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let j = 0; j < bufferSize; j++) {
      data[j] = (Math.random() * 2 - 1) * 0.3;
    }
    noise.buffer = buffer;
    noise.connect(gain);
    gain.connect(ctx.destination);
    const startTime = ctx.currentTime + i * 0.15;
    gain.gain.setValueAtTime(0.08, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.05);
    noise.start(startTime);
    noise.stop(startTime + 0.05);
  }
}

function playSyntheticDeal() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(400, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);
  osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.25);
  gain.gain.setValueAtTime(0.12, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.25);
}

export function playShuffleSound() {
  const audio = getAudio(SHUFFLE_URL, 0.6);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {
      playSyntheticShuffle();
    });
  } else {
    playSyntheticShuffle();
  }
}

export function stopShuffleSound() {
  const audio = audioCache[SHUFFLE_URL];
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

export function playFlipSound() {
  const audio = getAudio(FLIP_URL, 0.5);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {
      playSyntheticFlip();
    });
  } else {
    playSyntheticFlip();
  }
}

export function playDealSound() {
  const audio = getAudio(DEAL_URL, 0.5);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {
      playSyntheticDeal();
    });
  } else {
    playSyntheticDeal();
  }
}

export function preloadSounds() {
  getAudio(SHUFFLE_URL, 0.6);
  getAudio(FLIP_URL, 0.5);
  getAudio(DEAL_URL, 0.5);
}
