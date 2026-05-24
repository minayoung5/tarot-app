import type { TarotCard } from '../data/tarotCards';

const suitColors: Record<string, { primary: string; secondary: string; accent: string; bg1: string; bg2: string }> = {
  wands: { primary: '#f59e0b', secondary: '#ef4444', accent: '#fbbf24', bg1: '#451a03', bg2: '#1c1917' },
  cups: { primary: '#60a5fa', secondary: '#a78bfa', accent: '#93c5fd', bg1: '#1e1b4b', bg2: '#0f0a1e' },
  swords: { primary: '#cbd5e1', secondary: '#94a3b8', accent: '#e2e8f0', bg1: '#1e293b', bg2: '#0f172a' },
  pentacles: { primary: '#4ade80', secondary: '#a16207', accent: '#86efac', bg1: '#14532d', bg2: '#0a1f13' },
};

const majorColors: Record<string, { primary: string; secondary: string; accent: string; bg1: string; bg2: string }> = {
  '愚者': { primary: '#fbbf24', secondary: '#f97316', accent: '#fde68a', bg1: '#451a03', bg2: '#1c1917' },
  '魔术师': { primary: '#a78bfa', secondary: '#ec4899', accent: '#c4b5fd', bg1: '#3b0764', bg2: '#1a0a2e' },
  '女祭司': { primary: '#818cf8', secondary: '#6366f1', accent: '#a5b4fc', bg1: '#1e1b4b', bg2: '#0c0a1d' },
  '女皇': { primary: '#34d399', secondary: '#f472b6', accent: '#6ee7b7', bg1: '#064e3b', bg2: '#0a1f17' },
  '皇帝': { primary: '#ef4444', secondary: '#7c3aed', accent: '#fca5a5', bg1: '#450a0a', bg2: '#1a0a0a' },
  '教皇': { primary: '#f59e0b', secondary: '#8b5cf6', accent: '#fcd34d', bg1: '#451a03', bg2: '#1c0a2e' },
  '恋人': { primary: '#f472b6', secondary: '#8b5cf6', accent: '#fbcfe8', bg1: '#500724', bg2: '#1a0a2e' },
  '战车': { primary: '#3b82f6', secondary: '#8b5cf6', accent: '#93c5fd', bg1: '#1e3a5f', bg2: '#0f172a' },
  '力量': { primary: '#fbbf24', secondary: '#ef4444', accent: '#fde68a', bg1: '#451a03', bg2: '#1c1917' },
  '隐士': { primary: '#9ca3af', secondary: '#6b7280', accent: '#d1d5db', bg1: '#1f2937', bg2: '#111827' },
  '命运之轮': { primary: '#a78bfa', secondary: '#06b6d4', accent: '#c4b5fd', bg1: '#3b0764', bg2: '#0c1a2e' },
  '正义': { primary: '#e2e8f0', secondary: '#6366f1', accent: '#f1f5f9', bg1: '#1e293b', bg2: '#0f172a' },
  '倒吊人': { primary: '#818cf8', secondary: '#ec4899', accent: '#a5b4fc', bg1: '#1e1b4b', bg2: '#1a0a2e' },
  '死神': { primary: '#9ca3af', secondary: '#7c3aed', accent: '#d1d5db', bg1: '#111827', bg2: '#1a0a2e' },
  '节制': { primary: '#22d3ee', secondary: '#8b5cf6', accent: '#67e8f9', bg1: '#083344', bg2: '#1a0a2e' },
  '恶魔': { primary: '#b45309', secondary: '#991b1b', accent: '#d97706', bg1: '#1c0a00', bg2: '#1a0505' },
  '高塔': { primary: '#ef4444', secondary: '#f97316', accent: '#fca5a5', bg1: '#450a0a', bg2: '#1c0a00' },
  '星星': { primary: '#a5b4fc', secondary: '#22d3ee', accent: '#c7d2fe', bg1: '#1e1b4b', bg2: '#083344' },
  '月亮': { primary: '#818cf8', secondary: '#c084fc', accent: '#a5b4fc', bg1: '#1e1b4b', bg2: '#2e1065' },
  '太阳': { primary: '#fbbf24', secondary: '#f97316', accent: '#fde68a', bg1: '#451a03', bg2: '#1c1917' },
  '审判': { primary: '#c084fc', secondary: '#f472b6', accent: '#d8b4fe', bg1: '#3b0764', bg2: '#500724' },
  '世界': { primary: '#34d399', secondary: '#8b5cf6', accent: '#6ee7b7', bg1: '#064e3b', bg2: '#2e1065' },
};

