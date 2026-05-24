import type { TarotCard } from '../data/tarotCards';

const suitSymbols: Record<string, string> = {
  wands: '🜂',
  cups: '🜄',
  swords: '🜁',
  pentacles: '🜃',
};

const suitColors: Record<string, { primary: string; secondary: string; glow: string }> = {
  wands: { primary: '#f59e0b', secondary: '#ef4444', glow: '#f59e0b' },
  cups: { primary: '#3b82f6', secondary: '#8b5cf6', glow: '#6366f1' },
  swords: { primary: '#94a3b8', secondary: '#e2e8f0', glow: '#cbd5e1' },
  pentacles: { primary: '#22c55e', secondary: '#a16207', glow: '#84cc16' },
};

const majorArcanaSymbols: Record<string, string> = {
  '愚者': '0', '魔术师': 'Ⅰ', '女祭司': 'Ⅱ', '女皇': 'Ⅲ', '皇帝': 'Ⅳ',
  '教皇': 'Ⅴ', '恋人': 'Ⅵ', '战车': 'Ⅶ', '力量': 'Ⅷ', '隐士': 'Ⅸ',
  '命运之轮': 'Ⅹ', '正义': 'Ⅺ', '倒吊人': 'Ⅻ', '死神': 'XIII', '节制': 'XIV',
  '恶魔': 'XV', '高塔': 'XVI', '星星': 'XVII', '月亮': 'XVIII', '太阳': 'XIX',
  '审判': 'XX', '世界': 'XXI',
};

const majorArcanaColors: Record<string, { primary: string; secondary: string; glow: string }> = {
  '愚者': { primary: '#fbbf24', secondary: '#f97316', glow: '#fbbf24' },
  '魔术师': { primary: '#a78bfa', secondary: '#ec4899', glow: '#a78bfa' },
  '女祭司': { primary: '#6366f1', secondary: '#1e1b4b', glow: '#818cf8' },
  '女皇': { primary: '#34d399', secondary: '#f472b6', glow: '#34d399' },
  '皇帝': { primary: '#ef4444', secondary: '#7c3aed', glow: '#ef4444' },
  '教皇': { primary: '#f59e0b', secondary: '#6366f1', glow: '#f59e0b' },
  '恋人': { primary: '#ec4899', secondary: '#8b5cf6', glow: '#f472b6' },
  '战车': { primary: '#3b82f6', secondary: '#8b5cf6', glow: '#60a5fa' },
  '力量': { primary: '#f59e0b', secondary: '#ef4444', glow: '#fbbf24' },
  '隐士': { primary: '#6b7280', secondary: '#1f2937', glow: '#9ca3af' },
  '命运之轮': { primary: '#8b5cf6', secondary: '#06b6d4', glow: '#a78bfa' },
  '正义': { primary: '#e2e8f0', secondary: '#6366f1', glow: '#cbd5e1' },
  '倒吊人': { primary: '#6366f1', secondary: '#ec4899', glow: '#818cf8' },
  '死神': { primary: '#1f2937', secondary: '#7c3aed', glow: '#374151' },
  '节制': { primary: '#06b6d4', secondary: '#8b5cf6', glow: '#22d3ee' },
  '恶魔': { primary: '#7c2d12', secondary: '#991b1b', glow: '#b45309' },
  '高塔': { primary: '#ef4444', secondary: '#f97316', glow: '#f87171' },
  '星星': { primary: '#818cf8', secondary: '#22d3ee', glow: '#a5b4fc' },
  '月亮': { primary: '#6366f1', secondary: '#a78bfa', glow: '#818cf8' },
  '太阳': { primary: '#fbbf24', secondary: '#f97316', glow: '#fcd34d' },
  '审判': { primary: '#a78bfa', secondary: '#f472b6', glow: '#c084fc' },
  '世界': { primary: '#34d399', secondary: '#8b5cf6', glow: '#6ee7b7' },
};

const numberSymbols: Record<number, string> = {
  1: 'Ⅰ', 2: 'Ⅱ', 3: 'Ⅲ', 4: 'Ⅳ', 5: 'Ⅴ',
  6: 'Ⅵ', 7: 'Ⅶ', 8: 'Ⅷ', 9: 'Ⅸ', 10: 'Ⅹ',
};

