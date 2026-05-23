import type { TarotCard } from '../data/tarotCards';
import { type Lang, t } from '../i18n';
import { TarotCardFace } from './TarotCardFace';

interface AIInterpretationProps {
  cards: Array<{ card: TarotCard; isReversed: boolean }>;
  question: string;
  onReset: () => void;
  onBack: () => void;
  interpretation: string;
  lang: Lang;
}

export function AIInterpretation({
  cards,
  question,
  onReset,
  onBack,
  interpretation,
  lang,
}: AIInterpretationProps) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8" />
        <h2 className="text-5xl md:text-6xl font-bold purple-text-gradient mb-6 tracking-wider">
          {t('tarotReading', lang)}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
      </div>

      <div className="glass-card rounded-3xl p-8 mb-12">
        <p className="text-gray-400 text-sm tracking-wider mb-3">{t('yourQuestion', lang)}</p>
        <p className="text-xl md:text-2xl text-purple-300 italic">
          "{question}"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {cards.map((item) => {
          const card = item.card;
          const isReversed = item.isReversed;
          return (
            <div key={card.id} className="relative group">
              <div
                className={`absolute -inset-2 rounded-3xl blur-xl opacity-10 group-hover:opacity-30 transition duration-500 ${
                  isReversed
                    ? 'bg-gradient-to-r from-rose-600 to-purple-600'
                    : 'bg-gradient-to-r from-purple-600 to-amber-600'
                }`}
              />
              <div className="relative transition-all duration-500 group-hover:scale-[1.02]">
                <TarotCardFace card={card} isReversed={isReversed} lang={lang} size="compact" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass-card rounded-3xl p-8 md:p-10 mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v6m0 6v6m6-6h-6m-6 0h-3" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white">{t('readingResult', lang)}</h3>
        </div>
        <div className="prose prose-lg prose-invert max-w-none">
          {interpretation.split('\n').map((paragraph, index) => (
            <p
              key={index}
              className={`leading-relaxed ${
                paragraph.startsWith('---')
                  ? 'border-t border-white/10 my-8 pt-8'
                  : paragraph.startsWith('【')
                  ? 'text-lg font-semibold text-purple-300 mb-6'
                  : 'text-gray-200 mb-6'
              }`}
            >
              {paragraph.startsWith('---') ? '' : paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6">
        <button
          onClick={onBack}
          className="px-8 py-3.5 glass-card rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-gray-300 hover:text-white font-medium"
        >
          {t('redraw', lang)}
        </button>
        <button
          onClick={onReset}
          className="px-8 py-3.5 purple-gradient rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 text-white font-medium hover:shadow-xl hover:shadow-purple-500/25"
        >
          {t('restart', lang)}
        </button>
      </div>
    </div>
  );
}