const romanNumerals: Record<string, string> = {
  '愚者': '0', '魔术师': 'I', '女祭司': 'II', '女皇': 'III', '皇帝': 'IV',
  '教皇': 'V', '恋人': 'VI', '战车': 'VII', '力量': 'VIII', '隐士': 'IX',
  '命运之轮': 'X', '正义': 'XI', '倒吊人': 'XII', '死神': 'XIII', '节制': 'XIV',
  '恶魔': 'XV', '高塔': 'XVI', '星星': 'XVII', '月亮': 'XVIII', '太阳': 'XIX',
  '审判': 'XX', '世界': 'XXI',
};

const numberToRoman: Record<number, string> = {
  1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V',
  6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
};

function drawWand(x: number, y: number, scale: number = 1): string {
  const s = scale;
  return `
    <g transform="translate(${x},${y}) scale(${s})">
      <line x1="0" y1="20" x2="0" y2="-20" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="0" cy="-24" rx="4" ry="6" fill="#ef4444" opacity="0.8"/>
      <ellipse cx="0" cy="-28" rx="2.5" ry="4" fill="#fbbf24" opacity="0.6"/>
      <ellipse cx="0" cy="-31" rx="1.5" ry="2.5" fill="#fef3c7" opacity="0.4"/>
      <line x1="-3" y1="8" x2="-6" y2="14" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="3" y1="8" x2="6" y2="14" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round"/>
    </g>`;
}

function drawCup(x: number, y: number, scale: number = 1): string {
  const s = scale;
  return `
    <g transform="translate(${x},${y}) scale(${s})">
      <path d="M-8,-12 L-6,4 Q0,8 6,4 L8,-12 Z" fill="#60a5fa" opacity="0.7" stroke="#93c5fd" stroke-width="0.8"/>
      <ellipse cx="0" cy="-12" rx="8" ry="2.5" fill="#93c5fd" opacity="0.5"/>
      <path d="M-3,-14 Q0,-20 3,-14" fill="none" stroke="#c4b5fd" stroke-width="0.8" opacity="0.6"/>
      <line x1="0" y1="4" x2="0" y2="10" stroke="#60a5fa" stroke-width="1.5"/>
      <ellipse cx="0" cy="12" rx="6" ry="2" fill="#60a5fa" opacity="0.4"/>
      <circle cx="0" cy="-6" r="2" fill="#c4b5fd" opacity="0.3"/>
    </g>`;
}

function drawSword(x: number, y: number, scale: number = 1): string {
  const s = scale;
  return `
    <g transform="translate(${x},${y}) scale(${s})">
      <line x1="0" y1="-28" x2="0" y2="12" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
      <path d="M0,-28 L-4,-18 L0,-20 L4,-18 Z" fill="#e2e8f0" opacity="0.8"/>
      <line x1="-8" y1="-4" x2="8" y2="-4" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="0" cy="-4" r="2" fill="#e2e8f0"/>
      <line x1="0" y1="12" x2="0" y2="20" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
      <line x1="-3" y1="20" x2="3" y2="20" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
    </g>`;
}

function drawPentacle(x: number, y: number, scale: number = 1): string {
  const s = scale;
  return `
    <g transform="translate(${x},${y}) scale(${s})">
      <circle cx="0" cy="0" r="14" fill="none" stroke="#4ade80" stroke-width="1.5" opacity="0.6"/>
      <circle cx="0" cy="0" r="11" fill="#14532d" opacity="0.4"/>
      <polygon points="0,-10 2.9,-3.1 10,-3.1 4.5,2.4 6.9,9.5 0,5 -6.9,9.5 -4.5,2.4 -10,-3.1 -2.9,-3.1" fill="#4ade80" opacity="0.7" stroke="#86efac" stroke-width="0.5"/>
      <circle cx="0" cy="0" r="3" fill="#86efac" opacity="0.4"/>
    </g>`;
}

const suitDrawFns: Record<string, (x: number, y: number, s?: number) => string> = {
  wands: drawWand,
  cups: drawCup,
  swords: drawSword,
  pentacles: drawPentacle,
};