const courtTitles: Record<string, string> = {
  '侍从': 'Page', '骑士': 'Knight', '王后': 'Queen', '国王': 'King',
};

function getSuitIcon(suit: string): string {
  switch (suit) {
    case 'wands': return '♠';
    case 'cups': return '♥';
    case 'swords': return '♣';
    case 'pentacles': return '♦';
    default: return '✦';
  }
}

function drawSuitPattern(suit: string, count: number): string {
  const icon = getSuitIcon(suit);
  const positions: Array<{x: number; y: number}> = [];

  if (count === 1) {
    positions.push({ x: 150, y: 225 });
  } else if (count === 2) {
    positions.push({ x: 150, y: 150 }, { x: 150, y: 300 });
  } else if (count === 3) {
    positions.push({ x: 150, y: 120 }, { x: 150, y: 225 }, { x: 150, y: 330 });
  } else if (count === 4) {
    positions.push({ x: 100, y: 150 }, { x: 200, y: 150 }, { x: 100, y: 300 }, { x: 200, y: 300 });
  } else if (count === 5) {
    positions.push({ x: 100, y: 130 }, { x: 200, y: 130 }, { x: 150, y: 225 }, { x: 100, y: 320 }, { x: 200, y: 320 });
  } else if (count === 6) {
    positions.push({ x: 100, y: 130 }, { x: 200, y: 130 }, { x: 100, y: 225 }, { x: 200, y: 225 }, { x: 100, y: 320 }, { x: 200, y: 320 });
  } else if (count === 7) {
    positions.push({ x: 100, y: 110 }, { x: 200, y: 110 }, { x: 150, y: 180 }, { x: 100, y: 250 }, { x: 200, y: 250 }, { x: 100, y: 330 }, { x: 200, y: 330 });
  } else if (count === 8) {
    positions.push({ x: 100, y: 110 }, { x: 200, y: 110 }, { x: 100, y: 185 }, { x: 200, y: 185 }, { x: 100, y: 260 }, { x: 200, y: 260 }, { x: 100, y: 335 }, { x: 200, y: 335 });
  } else if (count === 9) {
    positions.push({ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 175 }, { x: 200, y: 175 }, { x: 150, y: 225 }, { x: 100, y: 275 }, { x: 200, y: 275 }, { x: 100, y: 350 }, { x: 200, y: 350 });
  } else if (count === 10) {
    positions.push({ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 150, y: 150 }, { x: 100, y: 200 }, { x: 200, y: 200 }, { x: 100, y: 250 }, { x: 200, y: 250 }, { x: 150, y: 300 }, { x: 100, y: 350 }, { x: 200, y: 350 });
  }

  return positions.map(p =>
    `<text x="${p.x}" y="${p.y}" text-anchor="middle" dominant-baseline="central" font-size="28" fill="currentColor" opacity="0.7">${icon}</text>`
  ).join('\n');
}

interface TarotCardArtProps {
  card: TarotCard;
}

