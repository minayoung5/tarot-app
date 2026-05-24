import React, { useState, useEffect } from 'react';
import type { TarotCard } from '../data/tarotCards';
import { type Lang, t } from '../i18n';
import { TarotCardFace } from './TarotCardFace';
import { playFlipSound } from '../utils/sounds';

interface FlipCardProps {
  card: TarotCard;
  position: string;
  isFlipped: boolean;
  onFlip: () => void;
  delay: number;
  isReversed: boolean;
  lang: Lang;
  compact?: boolean;
}

export function FlipCard({ card, position, isFlipped, onFlip, delay, isReversed, lang, compact }: FlipCardProps) {
  const [canFlip, setCanFlip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanFlip(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleClick = () => {
    if (!canFlip || isFlipped) return;
    playFlipSound();
    onFlip();
  };

  return (
    <div
      className={`relative cursor-pointer group perspective-1000 ${compact ? 'w-[140px] h-[210px]' : 'w-80 h-[450px]'}`}
      onClick={handleClick}
      style={{
        opacity: canFlip ? 1 : 0.5,
        transition: 'opacity 0.5s ease',
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <div className={`w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 border-2 sm:border-4 border-white/20 overflow-hidden relative`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            <svg viewBox="0 0 300 450" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c0c0c0" />
                  <stop offset="25%" stopColor="#e8e8e8" />
                  <stop offset="50%" stopColor="#ffffff" />
                  <stop offset="75%" stopColor="#d0d0d0" />
                  <stop offset="100%" stopColor="#c0c0c0" />
                </linearGradient>
                <linearGradient id="silverStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a0a0a0" />
                  <stop offset="50%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#a0a0a0" />
                </linearGradient>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#e0e0e0" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#c0c0c0" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="150" cy="225" r="120" fill="url(#centerGlow)" />
              <rect x="20" y="20" width="260" height="410" rx="25" stroke="url(#silverStroke)" strokeWidth="4" fill="none" />
              <rect x="35" y="35" width="230" height="380" rx="20" stroke="url(#silverStroke)" strokeWidth="2" fill="none" opacity="0.7" />

              <g transform="translate(150, 225)">
                <circle r="90" stroke="url(#silverStroke)" strokeWidth="3" fill="none" opacity="0.8" />
                <circle r="80" stroke="url(#silverStroke)" strokeWidth="2" fill="none" opacity="0.6" />
                <circle r="70" stroke="url(#silverStroke)" strokeWidth="1.5" fill="none" opacity="0.5" />
                <path d="M0,-60 L52,30 L-52,30 Z" stroke="url(#silverStroke)" strokeWidth="3" fill="none" opacity="0.7" />
                <path d="M0,60 L52,-30 L-52,-30 Z" stroke="url(#silverStroke)" strokeWidth="3" fill="none" opacity="0.7" />
                <ellipse rx="40" ry="25" stroke="url(#silverStroke)" strokeWidth="2" fill="none" opacity="0.8" />
                <circle r="8" fill="url(#silverGradient)" />
                <polygon points="0,-45 4,-15 15,-15 6,-4 15,7 4,7 0,30 -4,7 -15,7 -6,-4 -15,-15 -4,-15" fill="url(#silverGradient)" opacity="0.9" />
                <polygon points="45,0 15,4 15,15 4,6 7,15 0,4 -7,15 -4,6 -15,15 -15,4 -45,0 -15,-4 -15,-15 -4,-6 -7,-15 0,-4 7,-15 4,-6 15,-15 15,-4" fill="url(#silverGradient)" opacity="0.9" />
              </g>

              <circle cx="50" cy="50" r="15" stroke="url(#silverStroke)" strokeWidth="2" fill="none" opacity="0.6" />
              <circle cx="250" cy="50" r="15" stroke="url(#silverStroke)" strokeWidth="2" fill="none" opacity="0.6" />
              <circle cx="50" cy="400" r="15" stroke="url(#silverStroke)" strokeWidth="2" fill="none" opacity="0.6" />
              <circle cx="250" cy="400" r="15" stroke="url(#silverStroke)" strokeWidth="2" fill="none" opacity="0.6" />
              <polygon points="50,35 53,47 65,47 56,54 59,65 50,58 41,65 44,54 35,47 47,47" fill="url(#silverGradient)" opacity="0.7" />
              <polygon points="250,35 253,47 265,47 256,54 259,65 250,58 241,65 244,54 235,47 247,47" fill="url(#silverGradient)" opacity="0.7" />
              <polygon points="50,385 53,403 65,403 56,406 59,415 50,408 41,415 44,406 35,403 47,403" fill="url(#silverGradient)" opacity="0.7" />
              <polygon points="250,385 253,403 265,403 256,406 259,415 250,408 241,415 244,406 235,403 247,403" fill="url(#silverGradient)" opacity="0.7" />
            </svg>

            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
            </div>

            {canFlip && !isFlipped && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-center">
                  <div className={`glass-icon animate-bounce ${compact ? 'text-2xl mb-1' : 'text-3xl sm:text-6xl mb-2 sm:mb-4'}`}>👆</div>
                  <span className={`text-white font-semibold tracking-widest ${compact ? 'text-xs' : 'text-sm sm:text-xl'}`}>
                    {t('clickToReveal', lang)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div
            className={`w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 sm:border-3 ${
              isReversed
                ? 'border-rose-500/60'
                : 'border-amber-400/60'
            } overflow-hidden flex flex-col`}
            style={{
              transform: isReversed ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <TarotCardFace card={card} isReversed={isReversed} position={position} lang={lang} size={compact ? 'compact' : 'full'} />
          </div>
        </div>
      </div>

      {canFlip && !isFlipped && (
        <div
          className={`absolute -inset-2 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${
            isReversed
              ? 'bg-gradient-to-r from-rose-600/50 to-purple-600/50'
              : 'bg-gradient-to-r from-purple-600/50 to-indigo-600/50'
          }`}
        />
      )}
    </div>
  );
}

interface CardSpreadProps {
  cards: Array<{ card: TarotCard; isReversed: boolean }>;
  onComplete: () => void;
  onBack: () => void;
  lang: Lang;
}

export function CardSpread({
  cards,
  onComplete,
  onBack,
  lang,
}: CardSpreadProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [canStart, setCanStart] = useState(false);
  const [allFlipped, setAllFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanStart(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleFlip = (i: number) => {
    if (flippedCards.has(i)) return;
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      newSet.add(i);
      return newSet;
    });
  };

  useEffect(() => {
    if (flippedCards.size === cards.length && cards.length > 0) {
      setTimeout(() => {
        setAllFlipped(true);
      }, 800);
    }
  }, [flippedCards, cards.length]);

  const handleInterpret = () => {
    onComplete();
  };

  if (!canStart) return null;

  const isThreeCards = cards.length === 3;

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12 w-full px-2 sm:px-0">
      <div className="text-center mb-4 sm:mb-8">
        <div className="inline-flex items-center gap-4 mb-2 sm:mb-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-200 tracking-widest">
            {t('clickToFlip', lang)}
          </h2>
        </div>
        <p className="text-slate-400 text-sm sm:text-2xl">{t('clickToFlipSub', lang)}</p>
      </div>

      {isThreeCards ? (
        <div className="sm:hidden flex flex-col items-center">
          <div className="flex gap-4 mb-2">
            <div className="animate-fade-in" style={{ animationDelay: '0s' }}>
              <FlipCard card={cards[0].card} position={''} isFlipped={flippedCards.has(0)} onFlip={() => handleFlip(0)} delay={0} isReversed={cards[0].isReversed} lang={lang} compact />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <FlipCard card={cards[1].card} position={''} isFlipped={flippedCards.has(1)} onFlip={() => handleFlip(1)} delay={300} isReversed={cards[1].isReversed} lang={lang} compact />
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <FlipCard card={cards[2].card} position={''} isFlipped={flippedCards.has(2)} onFlip={() => handleFlip(2)} delay={600} isReversed={cards[2].isReversed} lang={lang} compact />
          </div>
        </div>
      ) : null}

      <div className={`${isThreeCards ? 'hidden sm:flex' : 'flex'} gap-6 sm:gap-10 justify-center`}>
        {cards.map((item, i) => (
          <div
            key={item.card.id}
            className="animate-fade-in"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <FlipCard
              card={item.card}
              position={''}
              isFlipped={flippedCards.has(i)}
              onFlip={() => handleFlip(i)}
              delay={i * 300}
              isReversed={item.isReversed}
              lang={lang}
            />
          </div>
        ))}
      </div>

      {flippedCards.size > 0 && flippedCards.size < cards.length && (
        <div className="flex items-center gap-3 text-amber-400 text-sm sm:text-base animate-pulse">
          <span>{t('cardsRemaining', lang, { count: cards.length - flippedCards.size })}</span>
        </div>
      )}

      {allFlipped && (
        <div className="animate-fade-in mt-4 sm:mt-8">
          <button
            onClick={handleInterpret}
            className="group relative px-8 sm:px-16 py-4 sm:py-6 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 hover:from-purple-500/80 hover:to-indigo-500/80 backdrop-blur-xl rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 100 100" fill="none">
                <defs>
                  <linearGradient id="aiBtnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#E0E0E0" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="35" stroke="url(#aiBtnGrad)" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="25" stroke="url(#aiBtnGrad)" strokeWidth="2" fill="none" opacity="0.7" />
                <polygon points="50,30 54,42 67,42 57,50 61,62 50,54 39,62 43,50 33,42 46,42" fill="url(#aiBtnGrad)" />
              </svg>
              <span className="text-white text-lg sm:text-2xl font-bold tracking-widest">{t('aiAnalysis', lang)}</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