const suitPositions: Record<number, Array<{x: number; y: number}>> = {
  1: [{ x: 150, y: 210 }],
  2: [{ x: 150, y: 140 }, { x: 150, y: 280 }],
  3: [{ x: 150, y: 110 }, { x: 150, y: 210 }, { x: 150, y: 310 }],
  4: [{ x: 100, y: 140 }, { x: 200, y: 140 }, { x: 100, y: 280 }, { x: 200, y: 280 }],
  5: [{ x: 100, y: 120 }, { x: 200, y: 120 }, { x: 150, y: 210 }, { x: 100, y: 300 }, { x: 200, y: 300 }],
  6: [{ x: 100, y: 120 }, { x: 200, y: 120 }, { x: 100, y: 210 }, { x: 200, y: 210 }, { x: 100, y: 300 }, { x: 200, y: 300 }],
  7: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 150, y: 170 }, { x: 100, y: 240 }, { x: 200, y: 240 }, { x: 100, y: 310 }, { x: 200, y: 310 }],
  8: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 175 }, { x: 200, y: 175 }, { x: 100, y: 250 }, { x: 200, y: 250 }, { x: 100, y: 325 }, { x: 200, y: 325 }],
  9: [{ x: 100, y: 90 }, { x: 200, y: 90 }, { x: 100, y: 165 }, { x: 200, y: 165 }, { x: 150, y: 210 }, { x: 100, y: 255 }, { x: 200, y: 255 }, { x: 100, y: 330 }, { x: 200, y: 330 }],
  10: [{ x: 100, y: 90 }, { x: 200, y: 90 }, { x: 150, y: 140 }, { x: 100, y: 190 }, { x: 200, y: 190 }, { x: 100, y: 240 }, { x: 200, y: 240 }, { x: 150, y: 290 }, { x: 100, y: 340 }, { x: 200, y: 340 }],
};

