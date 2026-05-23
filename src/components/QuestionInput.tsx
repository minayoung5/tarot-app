import { useState } from 'react';
import { type Lang, t } from '../i18n';

interface QuestionInputProps {
  onSubmit: (question: string, style: 'gentle' | 'direct') => void;
  isLoading: boolean;
  lang: Lang;
}

export function QuestionInput({ onSubmit, isLoading, lang }: QuestionInputProps) {
  const [question, setQuestion] = useState('');
  const [style, setStyle] = useState<'gentle' | 'direct'>('gentle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && !isLoading) {
      onSubmit(question, style);
    }
  };

  return (
    <div className="w-full animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold purple-text-gradient mb-4 tracking-wider">
          {t('inputQuestion', lang)}
        </h2>
        <p className="text-base text-gray-500">{t('inputQuestionSub', lang)}</p>
      </div>

      <div
        className="rounded-2xl p-6 md:p-8"
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(40px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(40px) saturate(1.8)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.2)',
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="question" className="sr-only">{t('inputQuestion', lang)}</label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={t('questionPlaceholder', lang)}
              className="w-full min-h-[180px] bg-white/[0.03] border border-white/[0.08] rounded-xl px-6 py-5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none text-base leading-relaxed"
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStyle('gentle')}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                  style === 'gentle'
                    ? 'bg-purple-600/20 border-purple-500/40 text-purple-300'
                    : 'bg-white/[0.03] border-white/[0.08] text-gray-500 hover:text-gray-300 hover:border-white/20'
                }`}
              >
                {t('gentleStyle', lang)}
              </button>
              <button
                type="button"
                onClick={() => setStyle('direct')}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                  style === 'direct'
                    ? 'bg-purple-600/20 border-purple-500/40 text-purple-300'
                    : 'bg-white/[0.03] border-white/[0.08] text-gray-500 hover:text-gray-300 hover:border-white/20'
                }`}
              >
                {t('directStyle', lang)}
              </button>
            </div>

            <div className="flex-1" />

            <button
              type="submit"
              disabled={!question.trim() || isLoading}
              className={`px-8 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                !question.trim() || isLoading
                  ? 'bg-white/[0.03] border border-white/[0.08] text-gray-600 cursor-not-allowed'
                  : 'purple-gradient text-white hover:shadow-lg hover:shadow-purple-500/20 hover:brightness-110'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {t('interpreting', lang)}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  {t('getGuidance', lang)}
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
