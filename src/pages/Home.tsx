import { useState, useEffect } from 'react';
import { ShuffleAnimation } from '../components/ShuffleAnimation';
import { CardSpread } from '../components/FlipCard';
import { QuestionInput } from '../components/QuestionInput';
import { AIInterpretation } from '../components/AIInterpretation';
import { HistoryPanel } from '../components/HistoryPanel';
import { HistoryView } from '../components/HistoryView';
import { InteractiveStarfield, MysticalOrbs } from '../components/InteractiveBackground';
import { SoundSelector } from '../components/SoundSelector';
import { tarotCards, drawCards, getRandomReversed } from '../data/tarotCards';
import type { TarotCard } from '../data/tarotCards';
import type { ReadingHistoryItem } from '../types/history';
import { useLang } from '../hooks/useLang';
import { t, type Lang } from '../i18n';

type SpreadType = 'single' | 'three';
type ModelType = 'timeline' | 'decision' | 'relationship';

interface SpreadConfig {
  name: string;
  positions: string[];
  icon: React.ReactNode;
}

function getModelConfigs(lang: Lang): Record<ModelType, SpreadConfig> {
  return {
    timeline: {
      name: t('timeline', lang),
      positions: [t('timelinePos1', lang), t('timelinePos2', lang), t('timelinePos3', lang)],
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <defs>
          <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <path d="M8 52 L24 20 L40 36 L56 8" stroke="url(#timelineGrad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="52" r="3.5" fill="url(#timelineGrad)" opacity="0.5" />
        <circle cx="24" cy="20" r="3.5" fill="url(#timelineGrad)" opacity="0.7" />
        <circle cx="40" cy="36" r="3.5" fill="url(#timelineGrad)" opacity="0.85" />
        <circle cx="56" cy="8" r="4" fill="url(#timelineGrad)" />
      </svg>
    ),
  },
  decision: {
    name: t('decision', lang),
    positions: [t('decisionPos1', lang), t('decisionPos2', lang), t('decisionPos3', lang)],
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <defs>
          <linearGradient id="decisionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#e879f9" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="20" stroke="url(#decisionGrad)" strokeWidth="1.5" fill="none" />
        <path d="M32 14 L32 32 L46 42" stroke="url(#decisionGrad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="2.5" fill="url(#decisionGrad)" />
        <circle cx="32" cy="14" r="2" fill="url(#decisionGrad)" opacity="0.7" />
        <circle cx="46" cy="42" r="2" fill="url(#decisionGrad)" opacity="0.7" />
      </svg>
    ),
  },
  relationship: {
    name: t('relationship', lang),
    positions: [t('relationshipPos1', lang), t('relationshipPos2', lang), t('relationshipPos3', lang)],
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <defs>
          <linearGradient id="relationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#e879f9" />
          </linearGradient>
        </defs>
        <circle cx="22" cy="22" r="9" stroke="url(#relationGrad)" strokeWidth="1.5" fill="none" />
        <circle cx="42" cy="22" r="9" stroke="url(#relationGrad)" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="44" r="9" stroke="url(#relationGrad)" strokeWidth="1.5" fill="none" />
        <circle cx="22" cy="22" r="3" fill="url(#relationGrad)" />
        <circle cx="42" cy="22" r="3" fill="url(#relationGrad)" />
        <circle cx="32" cy="44" r="3" fill="url(#relationGrad)" />
      </svg>
    ),
  },
  };
}

type Phase =
  | 'spread-select'
  | 'model-select'
  | 'shuffling'
  | 'spreading'
  | 'question'
  | 'interpreting'
  | 'result';