const majorSymbols: Record<string, string> = {
  '愚者': `<circle cx="150" cy="180" r="35" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M150,155 L150,130" stroke="COLOR" stroke-width="2" stroke-linecap="round" opacity="0.6"/><circle cx="150" cy="125" r="5" fill="COLOR" opacity="0.5"/><path d="M140,200 Q150,215 160,200" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M130,195 Q150,225 170,195" fill="none" stroke="COLOR" stroke-width="1" opacity="0.3"/>`,
  '魔术师': `<path d="M120,210 Q150,170 180,210 Q150,250 120,210 Z" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.5"/><line x1="150" y1="160" x2="150" y2="260" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><circle cx="150" cy="210" r="8" fill="COLOR" opacity="0.3"/>`,
  '女祭司': `<rect x="125" y="160" width="50" height="80" rx="4" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M140,160 Q150,140 160,160" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.5"/><circle cx="140" cy="200" r="6" fill="COLOR" opacity="0.2"/><circle cx="160" cy="200" r="6" fill="COLOR" opacity="0.2"/><path d="M145,180 Q150,170 155,180" fill="none" stroke="COLOR" stroke-width="1" opacity="0.4"/>`,
  '女皇': `<path d="M130,170 Q150,150 170,170 Q170,200 150,220 Q130,200 130,170 Z" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.5"/><circle cx="150" cy="190" r="10" fill="COLOR" opacity="0.2"/><path d="M140,165 L150,155 L160,165" fill="none" stroke="COLOR" stroke-width="2" opacity="0.6"/>`,
  '皇帝': `<rect x="130" y="170" width="40" height="50" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M140,170 L150,155 L160,170" fill="none" stroke="COLOR" stroke-width="2" opacity="0.5"/><line x1="150" y1="220" x2="150" y2="245" stroke="COLOR" stroke-width="2" opacity="0.4"/><line x1="140" y1="245" x2="160" y2="245" stroke="COLOR" stroke-width="2" opacity="0.4"/>`,
  '教皇': `<path d="M135,175 Q150,155 165,175" fill="none" stroke="COLOR" stroke-width="2" opacity="0.5"/><line x1="150" y1="155" x2="150" y2="175" stroke="COLOR" stroke-width="2" opacity="0.5"/><line x1="140" y1="165" x2="160" y2="165" stroke="COLOR" stroke-width="2" opacity="0.5"/><path d="M130,180 Q150,200 170,180 Q150,240 130,180" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/>`,
  '恋人': `<circle cx="130" cy="200" r="15" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><circle cx="170" cy="200" r="15" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M145,200 Q150,185 155,200" fill="COLOR" opacity="0.2"/><path d="M130,185 Q150,165 170,185" fill="none" stroke="COLOR" stroke-width="1" opacity="0.3"/>`,
  '战车': `<rect x="125" y="190" width="50" height="35" rx="3" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.5"/><path d="M125,190 Q150,170 175,190" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><circle cx="130" cy="235" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><circle cx="170" cy="235" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/>`,
  '力量': `<path d="M135,210 Q150,180 165,210 Q150,240 135,210" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.5"/><circle cx="150" cy="195" r="6" fill="COLOR" opacity="0.3"/><path d="M130,200 Q150,170 170,200" fill="none" stroke="COLOR" stroke-width="1" opacity="0.3"/>`,
  '隐士': `<circle cx="150" cy="200" r="20" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.3"/><path d="M150,180 L150,160" stroke="COLOR" stroke-width="2" opacity="0.5"/><circle cx="150" cy="155" r="5" fill="COLOR" opacity="0.3"/><path d="M145,210 Q150,225 155,210" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/>`,
  '命运之轮': `<circle cx="150" cy="210" r="35" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><circle cx="150" cy="210" r="25" fill="none" stroke="COLOR" stroke-width="1" opacity="0.3"/><circle cx="150" cy="210" r="15" fill="none" stroke="COLOR" stroke-width="0.8" opacity="0.2"/><line x1="150" y1="175" x2="150" y2="245" stroke="COLOR" stroke-width="0.8" opacity="0.3"/><line x1="115" y1="210" x2="185" y2="210" stroke="COLOR" stroke-width="0.8" opacity="0.3"/>`,
  '正义': `<line x1="150" y1="160" x2="150" y2="260" stroke="COLOR" stroke-width="2" opacity="0.5"/><line x1="125" y1="190" x2="175" y2="190" stroke="COLOR" stroke-width="2" opacity="0.5"/><path d="M125,190 Q120,175 130,180" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M175,190 Q180,175 170,180" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/>`,
  '倒吊人': `<line x1="120" y1="160" x2="180" y2="160" stroke="COLOR" stroke-width="2" opacity="0.5"/><line x1="150" y1="160" x2="150" y2="200" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><circle cx="150" cy="240" r="8" fill="COLOR" opacity="0.3"/><line x1="150" y1="200" x2="150" y2="232" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><line x1="140" y1="215" x2="160" y2="215" stroke="COLOR" stroke-width="1.5" opacity="0.3"/>`,
  '死神': `<path d="M130,170 L150,200 L170,170" fill="none" stroke="COLOR" stroke-width="2" opacity="0.5"/><circle cx="150" cy="160" r="12" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><line x1="150" y1="200" x2="150" y2="250" stroke="COLOR" stroke-width="1.5" opacity="0.3"/>`,
  '节制': `<path d="M120,210 Q150,180 180,210" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M120,210 Q150,240 180,210" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><circle cx="150" cy="210" r="6" fill="COLOR" opacity="0.3"/><path d="M125,195 Q150,175 175,195" fill="none" stroke="COLOR" stroke-width="1" opacity="0.3"/>`,
  '恶魔': `<path d="M130,180 Q150,160 170,180 Q170,220 150,240 Q130,220 130,180 Z" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.5"/><path d="M135,175 L130,160" stroke="COLOR" stroke-width="2" opacity="0.4"/><path d="M165,175 L170,160" stroke="COLOR" stroke-width="2" opacity="0.4"/><circle cx="140" cy="200" r="3" fill="COLOR" opacity="0.4"/><circle cx="160" cy="200" r="3" fill="COLOR" opacity="0.4"/>`,
  '高塔': `<rect x="140" y="170" width="20" height="60" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.5"/><path d="M135,170 L150,155 L165,170" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><line x1="150" y1="155" x2="150" y2="140" stroke="COLOR" stroke-width="2" opacity="0.6"/><path d="M145,140 L150,130 L155,140" fill="COLOR" opacity="0.5"/><line x1="130" y1="200" x2="140" y2="200" stroke="COLOR" stroke-width="1" opacity="0.3"/><line x1="160" y1="200" x2="170" y2="200" stroke="COLOR" stroke-width="1" opacity="0.3"/>`,
  '星星': `<polygon points="150,170 153,182 166,182 156,190 159,202 150,194 141,202 144,190 134,182 147,182" fill="COLOR" opacity="0.4" stroke="COLOR" stroke-width="0.5"/><circle cx="150" cy="210" r="25" fill="none" stroke="COLOR" stroke-width="0.8" opacity="0.2"/><circle cx="130" cy="230" r="2" fill="COLOR" opacity="0.3"/><circle cx="170" cy="225" r="1.5" fill="COLOR" opacity="0.3"/><circle cx="140" cy="240" r="1.5" fill="COLOR" opacity="0.2"/>`,
  '月亮': `<path d="M130,210 A20,20 0 1,1 170,210 A15,15 0 1,0 130,210" fill="COLOR" opacity="0.25"/><circle cx="125" cy="195" r="2" fill="COLOR" opacity="0.3"/><circle cx="175" cy="200" r="1.5" fill="COLOR" opacity="0.2"/><path d="M120,240 Q150,225 180,240" fill="none" stroke="COLOR" stroke-width="1" opacity="0.3"/>`,
  '太阳': `<circle cx="150" cy="205" r="18" fill="COLOR" opacity="0.25" stroke="COLOR" stroke-width="1" opacity="0.4"/><line x1="150" y1="180" x2="150" y2="170" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><line x1="150" y1="230" x2="150" y2="240" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><line x1="125" y1="205" x2="115" y2="205" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><line x1="175" y1="205" x2="185" y2="205" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><line x1="133" y1="188" x2="126" y2="181" stroke="COLOR" stroke-width="1" opacity="0.3"/><line x1="167" y1="188" x2="174" y2="181" stroke="COLOR" stroke-width="1" opacity="0.3"/><line x1="133" y1="222" x2="126" y2="229" stroke="COLOR" stroke-width="1" opacity="0.3"/><line x1="167" y1="222" x2="174" y2="229" stroke="COLOR" stroke-width="1" opacity="0.3"/>`,
  '审判': `<path d="M135,230 Q150,210 165,230" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M140,220 Q150,200 160,220" fill="none" stroke="COLOR" stroke-width="1" opacity="0.3"/><path d="M145,210 Q150,190 155,210" fill="none" stroke="COLOR" stroke-width="0.8" opacity="0.2"/><path d="M130,195 Q150,170 170,195" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/>`,
  '世界': `<circle cx="150" cy="210" r="30" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><ellipse cx="150" cy="210" rx="18" ry="25" fill="none" stroke="COLOR" stroke-width="1" opacity="0.3"/><line x1="150" y1="185" x2="150" y2="235" stroke="COLOR" stroke-width="0.8" opacity="0.2"/><line x1="132" y1="210" x2="168" y2="210" stroke="COLOR" stroke-width="0.8" opacity="0.2"/>`,
};

