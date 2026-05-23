import type { TarotCard } from '../data/tarotCards';
import { type Lang, t } from '../i18n';

interface TarotCardFaceProps {
  card: TarotCard;
  isReversed: boolean;
  position?: string;
  lang: Lang;
  size?: 'full' | 'compact';
}

export function TarotCardFace({ card, isReversed, position, lang, size = 'full' }: TarotCardFaceProps) {
  const borderColor = isReversed ? 'border-rose-400/50' : 'border-amber-400/50';
  const textColor = isReversed ? 'text-rose-300' : 'text-amber-300';
  const labelColor = isReversed ? 'text-rose-200' : 'text-slate-200';
  const badgeBg = isReversed ? 'bg-rose-600/80 border-rose-400/40' : 'bg-purple-600/80 border-purple-400/40';
  const overlayGradient = isReversed
    ? 'bg-gradient-to-br from-rose-500/15 to-slate-900/10'
    : 'bg-gradient-to-br from-purple-500/15 to-amber-500/10';
  const dividerColor = isReversed
    ? 'bg-gradient-to-r from-transparent via-rose-500/30 to-transparent'
    : 'bg-gradient-to-r from-transparent via-amber-500/30 to-transparent';

  if (size === 'compact') {
    return (
      <div className="relative h-full rounded-2xl overflow-hidden border border-white/10">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover"
          style={{ transform: isReversed ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
        <div className={`absolute inset-0 ${overlayGradient}`} />

        <div className={`absolute top-3 right-3 px-2.5 py-1 ${badgeBg} backdrop-blur-xl rounded-full border shadow-lg`}>
          <span className="text-white text-xs font-medium">
            {isReversed ? t('reversed', lang) : t('upright', lang)}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className={`text-lg font-bold ${textColor}`}>{card.name}</h3>
          <p className="text-slate-400 text-xs">{card.nameEn}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 ${borderColor} overflow-hidden flex flex-col`}
      style={{ transform: isReversed ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <div className="flex-1 relative">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
        <div className={`absolute inset-0 ${overlayGradient}`} />

        {position && (
          <div
            className={`absolute top-5 left-5 px-5 py-2.5 ${badgeBg} backdrop-blur-xl rounded-full border shadow-lg`}
          >
            <span className="text-sm font-semibold tracking-widest text-white">
              {position}
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end justify-between">
            <div>
              <h3 className={`text-2xl font-bold ${textColor}`}>{card.name}</h3>
              <p className="text-slate-400 text-sm italic">{card.nameEn}</p>
            </div>
            {card.element && (
              <span className="text-lg opacity-60">{card.element}</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 text-slate-500 px-5 py-3">
        <div className={`flex-1 h-px ${dividerColor}`} />
        <span className="text-base text-amber-400/50">✦</span>
        <div className={`flex-1 h-px ${dividerColor}`} />
      </div>

      <div className="px-5 pb-5">
        <p className={`text-sm leading-relaxed ${labelColor}`}>
          <span className="font-semibold">
            {isReversed ? t('reversedLabel', lang) : t('uprightLabel', lang)}
          </span>
          {isReversed ? card.reversedMeaning : card.meaning}
        </p>
      </div>
    </div>
  );
}
