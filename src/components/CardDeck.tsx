import { useState } from 'react';
import { TarotCard } from './TarotCard';
import { tarotCards, drawCards } from '../data/tarotCards';
import type { TarotCard as TarotCardType } from '../data/tarotCards';

interface CardDeckProps {
  onCardDrawn: (card: TarotCardType) => void;
  disabled?: boolean;
}

export function CardDeck({ onCardDrawn, disabled = false }: CardDeckProps) {
  const [cards, setCards] = useState<TarotCardType[]>([...tarotCards].sort(() => Math.random() - 0.5));
  const [isDrawing, setIsDrawing] = useState(false);

  const handleDraw = () => {
    if (disabled || isDrawing || cards.length === 0) return;

    setIsDrawing(true);
    
    setTimeout(() => {
      if (cards.length > 0) {
        const drawnCard = cards[0];
        onCardDrawn(drawnCard);
        setCards(prev => prev.slice(1));
      }
      setIsDrawing(false);
    }, 800);
  };

  const handleReset = () => {
    setCards([...tarotCards].sort(() => Math.random() - 0.5));
  };

  const stackOffset = 8;
  const visibleCards = Math.min(cards.length, 7);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative h-56 flex items-end">
        {Array.from({ length: visibleCards }).map((_, index) => {
          const actualIndex = index;
          const card = cards[actualIndex];
          const offset = index * stackOffset;
          
          return (
            <div
              key={actualIndex}
              className="absolute transition-all duration-300"
              style={{
                left: `calc(50% - 64px + ${offset * 0.5}px)`,
                bottom: `${offset}px`,
                zIndex: index,
                transform: isDrawing && index === 0 ? 'translateY(-40px) scale(1.1)' : 'translateY(0)',
                opacity: index === 0 ? 1 : 0.7 - index * 0.05
              }}
            >
              <TarotCard
                card={card}
                isRevealed={false}
                size="medium"
              />
            </div>
          );
        })}
        
        {cards.length === 0 && (
          <div className="text-center">
            <div className="w-32 h-48 rounded-xl border-2 border-dashed border-purple-500/30 flex items-center justify-center">
              <span className="text-purple-400/50 text-sm">牌堆已空</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleDraw}
          disabled={disabled || isDrawing || cards.length === 0}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:from-gray-600 disabled:to-gray-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/50 disabled:shadow-none hover:scale-105 disabled:scale-100"
        >
          {isDrawing ? '抽牌中...' : '抽取塔罗牌'}
        </button>
        
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-full font-medium transition-all duration-300"
        >
          重置牌堆
        </button>
      </div>

      <p className="text-slate-400 text-sm">剩余 {cards.length} 张牌</p>
    </div>
  );
}