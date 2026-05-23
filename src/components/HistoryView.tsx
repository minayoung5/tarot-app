import type { ReadingHistoryItem } from '../types/history';

interface HistoryViewProps {
  reading: ReadingHistoryItem;
  onClose: () => void;
}

export function HistoryView({ reading, onClose }: HistoryViewProps) {
  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      weekday: 'long'
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-scale">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-200 tracking-wider flex items-center gap-2">
                <span>📜</span>
                {reading.spreadType === 'single' ? '单张抽牌' : '三张牌阵'}
              </h2>
              <p className="text-slate-400 text-sm mt-1">{formatDate(reading.timestamp)}</p>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-2xl hover:bg-white/10 transition-colors text-slate-400 hover:text-slate-200"
            >
              ×
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-purple-300 mb-2 tracking-wider">你的问题</h3>
            <p className="text-xl text-purple-200 italic bg-white/5 rounded-2xl px-6 py-4 border border-white/10">
              "{reading.question}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reading.cards.map((card, i) => (
              <div key={card.id} className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-md opacity-20" />
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
                    {reading.positions[i] && (
                      <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                        <span className="text-amber-200 text-sm font-semibold tracking-widest">
                          {reading.positions[i]}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-amber-300 mb-1 tracking-wide">
                        {card.name}
                      </h3>
                      <p className="text-slate-300 italic text-base">{card.nameEn}</p>
                      {card.element && (
                        <span className="text-purple-300 text-xs px-3 py-1.5 bg-purple-900/40 backdrop-blur-sm rounded-full border border-purple-400/30 mt-2 inline-block">
                          {card.element}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-purple-300 mb-4 tracking-wider flex items-center gap-2">
              <span>💫</span>
              塔罗解读
            </h3>
            <div className="bg-white/5 rounded-2xl px-6 py-5 border border-white/10">
              <p className="text-slate-300 leading-relaxed">{reading.interpretation}</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-br from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white rounded-2xl font-semibold transition-all duration-300 shadow-xl hover:shadow-purple-500/40 hover:scale-105 active:scale-[0.97]"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
