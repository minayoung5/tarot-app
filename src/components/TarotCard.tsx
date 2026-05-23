import { useState } from 'react';
import type { TarotCard as TarotCardType } from '../data/tarotCards';

interface TarotCardProps {
  card: TarotCardType;
  isRevealed: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function TarotCard({ card, isRevealed, onClick, size = 'medium', className = '' }: TarotCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (onClick) {
      setIsAnimating(true);
      onClick();
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const sizeClasses = {
    small: 'w-24 h-36',
    medium: 'w-32 h-48',
    large: 'w-40 h-60'
  };

  return (
    <div
      className={`relative cursor-pointer perspective-1000 ${sizeClasses[size]} ${className}`}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
          isAnimating ? 'animate-flip' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div
          className="absolute inset-0 rounded-xl shadow-xl backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 border-2 border-purple-500/50 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
            <div className="text-center relative z-10">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-3xl">🔮</span>
              </div>
              <p className="text-purple-300 text-xs font-medium tracking-wider">TAROT</p>
            </div>
            <div className="absolute top-2 left-2 w-4 h-4 border border-purple-400/50 rounded-full" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border border-purple-400/50 rounded-full" />
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-xl shadow-xl backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-yellow-500/30 overflow-hidden flex flex-col">
            <div className="flex-1 relative">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            </div>
            <div className="p-2 bg-slate-900/90">
              <div className="flex justify-between items-center mb-1">
                <span className="text-yellow-400 text-xs font-bold">{card.name}</span>
                {card.element && (
                  <span className="text-purple-300 text-xs">{card.element}</span>
                )}
              </div>
              <p className="text-slate-400 text-xs italic">{card.nameEn}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}