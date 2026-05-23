import { useState, useEffect } from 'react';
import { type Lang, t } from '../i18n';

interface ShuffleAnimationProps {
  onComplete: () => void;
  onBack: () => void;
  cardCount: number;
  lang: Lang;
}

export function ShuffleAnimation({ onComplete, onBack, cardCount, lang }: ShuffleAnimationProps) {
  const [isShuffling, setIsShuffling] = useState(false);
  const [shuffleAudio, setShuffleAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_6b9295d588.mp3?filename=card-shuffle-1-37164.mp3');
    audio.volume = 0.6;
    setShuffleAudio(audio);
    return () => { audio.pause(); };
  }, []);

  const playShuffleSound = () => {
    if (shuffleAudio) {
      shuffleAudio.currentTime = 0;
      shuffleAudio.play().catch(() => {});
    }
  };

  const stopShuffleSound = () => {
    if (shuffleAudio) {
      shuffleAudio.pause();
      shuffleAudio.currentTime = 0;
    }
  };

  const playDealSound = () => {
    try {
      const audio = new Audio('https://cdn.pixabay.com/download/audio/2021/08/02/audio_04195e9a8a.mp3?filename=whoosh-6316.mp3');
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } catch (e) {}
  };

  const handleStartShuffle = async () => {
    setIsShuffling(true);
    playShuffleSound();
    await new Promise(resolve => setTimeout(resolve, 2500));
    stopShuffleSound();
    playDealSound();
    setIsShuffling(false);
    onComplete();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full">
      <div className="text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold purple-text-gradient mb-4 tracking-wider">
          {t('readyShuffle', lang)}
        </h2>
        <p className="text-gray-500 text-base">{t('readyShuffleSub', lang)}</p>
      </div>

      <div className="relative flex items-center justify-center" style={{ width: '420px', height: '320px' }}>
        {[...Array(cardCount)].map((_, i) => {
          const offset = i - Math.floor(cardCount / 2);
          const rotateBase = offset * 3;
          const translateX = offset * 8;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                width: '160px',
                height: '240px',
                transform: isShuffling
                  ? `translateX(${(Math.random() - 0.5) * 60}px) translateY(${(Math.random() - 0.5) * 30}px) rotate(${(Math.random() - 0.5) * 20}deg)`
                  : `translateX(${translateX}px) rotate(${rotateBase}deg)`,
                transition: isShuffling ? 'transform 0.15s ease-in-out' : 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                zIndex: i,
              }}
            >
              <div
                className="w-full h-full rounded-2xl overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0c29 100%)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  boxShadow: isShuffling
                    ? '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)'
                    : '0 4px 20px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(34, 211, 238, 0.1), rgba(232, 121, 249, 0.15))',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 6s ease infinite',
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <svg viewBox="0 0 80 80" className="w-20 h-20 opacity-60">
                      <defs>
                        <linearGradient id={`cardBack${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="50%" stopColor="#a78bfa" />
                          <stop offset="100%" stopColor="#e879f9" />
                        </linearGradient>
                      </defs>
                      <circle cx="40" cy="40" r="20" stroke={`url(#cardBack${i})`} strokeWidth="1.5" fill="none" />
                      <circle cx="40" cy="40" r="12" stroke={`url(#cardBack${i})`} strokeWidth="1" fill="none" opacity="0.6" />
                      <circle cx="40" cy="40" r="4" fill={`url(#cardBack${i})`} opacity="0.8" />
                      <line x1="40" y1="15" x2="40" y2="25" stroke={`url(#cardBack${i})`} strokeWidth="1" opacity="0.5" />
                      <line x1="40" y1="55" x2="40" y2="65" stroke={`url(#cardBack${i})`} strokeWidth="1" opacity="0.5" />
                      <line x1="15" y1="40" x2="25" y2="40" stroke={`url(#cardBack${i})`} strokeWidth="1" opacity="0.5" />
                      <line x1="55" y1="40" x2="65" y2="40" stroke={`url(#cardBack${i})`} strokeWidth="1" opacity="0.5" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-purple-400/40" />
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-400/40" />
                <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-cyan-400/40" />
                <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-purple-400/40" />
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleStartShuffle}
        disabled={isShuffling}
        className={`px-10 py-3.5 rounded-xl font-medium text-base transition-all duration-300 ${
          isShuffling
            ? 'bg-white/[0.03] border border-white/10 text-gray-600 cursor-not-allowed'
            : 'purple-gradient text-white hover:shadow-lg hover:shadow-purple-500/25 hover:brightness-110'
        }`}
      >
        {isShuffling ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {t('shuffling', lang)}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t('startShuffle', lang)}
          </span>
        )}
      </button>
    </div>
  );
}
