import { useState } from 'react';
import type { ReadingHistoryItem } from '../types/history';
import { type Lang, t } from '../i18n';

interface HistoryPanelProps {
  history: ReadingHistoryItem[];
  onClose: () => void;
  onViewReading: (reading: ReadingHistoryItem) => void;
  lang: Lang;
}

export function HistoryPanel({ history, onClose, onViewReading, lang }: HistoryPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed top-0 right-0 h-full w-96 bg-white/5 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-200 tracking-wider flex items-center gap-2">
          <span>📜</span>
          {t('history', lang)}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-xl hover:bg-white/10 transition-colors text-slate-400 hover:text-slate-200"
          >
            {isExpanded ? '−' : '+'}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-white/10 transition-colors text-slate-400 hover:text-slate-200"
          >
            ×
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 overflow-y-auto h-[calc(100%-80px)]">
          {history.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <div className="text-4xl mb-3">🔮</div>
              <p>{t('noHistory', lang)}</p>
              <p className="text-sm mt-2">{t('noHistorySub', lang)}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {history.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onViewReading(item)}
                  className="bg-white/5 hover:bg-white/10 rounded-2xl p-4 border border-white/10 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-slate-200 font-medium">
                        {item.spreadType === 'single' ? t('singleSpread', lang) : t('threeSpread', lang)}
                      </p>
                      <p className="text-slate-400 text-xs">{formatDate(item.timestamp)}</p>
                    </div>
                    <div className="flex gap-1">
                      {item.cards.slice(0, 3).map((card, i) => (
                        <img
                          key={i}
                          src={card.image}
                          alt={card.name}
                          className="w-8 h-12 rounded-lg object-cover border border-slate-500/30"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm line-clamp-2 italic">
                    "{item.question}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