const courtSymbols: Record<string, string> = {
  '侍从': `<rect x="135" y="185" width="30" height="40" rx="3" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><circle cx="150" cy="175" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M145,225 L150,240 L155,225" fill="none" stroke="COLOR" stroke-width="1" opacity="0.3"/>`,
  '骑士': `<path d="M135,220 L150,190 L165,220 Z" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><circle cx="150" cy="185" r="6" fill="COLOR" opacity="0.3"/><line x1="140" y1="235" x2="160" y2="235" stroke="COLOR" stroke-width="2" opacity="0.3"/><path d="M135,235 L130,245" stroke="COLOR" stroke-width="1.5" opacity="0.3"/><path d="M165,235 L170,245" stroke="COLOR" stroke-width="1.5" opacity="0.3"/>`,
  '王后': `<circle cx="150" cy="195" r="15" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M140,185 L145,170 L150,180 L155,170 L160,185" fill="none" stroke="COLOR" stroke-width="2" opacity="0.5"/><path d="M140,210 Q150,225 160,210" fill="none" stroke="COLOR" stroke-width="1" opacity="0.3"/>`,
  '国王': `<rect x="135" y="185" width="30" height="35" rx="2" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.4"/><path d="M140,185 L145,170 L150,178 L155,170 L160,185" fill="none" stroke="COLOR" stroke-width="2" opacity="0.5"/><line x1="150" y1="220" x2="150" y2="240" stroke="COLOR" stroke-width="2" opacity="0.3"/><line x1="140" y1="240" x2="160" y2="240" stroke="COLOR" stroke-width="2" opacity="0.3"/>`,
};