export function Home() {
  const { lang, toggleLang } = useLang();
  const modelConfigs = getModelConfigs(lang);
  const [spreadType, setSpreadType] = useState<SpreadType>('single');
  const [modelType, setModelType] = useState<ModelType>('timeline');
  const [phase, setPhase] = useState<Phase>('spread-select');
  const [drawnCards, setDrawnCards] = useState<
    Array<{ card: TarotCard; isReversed: boolean }>
  >([]);
  const [question, setQuestion] = useState('');
  const [isInterpreting, setIsInterpreting] = useState(false);
  const [currentInterpretation, setCurrentInterpretation] = useState<string>('');
  const [history, setHistory] = useState<ReadingHistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [viewingReading, setViewingReading] = useState<ReadingHistoryItem | null>(null);
  const [shuffleQuestion, setShuffleQuestion] = useState('');

  useEffect(() => {
    const savedHistory = localStorage.getItem('tarot-history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const playShuffleSound = () => {
    try {
      const audio = new Audio(
        'https://cdn.pixabay.com/download/audio/2022/03/15/audio_6b9295d588.mp3?filename=card-shuffle-1-37164.mp3'
      );
      audio.volume = 0.6;
      audio.play().catch(() => {});
    } catch (e) {
      console.log('无法播放音效');
    }
  };

  const playDealSound = () => {
    try {
      const audio = new Audio(
        'https://cdn.pixabay.com/download/audio/2022/10/30/audio_82d334823e.mp3?filename=card-flip-1-47870.mp3'
      );
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } catch (e) {
      console.log('无法播放音效');
    }
  };

  const generateInterpretation = (
    cards: Array<{ card: TarotCard; isReversed: boolean }>,
    question: string,
    positions: string[],
    modelType: ModelType,
    style: 'gentle' | 'direct'
  ) => {
    const coreMeanings: Record<string, { upright: string; reversed: string }> = {
      '愚者': { upright: '冒险、新开始', reversed: '鲁莽或犹豫' },
      '魔术师': { upright: '创造力、显化', reversed: '技拙或欺骗' },
      '女祭司': { upright: '直觉、潜意识', reversed: '疏离、压抑' },
      '皇后': { upright: '丰饶、母性', reversed: '匮乏、虚荣' },
      '皇帝': { upright: '结构、掌控', reversed: '僵化、独裁' },
      '教皇': { upright: '传统、指引', reversed: '叛逆、非传统' },
      '恋人': { upright: '和谐、抉择', reversed: '失衡、错误选择' },
      '战车': { upright: '意志力、胜利', reversed: '失控、挫败' },
      '力量': { upright: '勇气、以柔克刚', reversed: '软弱或粗暴' },
      '隐士': { upright: '内省、孤独', reversed: '孤立、逃避' },
      '命运之轮': { upright: '转变、契机', reversed: '抗拒、厄运' },
      '正义': { upright: '公平、因果', reversed: '偏颇、不公' },
      '倒吊人': { upright: '牺牲、换视角', reversed: '挣扎、拖延' },
      '死神': { upright: '终结、新生', reversed: '抗拒、执念' },
      '节制': { upright: '融合、适度', reversed: '极端、不协调' },
      '恶魔': { upright: '束缚、欲望', reversed: '解脱、觉醒' },
      '高塔': { upright: '突变、崩塌', reversed: '侥幸、延缓' },
      '星星': { upright: '希望、疗愈', reversed: '失望、脱节' },
      '月亮': { upright: '幻觉、不安', reversed: '真相大白' },
      '太阳': { upright: '快乐、成功', reversed: '延迟、小摩擦' },
      '审判': { upright: '觉醒、召唤', reversed: '自我否定' },
      '世界': { upright: '圆满、达成', reversed: '功亏一篑' },
    };

    const questionToScenario = (q: string) => {
      const lowerQ = q.toLowerCase();
      if (lowerQ.includes('分手') || lowerQ.includes('离婚') || lowerQ.includes('分开')) return '分手';
      if (lowerQ.includes('结婚') || lowerQ.includes('表白') || lowerQ.includes('在一起')) return '感情关系';
      if (lowerQ.includes('辞职') || lowerQ.includes('换工作') || lowerQ.includes('跳槽')) return '工作选择';
      if (lowerQ.includes('考试') || lowerQ.includes('学习') || lowerQ.includes('考研')) return '学业';
      if (lowerQ.includes('钱') || lowerQ.includes('投资') || lowerQ.includes('赚钱')) return '财务';
      if (lowerQ.includes('健康') || lowerQ.includes('病')) return '健康';
      if (lowerQ.includes('朋友') || lowerQ.includes('人际关系') || lowerQ.includes('同事')) return '人际关系';
      return '你的问题';
    };

    const scenario = questionToScenario(question);

    const generateSpecificReading = (card: TarotCard, isReversed: boolean) => {
      const meaning = coreMeanings[card.name];
      if (!meaning) {
        const suitNames: Record<string, string> = {
          wands: '权杖（火象）',
          cups: '圣杯（水象）',
          swords: '宝剑（风象）',
          pentacles: '星币（土象）'
        };
        const suitName = suitNames[card.suit || ''] || '';
        return `${card.name}${isReversed ? '逆位' : '正位'} - ${suitName ? `${suitName}，` : ''}${isReversed ? card.reversedMeaning : card.meaning}`;
      }

      const core = isReversed ? meaning.reversed : meaning.upright;

      let advice = '';
      if (scenario === '分手' || scenario === '感情关系') {
        advice = isReversed
          ? style === 'gentle'
            ? '感情上可能需要一些时间。给自己一点空间，慢慢理清思绪会比较好。'
            : '别自欺欺人了。这段关系早就死了，别再用"我还在乎"来骗自己。'
          : style === 'gentle'
            ? '这段关系需要你拿出勇气和行动力。想清楚了就去做，别犹豫。'
            : '醒醒吧，别再等了。要么主动去谈，要么干脆放手，没有第三条路。';
      } else if (scenario === '工作选择') {
        advice = isReversed
          ? style === 'gentle'
            ? '工作上先别急着做决定。给自己一点时间，整理好心情再出发。'
            : '别用"我在考虑"来逃避现实。你不是不想动，你是怕动。'
          : style === 'gentle'
            ? '是时候在工作上做点不一样的了。相信你的能力，放手去试。'
            : '机会来了就抓住，别瞻前顾后。想了那么久，该动了。';
      } else if (scenario === '学业') {
        advice = isReversed
          ? style === 'gentle'
            ? '学习上可能需要调整一下方法，找到更适合自己的节奏会比较好。'
            : '你不是笨，你是懒。别再找借口了，拿起书来。'
          : style === 'gentle'
            ? '你的学习状态在上升，继续保持这个势头，会看到成果的。'
            : '别飘，继续学。有点进步就想躺平，早呢。';
      } else if (scenario === '财务') {
        advice = isReversed
          ? style === 'gentle'
            ? '财务上谨慎一些是好的，先稳住再寻求发展会比较稳妥。'
            : '别假装看不见账本。欠债还钱，少花的每一分都是赚的。'
          : style === 'gentle'
            ? '财运有起色，可以考虑一些稳健的投资方向。'
            : '钱来了别乱花。存起来，别嘚瑟。';
      } else {
        advice = isReversed
          ? style === 'gentle'
            ? '先别急着下结论。给自己一点时间，理清思路再行动。'
            : '别慌，先冷静。越急越乱，越乱越错。'
          : style === 'gentle'
            ? '现在是行动的好时机。相信你的直觉，去做你想做的事。'
            : '想好了就干。别光想不动，想一万遍不如做一遍。';
      }

      return `${card.name}${isReversed ? '逆位' : '正位'}：${core}\n\n${advice}`;
    };

    const calculateOverallTendency = () => {
      const uprightCount = cards.filter(c => !c.isReversed).length;
      const reversedCount = cards.filter(c => c.isReversed).length;

      if (uprightCount >= 2) return 'positive';
      if (reversedCount >= 2) return 'negative';
      return 'neutral';
    };

    const generateSummary = () => {
      const tendency = calculateOverallTendency();

      let summary = '';
      const isYesNoQuestion = question.toLowerCase().includes('吗') ||
        question.toLowerCase().includes('是否') ||
        question.toLowerCase().includes('该不该') ||
        question.toLowerCase().includes('要不要');

      if (scenario === '分手' || scenario === '感情关系') {
        if (tendency === 'positive') {
          summary = style === 'gentle'
            ? '总体来看，这段关系还有希望。建议你保持耐心，用心经营。'
            : '能继续就继续，别作了。';
          if (isYesNoQuestion) {
            summary += style === 'gentle' ? ' 我的建议是：可以尝试。' : ' 答案：是。';
          }
        } else if (tendency === 'negative') {
          summary = style === 'gentle'
            ? '这段关系可能需要重新审视。给自己时间思考，做出最适合自己的决定。'
            : '别再耗着了，分了吧。';
          if (isYesNoQuestion) {
            summary += style === 'gentle' ? ' 我的建议是：暂时不要。' : ' 答案：否。';
          }
        } else {
          summary = style === 'gentle'
            ? '感情的走向还不明朗。建议你保持开放心态，观察一段时间。'
            : '还在纠结？别想了，先放一放。';
        }
      } else if (scenario === '工作选择') {
        if (tendency === 'positive') {
          summary = style === 'gentle'
            ? '工作上的变动是值得考虑的。相信自己的能力，勇敢迈出新的一步。'
            : '该动了，别犹豫。';
          if (isYesNoQuestion) {
            summary += style === 'gentle' ? ' 我的建议是：支持你尝试。' : ' 答案：是，建议。';
          }
        } else if (tendency === 'negative') {
          summary = style === 'gentle'
            ? '现在可能不是变动的最佳时机。先稳定下来，积蓄力量。'
            : '现在别动，等着。';
          if (isYesNoQuestion) {
            summary += style === 'gentle' ? ' 我的建议是：暂时观望。' : ' 答案：否，不建议。';
          }
        } else {
          summary = style === 'gentle'
            ? '工作的方向还在变化中。保持灵活，静观其变。'
            : '还没到时候，再等等。';
        }
      } else if (scenario === '学业') {
        if (tendency === 'positive') {
          summary = style === 'gentle'
            ? '学业上的努力正在见效。继续保持，会有好的结果。'
            : '继续学，别停。';
          if (isYesNoQuestion) {
            summary += style === 'gentle' ? ' 我的建议是：继续坚持。' : ' 答案：是，继续。';
          }
        } else if (tendency === 'negative') {
          summary = style === 'gentle'
            ? '学习上可能遇到了瓶颈。需要调整方法，保持耐心。'
            : '方法不对，改！';
          if (isYesNoQuestion) {
            summary += style === 'gentle' ? ' 我的建议是：调整后再继续。' : ' 答案：否，先改方法。';
          }
        } else {
          summary = style === 'gentle'
            ? '学习状态起起伏伏是正常的。保持平稳心态，稳步前进。'
            : '别慌，正常波动。';
        }
      } else if (scenario === '财务') {
        if (tendency === 'positive') {
          summary = style === 'gentle'
            ? '财务状况在好转。合理规划，可以考虑适当的投资。'
            : '有钱来了，抓住机会。';
          if (isYesNoQuestion) {
            summary += style === 'gentle' ? ' 我的建议是：可以考虑。' : ' 答案：是，建议。';
          }
        } else if (tendency === 'negative') {
          summary = style === 'gentle'
            ? '财务上需要谨慎。先稳为主，避免冒险。'
            : '别乱花钱，省着点。';
          if (isYesNoQuestion) {
            summary += style === 'gentle' ? ' 我的建议是：暂时观望。' : ' 答案：否，不建议。';
          }
        } else {
          summary = style === 'gentle'
            ? '财务状况比较平稳。保持现状，静待时机。'
            : '别折腾，稳着来。';
        }
      } else {
        if (tendency === 'positive') {
          summary = style === 'gentle'
            ? '整体来看，这是一个积极的信号。相信你的直觉，勇敢行动。'
            : '可以做，别犹豫。';
          if (isYesNoQuestion) {
            summary += style === 'gentle' ? ' 我的建议是：支持你。' : ' 答案：是。';
          }
        } else if (tendency === 'negative') {
          summary = style === 'gentle'
            ? '当前时机可能不太理想。建议你放慢脚步，重新审视。'
            : '别做，等等看。';
          if (isYesNoQuestion) {
            summary += style === 'gentle' ? ' 我的建议是：暂时不要。' : ' 答案：否。';
          }
        } else {
          summary = style === 'gentle'
            ? '局势还在变化中。保持耐心，静观其变。'
            : '还没定，再等等。';
        }
      }

      return summary;
    };

    if (cards.length === 1) {
      const reading = generateSpecificReading(cards[0].card, cards[0].isReversed);
      return `${reading}`;
    }

    let result = '';
    cards.forEach((item, index) => {
      const position = positions[index] || `第${index + 1}张牌`;
      const reading = generateSpecificReading(item.card, item.isReversed);
      result += `【${position}】\n${reading}\n\n`;
    });

    result += '---\n\n';
    result += `【综合指引】\n${generateSummary()}`;

    return result;
  };

  const handleShuffleComplete = () => {
    const cardCount = spreadType === 'single' ? 1 : 3;
    const cards = drawCards(tarotCards, cardCount, shuffleQuestion || question);

    const cardsWithReversed = cards.map((card) => ({
      card,
      isReversed: getRandomReversed(),
    }));

    setDrawnCards(cardsWithReversed);
    playDealSound();
    setPhase('spreading');
  };

  const handleSpreadComplete = () => {
    setPhase('question');
  };

  const handleQuestionSubmit = async (q: string, style: 'gentle' | 'direct') => {
    setQuestion(q);
    setIsInterpreting(true);

    const positions = spreadType === 'three' ? modelConfigs[modelType].positions : [''];
    const interpretation = generateInterpretation(drawnCards, q, positions, modelType, style);
    setCurrentInterpretation(interpretation);

    setTimeout(() => {
      setIsInterpreting(false);

      const newHistoryItem: ReadingHistoryItem = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        spreadType,
        cards: drawnCards.map((item) => item.card),
        isReversedList: drawnCards.map((item) => item.isReversed),
        positions,
        question: q,
        interpretation,
      };

      const updatedHistory = [newHistoryItem, ...history];
      setHistory(updatedHistory);
      localStorage.setItem('tarot-history', JSON.stringify(updatedHistory));

      setPhase('result');
    }, 2000);
  };

  const handleReset = () => {
    setPhase('spread-select');
    setDrawnCards([]);
    setQuestion('');
    setShuffleQuestion('');
    setIsInterpreting(false);
    setCurrentInterpretation('');
    setModelType('timeline');
  };

  const handleSpreadChange = (type: SpreadType) => {
    setSpreadType(type);
    setDrawnCards([]);
    if (type === 'single') {
      setPhase('shuffling');
    } else {
      setPhase('model-select');
    }
  };

  const handleModelChange = (type: ModelType) => {
    setModelType(type);
    setPhase('shuffling');
  };

  const handleBack = () => {
    if (phase === 'model-select') {
      setPhase('spread-select');
    } else if (phase === 'shuffling') {
      if (spreadType === 'single') {
        setPhase('spread-select');
      } else {
        setPhase('model-select');
      }
    } else if (phase === 'spreading') {
      setPhase('shuffling');
    } else if (phase === 'question') {
      setPhase('spreading');
    } else if (phase === 'result') {
      setPhase('question');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <InteractiveStarfield />
      <MysticalOrbs />
      <SoundSelector />

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="py-3 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-30" style={{
          background: 'rgba(8, 6, 15, 0.6)',
          backdropFilter: 'blur(20px) saturate(1.5)',
          borderBottom: '1px solid rgba(139, 92, 246, 0.08)',
        }}>
          <h1 className="text-2xl font-bold tracking-widest" style={{
            background: 'linear-gradient(135deg, #e2e8f0 0%, #c4b5fd 30%, #8b5cf6 60%, #22d3ee 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            letterSpacing: '0.15em',
          }}>
            {t('siteTitle', lang)}
          </h1>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-lg text-xs font-medium tracking-wider transition-all duration-300 hover:bg-white/5 border border-white/10 hover:border-purple-500/30"
              style={{
                color: 'rgba(196, 181, 253, 0.8)',
              }}
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
            <button
              onClick={() => setShowHistory(true)}
              className="p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </button>
          </div>
        </header>

        <main className="flex-1 relative px-6 flex items-center justify-center min-h-screen">
          {phase !== 'spread-select' && (
            <button
              onClick={handleBack}
              className="fixed top-16 left-6 z-30 text-gray-500 hover:text-white/80 transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span className="text-sm">{t('back', lang)}</span>
            </button>
          )}

          {phase === 'spread-select' && (
            <div className="w-full max-w-5xl text-center">
              <div className="mb-20">
                <div className="animate-hero-title">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3" style={{
                    background: 'linear-gradient(135deg, #f1f5f9 0%, #c4b5fd 25%, #8b5cf6 50%, #22d3ee 75%, #f1f5f9 100%)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradientShift 6s ease-in-out infinite',
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}>
                    {t('heroLine1', lang)}
                  </h2>
                </div>
                <p className="animate-hero-sub text-lg md:text-xl text-gray-400 max-w-lg mx-auto font-light tracking-wide mb-4" style={{
                  animationDelay: '0.3s',
                }}>
                  {t('heroLine2', lang)}
                </p>
                <p className="animate-hero-sub text-2xl md:text-3xl font-semibold max-w-md mx-auto tracking-wide" style={{
                  animationDelay: '0.5s',
                  background: 'linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 50%, #22d3ee 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradientShift 6s ease-in-out infinite',
                }}>
                  {t('heroLine3', lang)}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <button
                  onClick={() => handleSpreadChange('single')}
                  className="group relative py-16 px-8 rounded-2xl transition-all duration-500 hover:scale-[1.03] animate-hero-card-1 overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(40px) saturate(1.5)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    boxShadow: '0 0 80px rgba(139, 92, 246, 0.04), inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(34, 211, 238, 0.06) 100%)',
                    boxShadow: 'inset 0 0 60px rgba(139, 92, 246, 0.05)',
                  }} />
                  <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                    background: 'linear-gradient(90deg, transparent, rgba(196, 181, 253, 0.3), transparent)',
                  }} />
                  <div className="relative">
                    <div className="h-24 mb-8 flex items-center justify-center">
                      <svg viewBox="0 0 80 100" className="w-20 h-24 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                        <defs>
                          <linearGradient id="singleCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c4b5fd" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#22d3ee" />
                          </linearGradient>
                          <filter id="cardGlow">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feMerge>
                              <feMergeNode in="blur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <rect x="15" y="8" width="50" height="84" rx="6" stroke="url(#singleCardGrad)" strokeWidth="1.5" fill="none" filter="url(#cardGlow)" />
                        <rect x="22" y="16" width="36" height="68" rx="4" stroke="url(#singleCardGrad)" strokeWidth="0.8" fill="none" opacity="0.3" />
                        <circle cx="40" cy="50" r="8" stroke="url(#singleCardGrad)" strokeWidth="1" fill="none" opacity="0.6" />
                        <circle cx="40" cy="50" r="3" fill="url(#singleCardGrad)" opacity="0.8" />
                        <line x1="40" y1="28" x2="40" y2="38" stroke="url(#singleCardGrad)" strokeWidth="0.5" opacity="0.4" />
                        <line x1="40" y1="62" x2="40" y2="72" stroke="url(#singleCardGrad)" strokeWidth="0.5" opacity="0.4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white/90 mb-2 tracking-wide">{t('singleCard', lang)}</h3>
                    <p className="text-gray-500 text-sm font-light">{t('singleCardSub', lang)}</p>
                  </div>
                </button>

                <button
                  onClick={() => handleSpreadChange('three')}
                  className="group relative py-16 px-8 rounded-2xl transition-all duration-500 hover:scale-[1.03] animate-hero-card-2 overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(40px) saturate(1.5)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    boxShadow: '0 0 80px rgba(34, 211, 238, 0.04), inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" style={{
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    boxShadow: 'inset 0 0 60px rgba(34, 211, 238, 0.04)',
                  }} />
                  <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                    background: 'linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.3), transparent)',
                  }} />
                  <div className="relative">
                    <div className="h-24 mb-8 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-24 h-24 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                        <defs>
                          <linearGradient id="threeCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="50%" stopColor="#a78bfa" />
                            <stop offset="100%" stopColor="#e879f9" />
                          </linearGradient>
                          <filter id="cardGlow3">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feMerge>
                              <feMergeNode in="blur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <rect x="8" y="22" width="28" height="56" rx="4" stroke="url(#threeCardGrad)" strokeWidth="1.2" fill="none" opacity="0.4" filter="url(#cardGlow3)" />
                        <rect x="36" y="22" width="28" height="56" rx="4" stroke="url(#threeCardGrad)" strokeWidth="1.2" fill="none" opacity="0.65" filter="url(#cardGlow3)" />
                        <rect x="64" y="22" width="28" height="56" rx="4" stroke="url(#threeCardGrad)" strokeWidth="1.2" fill="none" opacity="0.9" filter="url(#cardGlow3)" />
                        <circle cx="22" cy="50" r="2.5" fill="url(#threeCardGrad)" opacity="0.5" />
                        <circle cx="50" cy="50" r="3" fill="url(#threeCardGrad)" opacity="0.7" />
                        <circle cx="78" cy="50" r="3.5" fill="url(#threeCardGrad)" opacity="0.9" />
                        <line x1="25" y1="50" x2="34" y2="50" stroke="url(#threeCardGrad)" strokeWidth="0.5" opacity="0.3" />
                        <line x1="53" y1="50" x2="62" y2="50" stroke="url(#threeCardGrad)" strokeWidth="0.5" opacity="0.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white/90 mb-2 tracking-wide">{t('threeCards', lang)}</h3>
                    <p className="text-gray-500 text-sm font-light">{t('threeCardsSub', lang)}</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {phase === 'model-select' && (
            <div className="w-full max-w-5xl">
              <div className="text-center mb-14">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" style={{
                  background: 'linear-gradient(135deg, #f1f5f9 0%, #c4b5fd 30%, #8b5cf6 60%, #22d3ee 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradientShift 6s ease-in-out infinite',
                  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}>
                  {t('selectModel', lang)}
                </h2>
                <p className="text-gray-500 font-light">{t('selectModelSub', lang)}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {(Object.keys(modelConfigs) as ModelType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleModelChange(type)}
                    className="group relative py-12 px-6 rounded-2xl transition-all duration-500 hover:scale-[1.03] overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(40px) saturate(1.5)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      boxShadow: '0 0 60px rgba(139, 92, 246, 0.03), inset 0 1px 0 rgba(255,255,255,0.04)',
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" style={{
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)',
                    }} />
                    <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                      background: 'linear-gradient(90deg, transparent, rgba(196, 181, 253, 0.25), transparent)',
                    }} />
                    <div className="relative">
                      <div className="h-16 mb-6 flex items-center justify-center">
                        {modelConfigs[type].icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white/90 mb-3 text-center tracking-wide">{modelConfigs[type].name}</h3>
                      <div className="space-y-1.5">
                        {modelConfigs[type].positions.map((pos, idx) => (
                          <p key={idx} className="text-gray-500 text-xs text-center font-light">{pos}</p>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {phase === 'shuffling' && (
            <ShuffleAnimation onComplete={handleShuffleComplete} onBack={handleBack} cardCount={spreadType === 'single' ? 1 : 3} lang={lang} />
          )}

          {phase === 'spreading' && (
            <CardSpread
              cards={drawnCards}
              onComplete={handleSpreadComplete}
              onBack={handleBack}
              lang={lang}
            />
          )}

          {phase === 'question' && (
            <div className="w-full max-w-6xl lg:max-w-7xl px-4">
              <QuestionInput onSubmit={handleQuestionSubmit} isLoading={isInterpreting} lang={lang} />
            </div>
          )}

          {phase === 'result' && (
            <AIInterpretation
              cards={drawnCards}
              interpretation={currentInterpretation}
              question={question}
              onReset={handleReset}
              onBack={handleBack}
              lang={lang}
            />
          )}
        </main>
      </div>

      {showHistory && (
        <HistoryPanel
          history={history}
          onClose={() => setShowHistory(false)}
          onViewReading={(item) => setViewingReading(item)}
          lang={lang}
        />
      )}
    </div>
  );
}
