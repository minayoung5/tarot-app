import type { TarotCard } from '../data/tarotCards';

interface CardResultProps {
  cards: TarotCard[];
  positions?: string[];
  onClear: () => void;
}

export function CardResult({ cards, positions = [], onClear }: CardResultProps) {
  if (cards.length === 0) return null;

  const renderCardWithPosition = (card: TarotCard, index: number) => {
    const position = positions[index] || '';
    
    return (
      <div key={card.id} className="flex flex-col items-center gap-3">
        {position && (
          <div className="text-center mb-2">
            <span className="text-yellow-400 text-sm font-medium">{position}</span>
          </div>
        )}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-48 h-72 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-yellow-500/30 overflow-hidden shadow-2xl">
              <div className="relative h-48">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
              </div>
              <div className="p-3 bg-slate-900/95">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 text-lg font-bold">{card.name}</span>
                  {card.element && (
                    <span className="text-purple-300 text-sm px-2 py-0.5 bg-purple-900/50 rounded-full">
                      {card.element}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm italic">{card.nameEn}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-48 p-4 bg-slate-800/80 rounded-xl border border-slate-700">
          <h4 className="text-yellow-400 text-sm font-medium mb-2">正位含义</h4>
          <p className="text-slate-300 text-xs leading-relaxed">{card.meaning}</p>
          <h4 className="text-red-400 text-sm font-medium mt-3 mb-2">逆位含义</h4>
          <p className="text-slate-400 text-xs leading-relaxed">{card.reversedMeaning}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8">
        {cards.map((card, index) => renderCardWithPosition(card, index))}
      </div>
      
      <div className="flex justify-center mt-8">
        <button
          onClick={onClear}
          className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-full font-medium transition-all duration-300"
        >
          清除结果
        </button>
      </div>
    </div>
  );
}