function drawStars(c: string, count: number): string {
  let s = '';
  for (let i = 0; i < count; i++) {
    const x = 30 + Math.floor((i * 97 + 37) % 240);
    const y = 30 + Math.floor((i * 73 + 19) % 390);
    const r = 0.5 + (i % 3) * 0.3;
    const o = 0.1 + (i % 5) * 0.04;
    s += `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" opacity="${o}"/>`;
  }
  return s;
}

interface TarotCardArtProps {
  card: TarotCard;
}

export function TarotCardArt({ card }: TarotCardArtProps) {
  const isMajor = card.type === 'major';
  const colors = isMajor
    ? (majorColors[card.name] || majorColors['愚者'])
    : (suitColors[card.suit || ''] || suitColors['wands']);

  const id = `art-${card.id}`;

  let centralContent = '';
  let topContent = '';
  let bottomContent = '';

  if (isMajor) {
    const roman = romanNumerals[card.name] || '';
    const symbol = (majorSymbols[card.name] || '').replace(/COLOR/g, colors.primary);
    topContent = `
      <text x="150" y="42" text-anchor="middle" font-size="18" fill="${colors.accent}" font-weight="300" letter-spacing="4" opacity="0.7">${roman}</text>
    `;
    centralContent = symbol;
    bottomContent = `
      <text x="150" y="415" text-anchor="middle" font-size="11" fill="${colors.primary}" letter-spacing="3" opacity="0.5">${card.nameEn.toUpperCase()}</text>
    `;
  } else {
    const suit = card.suit || '';
    const number = card.number || 0;
    const isCourt = number >= 11;
    const drawFn = suitDrawFns[suit];

    if (isCourt) {
      const courtKey = Object.keys(courtSymbols).find(k => card.name.includes(k)) || '侍从';
      const courtSvg = (courtSymbols[courtKey] || '').replace(/COLOR/g, colors.primary);
      centralContent = courtSvg;
      if (drawFn) {
        centralContent += drawFn(110, 210, 0.6);
        centralContent += drawFn(190, 210, 0.6);
      }
      topContent = `<text x="150" y="42" text-anchor="middle" font-size="14" fill="${colors.accent}" font-weight="300" letter-spacing="3" opacity="0.7">${card.name.replace(courtKey, '').trim()}</text>`;
    } else {
      const roman = numberToRoman[number] || String(number);
      topContent = `<text x="150" y="42" text-anchor="middle" font-size="18" fill="${colors.accent}" font-weight="300" letter-spacing="4" opacity="0.7">${roman}</text>`;
      if (drawFn && suitPositions[number]) {
        centralContent = suitPositions[number].map(p => drawFn(p.x, p.y, 0.9)).join('\n');
      }
    }
    bottomContent = `<text x="150" y="415" text-anchor="middle" font-size="11" fill="${colors.primary}" letter-spacing="2" opacity="0.5">${card.name}</text>`;
  }

  const svg = `
<svg viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="${id}-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors.bg1}"/>
      <stop offset="100%" stop-color="${colors.bg2}"/>
    </linearGradient>
    <radialGradient id="${id}-glow" cx="50%" cy="45%" r="45%">
      <stop offset="0%" stop-color="${colors.primary}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${colors.primary}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors.primary}" stop-opacity="0.4"/>
      <stop offset="50%" stop-color="${colors.accent}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${colors.primary}" stop-opacity="0.4"/>
    </linearGradient>
  </defs>

  <rect width="300" height="450" fill="url(#${id}-bg)"/>
  <rect width="300" height="450" fill="url(#${id}-glow)"/>

  ${drawStars(colors.primary, 20)}

  <rect x="18" y="18" width="264" height="414" rx="10" fill="none" stroke="url(#${id}-border)" stroke-width="1"/>
  <rect x="28" y="28" width="244" height="394" rx="6" fill="none" stroke="${colors.primary}" stroke-width="0.4" opacity="0.15"/>

  <circle cx="35" cy="35" r="2.5" fill="${colors.primary}" opacity="0.3"/>
  <circle cx="265" cy="35" r="2.5" fill="${colors.primary}" opacity="0.3"/>
  <circle cx="35" cy="415" r="2.5" fill="${colors.primary}" opacity="0.3"/>
  <circle cx="265" cy="415" r="2.5" fill="${colors.primary}" opacity="0.3"/>

  ${topContent}
  ${centralContent}
  ${bottomContent}
</svg>`;

  return <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: svg }} />;
}