export function TarotCardArt({ card }: TarotCardArtProps) {
  const isMajor = card.type === 'major';
  const colors = isMajor
    ? (majorArcanaColors[card.name] || { primary: '#a78bfa', secondary: '#6366f1', glow: '#818cf8' })
    : (suitColors[card.suit || ''] || { primary: '#a78bfa', secondary: '#6366f1', glow: '#818cf8' });

  const gradId = `grad-${card.id}`;
  const glowId = `glow-${card.id}`;
  const patternId = `pattern-${card.id}`;

  let centralContent = '';
  let topLabel = '';
  let bottomLabel = '';

  if (isMajor) {
    const roman = majorArcanaSymbols[card.name] || '';
    topLabel = `<text x="150" y="35" text-anchor="middle" font-size="16" fill="${colors.primary}" font-weight="bold" opacity="0.8">${roman}</text>`;
    centralContent = `
      <circle cx="150" cy="210" r="70" fill="none" stroke="${colors.primary}" stroke-width="1.5" opacity="0.3" />
      <circle cx="150" cy="210" r="55" fill="none" stroke="${colors.secondary}" stroke-width="1" opacity="0.2" />
      <text x="150" y="195" text-anchor="middle" font-size="36" fill="${colors.primary}" font-weight="bold" opacity="0.9">${roman}</text>
      <text x="150" y="235" text-anchor="middle" font-size="14" fill="${colors.secondary}" opacity="0.7">${card.nameEn}</text>
    `;
    bottomLabel = `<text x="150" y="430" text-anchor="middle" font-size="14" fill="${colors.primary}" opacity="0.6">${card.name}</text>`;
  } else {
    const suit = card.suit || '';
    const number = card.number || 0;
    const isCourt = number === 11 || number === 12 || number === 13 || number === 14;

    if (isCourt) {
      const courtKey = Object.keys(courtTitles).find(k => card.name.includes(k)) || '';
      const courtSymbol = courtKey === '侍从' ? '🗡' : courtKey === '骑士' ? '🐎' : courtKey === '王后' ? '👑' : courtKey === '国王' ? '♚' : '✦';
      const suitIcon = getSuitIcon(suit);

      topLabel = `<text x="150" y="35" text-anchor="middle" font-size="14" fill="${colors.primary}" font-weight="bold" opacity="0.8">${card.name.replace(courtKey, '').trim()}</text>`;
      centralContent = `
        <circle cx="150" cy="210" r="65" fill="none" stroke="${colors.primary}" stroke-width="1.5" opacity="0.3" />
        <circle cx="150" cy="210" r="50" fill="none" stroke="${colors.secondary}" stroke-width="1" opacity="0.2" />
        <text x="150" y="195" text-anchor="middle" font-size="40" fill="${colors.primary}" opacity="0.9">${courtSymbol}</text>
        <text x="150" y="240" text-anchor="middle" font-size="20" fill="${colors.secondary}" opacity="0.7">${suitIcon}</text>
      `;
    } else {
      const numSymbol = numberSymbols[number] || String(number);
      topLabel = `<text x="150" y="35" text-anchor="middle" font-size="16" fill="${colors.primary}" font-weight="bold" opacity="0.8">${numSymbol}</text>`;
      centralContent = `
        ${drawSuitPattern(suit, number)}
      `;
    }
    bottomLabel = `<text x="150" y="430" text-anchor="middle" font-size="12" fill="${colors.primary}" opacity="0.6">${card.name}</text>`;
  }

  const svgContent = `
    <svg viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors.primary}" stop-opacity="0.15" />
          <stop offset="50%" stop-color="${colors.secondary}" stop-opacity="0.08" />
          <stop offset="100%" stop-color="${colors.primary}" stop-opacity="0.12" />
        </linearGradient>
        <radialGradient id="${glowId}" cx="50%" cy="45%" r="40%">
          <stop offset="0%" stop-color="${colors.glow}" stop-opacity="0.2" />
          <stop offset="100%" stop-color="${colors.glow}" stop-opacity="0" />
        </radialGradient>
        <pattern id="${patternId}" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="0.5" fill="${colors.primary}" opacity="0.15" />
        </pattern>
      </defs>

      <rect width="300" height="450" fill="url(#${gradId})" />
      <rect width="300" height="450" fill="url(#${glowId})" />
      <rect width="300" height="450" fill="url(#${patternId})" />

      <rect x="15" y="15" width="270" height="420" rx="12" fill="none" stroke="${colors.primary}" stroke-width="1" opacity="0.2" />
      <rect x="25" y="25" width="250" height="410" rx="8" fill="none" stroke="${colors.primary}" stroke-width="0.5" opacity="0.1" />

      <circle cx="30" cy="30" r="3" fill="${colors.primary}" opacity="0.3" />
      <circle cx="270" cy="30" r="3" fill="${colors.primary}" opacity="0.3" />
      <circle cx="30" cy="420" r="3" fill="${colors.primary}" opacity="0.3" />
      <circle cx="270" cy="420" r="3" fill="${colors.primary}" opacity="0.3" />

      ${topLabel}
      ${centralContent}
      ${bottomLabel}
    </svg>
  `;

  return (
    <div
      className="w-full h-full"
      style={{ color: colors.primary }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
