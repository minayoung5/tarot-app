import type { TarotCard } from '../data/tarotCards';

const suitColors: Record<string, { primary: string; secondary: string; accent: string; bg1: string; bg2: string }> = {
  wands: { primary: '#f59e0b', secondary: '#ef4444', accent: '#fbbf24', bg1: '#451a03', bg2: '#1c1917' },
  cups: { primary: '#7dd3fc', secondary: '#a78bfa', accent: '#bae6fd', bg1: '#1e1b4b', bg2: '#0f0a1e' },
  swords: { primary: '#e2e8f0', secondary: '#94a3b8', accent: '#f1f5f9', bg1: '#1e293b', bg2: '#0f172a' },
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
  '隐士': { primary: '#d1d5db', secondary: '#9ca3af', accent: '#e5e7eb', bg1: '#1f2937', bg2: '#111827' },
  '命运之轮': { primary: '#a78bfa', secondary: '#06b6d4', accent: '#c4b5fd', bg1: '#3b0764', bg2: '#0c1a2e' },
  '正义': { primary: '#e2e8f0', secondary: '#6366f1', accent: '#f1f5f9', bg1: '#1e293b', bg2: '#0f172a' },
  '倒吊人': { primary: '#818cf8', secondary: '#ec4899', accent: '#a5b4fc', bg1: '#1e1b4b', bg2: '#1a0a2e' },
  '死神': { primary: '#d1d5db', secondary: '#7c3aed', accent: '#e5e7eb', bg1: '#111827', bg2: '#1a0a2e' },
  '节制': { primary: '#22d3ee', secondary: '#8b5cf6', accent: '#67e8f9', bg1: '#083344', bg2: '#1a0a2e' },
  '恶魔': { primary: '#f59e0b', secondary: '#991b1b', accent: '#fbbf24', bg1: '#1c0a00', bg2: '#1a0505' },
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
      <line x1="0" y1="30" x2="0" y2="-30" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
      <line x1="0" y1="30" x2="0" y2="-30" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
      <ellipse cx="0" cy="-36" rx="8" ry="12" fill="#ef4444" opacity="0.7"/>
      <ellipse cx="0" cy="-40" rx="6" ry="9" fill="#f59e0b" opacity="0.6"/>
      <ellipse cx="0" cy="-44" rx="4" ry="7" fill="#fbbf24" opacity="0.5"/>
      <ellipse cx="0" cy="-48" rx="2.5" ry="5" fill="#fef3c7" opacity="0.4"/>
      <ellipse cx="0" cy="-51" rx="1.5" ry="3" fill="#ffffff" opacity="0.3"/>
      <line x1="-5" y1="12" x2="-12" y2="22" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
      <line x1="5" y1="12" x2="12" y2="22" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
      <line x1="-4" y1="0" x2="-10" y2="8" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <line x1="4" y1="0" x2="10" y2="8" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <ellipse cx="-12" cy="24" rx="3" ry="5" fill="#ef4444" opacity="0.4"/>
      <ellipse cx="12" cy="24" rx="3" ry="5" fill="#ef4444" opacity="0.4"/>
      <ellipse cx="-10" cy="10" rx="2" ry="4" fill="#fbbf24" opacity="0.3"/>
      <ellipse cx="10" cy="10" rx="2" ry="4" fill="#fbbf24" opacity="0.3"/>
    </g>`;
}

function drawCup(x: number, y: number, scale: number = 1): string {
  const s = scale;
  return `
    <g transform="translate(${x},${y}) scale(${s})">
      <path d="M-14,-20 L-12,6 Q0,14 12,6 L14,-20 Z" fill="#7dd3fc" opacity="0.55" stroke="#bae6fd" stroke-width="1.5"/>
      <path d="M-12,-20 L-10,4 Q0,10 10,4 L12,-20 Z" fill="#1e1b4b" opacity="0.3"/>
      <ellipse cx="0" cy="-20" rx="14" ry="4" fill="#bae6fd" opacity="0.55" stroke="#a78bfa" stroke-width="1"/>
      <ellipse cx="0" cy="-20" rx="11" ry="3" fill="#7dd3fc" opacity="0.35"/>
      <path d="M-5,-24 Q-2,-32 0,-28 Q2,-32 5,-24" fill="none" stroke="#c4b5fd" stroke-width="1.5" opacity="0.65"/>
      <path d="M-3,-26 Q0,-36 3,-26" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.45"/>
      <circle cx="0" cy="-30" r="2" fill="#c4b5fd" opacity="0.35"/>
      <line x1="0" y1="6" x2="0" y2="16" stroke="#7dd3fc" stroke-width="2.5" opacity="0.75"/>
      <ellipse cx="0" cy="18" rx="10" ry="3.5" fill="#7dd3fc" opacity="0.45" stroke="#bae6fd" stroke-width="1"/>
      <ellipse cx="0" cy="18" rx="7" ry="2.5" fill="#1e1b4b" opacity="0.2"/>
      <circle cx="0" cy="-8" r="3.5" fill="#a78bfa" opacity="0.45"/>
      <circle cx="0" cy="-8" r="2" fill="#c4b5fd" opacity="0.35"/>
      <path d="M-14,-14 Q-18,-10 -14,-6" fill="none" stroke="#bae6fd" stroke-width="1" opacity="0.35"/>
      <path d="M14,-14 Q18,-10 14,-6" fill="none" stroke="#bae6fd" stroke-width="1" opacity="0.35"/>
    </g>`;
}

function drawSword(x: number, y: number, scale: number = 1): string {
  const s = scale;
  return `
    <g transform="translate(${x},${y}) scale(${s})">
      <path d="M0,-42 L-3,-30 L0,-32 L3,-30 Z" fill="#f1f5f9" opacity="0.85"/>
      <line x1="0" y1="-42" x2="0" y2="18" stroke="#e2e8f0" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
      <line x1="0" y1="-42" x2="0" y2="18" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round" opacity="0.45"/>
      <path d="M-1.5,-40 L0,-42 L1.5,-40" fill="#f8fafc" opacity="0.65"/>
      <line x1="-14" y1="-6" x2="14" y2="-6" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" opacity="0.75"/>
      <line x1="-12" y1="-6" x2="12" y2="-6" stroke="#e2e8f0" stroke-width="1.5" opacity="0.45"/>
      <path d="M-14,-6 L-16,-10 L-12,-6 Z" fill="#94a3b8" opacity="0.55"/>
      <path d="M14,-6 L16,-10 L12,-6 Z" fill="#94a3b8" opacity="0.55"/>
      <circle cx="0" cy="-6" r="3" fill="#f1f5f9" opacity="0.65"/>
      <circle cx="0" cy="-6" r="1.5" fill="#94a3b8" opacity="0.45"/>
      <line x1="0" y1="18" x2="0" y2="30" stroke="#64748b" stroke-width="4" stroke-linecap="round" opacity="0.75"/>
      <line x1="0" y1="18" x2="0" y2="30" stroke="#94a3b8" stroke-width="2" opacity="0.45"/>
      <line x1="-5" y1="30" x2="5" y2="30" stroke="#64748b" stroke-width="3" stroke-linecap="round" opacity="0.65"/>
      <circle cx="0" cy="30" r="2" fill="#94a3b8" opacity="0.55"/>
    </g>`;
}

function drawPentacle(x: number, y: number, scale: number = 1): string {
  const s = scale;
  return `
    <g transform="translate(${x},${y}) scale(${s})">
      <circle cx="0" cy="0" r="24" fill="none" stroke="#4ade80" stroke-width="2" opacity="0.5"/>
      <circle cx="0" cy="0" r="22" fill="none" stroke="#86efac" stroke-width="0.8" opacity="0.3"/>
      <circle cx="0" cy="0" r="19" fill="#14532d" opacity="0.4"/>
      <circle cx="0" cy="0" r="19" fill="none" stroke="#4ade80" stroke-width="1" opacity="0.3"/>
      <polygon points="0,-17 5,-5.3 17.1,-5.3 7.6,3.7 11.8,16.2 0,8.5 -11.8,16.2 -7.6,3.7 -17.1,-5.3 -5,-5.3" fill="#4ade80" opacity="0.6" stroke="#86efac" stroke-width="1"/>
      <polygon points="0,-17 5,-5.3 17.1,-5.3 7.6,3.7 11.8,16.2 0,8.5 -11.8,16.2 -7.6,3.7 -17.1,-5.3 -5,-5.3" fill="none" stroke="#86efac" stroke-width="0.5" opacity="0.4" transform="scale(0.6)"/>
      <circle cx="0" cy="0" r="5" fill="#86efac" opacity="0.4"/>
      <circle cx="0" cy="0" r="3" fill="#4ade80" opacity="0.3"/>
      <circle cx="0" cy="-17" r="1.5" fill="#86efac" opacity="0.4"/>
      <circle cx="17.1" cy="-5.3" r="1.5" fill="#86efac" opacity="0.4"/>
      <circle cx="11.8" cy="16.2" r="1.5" fill="#86efac" opacity="0.4"/>
      <circle cx="-11.8" cy="16.2" r="1.5" fill="#86efac" opacity="0.4"/>
      <circle cx="-17.1" cy="-5.3" r="1.5" fill="#86efac" opacity="0.4"/>
    </g>`;
}

const suitDrawFns: Record<string, (x: number, y: number, s?: number) => string> = {
  wands: drawWand,
  cups: drawCup,
  swords: drawSword,
  pentacles: drawPentacle,
};

const suitPositions: Record<number, Array<{x: number; y: number}>> = {
  1: [{ x: 150, y: 220 }],
  2: [{ x: 150, y: 145 }, { x: 150, y: 295 }],
  3: [{ x: 150, y: 115 }, { x: 150, y: 220 }, { x: 150, y: 325 }],
  4: [{ x: 95, y: 145 }, { x: 205, y: 145 }, { x: 95, y: 295 }, { x: 205, y: 295 }],
  5: [{ x: 95, y: 120 }, { x: 205, y: 120 }, { x: 150, y: 220 }, { x: 95, y: 320 }, { x: 205, y: 320 }],
  6: [{ x: 95, y: 120 }, { x: 205, y: 120 }, { x: 95, y: 220 }, { x: 205, y: 220 }, { x: 95, y: 320 }, { x: 205, y: 320 }],
  7: [{ x: 95, y: 100 }, { x: 205, y: 100 }, { x: 150, y: 175 }, { x: 95, y: 250 }, { x: 205, y: 250 }, { x: 95, y: 330 }, { x: 205, y: 330 }],
  8: [{ x: 95, y: 100 }, { x: 205, y: 100 }, { x: 95, y: 185 }, { x: 205, y: 185 }, { x: 95, y: 270 }, { x: 205, y: 270 }, { x: 95, y: 340 }, { x: 205, y: 340 }],
  9: [{ x: 95, y: 90 }, { x: 205, y: 90 }, { x: 95, y: 170 }, { x: 205, y: 170 }, { x: 150, y: 220 }, { x: 95, y: 270 }, { x: 205, y: 270 }, { x: 95, y: 340 }, { x: 205, y: 340 }],
  10: [{ x: 95, y: 90 }, { x: 205, y: 90 }, { x: 150, y: 145 }, { x: 95, y: 195 }, { x: 205, y: 195 }, { x: 95, y: 250 }, { x: 205, y: 250 }, { x: 150, y: 300 }, { x: 95, y: 345 }, { x: 205, y: 345 }],
};

const majorSymbols: Record<string, string> = {
  '愚者': `
    <g>
      <circle cx="150" cy="100" r="28" fill="COLOR" opacity="0.32"/>
      <circle cx="150" cy="100" r="28" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <line x1="150" y1="128" x2="150" y2="128" stroke="COLOR" stroke-width="0"/>
      <path d="M150,128 L150,200" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,155 L125,175" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,155 L175,145" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,200 L130,240" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,200 L170,240" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M175,145 L185,120" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <circle cx="187" cy="117" r="4" fill="COLOR" opacity="0.55"/>
      <path d="M80,250 L150,250 L220,250" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55" stroke-dasharray="4,3"/>
      <path d="M220,250 L240,240" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M115,240 Q120,230 125,240" fill="COLOR" opacity="0.45"/>
      <path d="M120,240 L120,250" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M110,250 L115,240 L120,250" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <circle cx="150" cy="80" r="18" fill="COLOR" opacity="0.28"/>
      <circle cx="150" cy="80" r="12" fill="COLOR" opacity="0.32"/>
      <line x1="150" y1="62" x2="150" y2="55" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="138" y1="68" x2="132" y2="62" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="162" y1="68" x2="168" y2="62" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="135" y1="80" x2="128" y2="80" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="165" y1="80" x2="172" y2="80" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="138" y1="92" x2="132" y2="98" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="162" y1="92" x2="168" y2="98" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M70,260 Q150,270 230,260" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M60,265 Q150,280 240,265" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
    </g>`,

  '魔术师': `
    <g>
      <path d="M115,100 Q150,70 185,100 Q150,130 115,100 Z" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M125,100 Q150,80 175,100 Q150,120 125,100 Z" fill="COLOR" opacity="0.32"/>
      <path d="M150,70 L150,55" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M150,130 L150,145" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <circle cx="150" cy="100" r="8" fill="COLOR" opacity="0.45"/>
      <path d="M150,155 L150,230" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,180 L120,200" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,180 L180,200" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M120,200 L115,215" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M180,200 L185,215" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="150" cy="148" r="6" fill="COLOR" opacity="0.45"/>
      <rect x="100" y="240" width="100" height="50" rx="3" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="100" y1="240" x2="200" y2="240" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M120,265 L130,255 L140,265" stroke="COLOR" stroke-width="2" opacity="0.60" fill="none"/>
      <circle cx="160" cy="260" r="6" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.60"/>
      <line x1="175" y1="252" x2="185" y2="268" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <line x1="185" y1="252" x2="175" y2="268" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <polygon points="150,248 153,256 162,256 155,261 158,270 150,265 142,270 145,261 138,256 147,256" fill="COLOR" opacity="0.45"/>
      <path d="M90,230 L210,230" stroke="COLOR" stroke-width="1" opacity="0.30" stroke-dasharray="3,3"/>
      <path d="M80,155 L70,145" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M220,155 L230,165" stroke="COLOR" stroke-width="2" opacity="0.55"/>
    </g>`,

  '女祭司': `
    <g>
      <rect x="70" y="100" width="35" height="200" rx="4" fill="COLOR" opacity="0.30"/>
      <rect x="70" y="100" width="35" height="200" rx="4" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <text x="87" y="210" text-anchor="middle" font-size="22" fill="COLOR" opacity="0.60" font-weight="bold">B</text>
      <rect x="195" y="100" width="35" height="200" rx="4" fill="COLOR" opacity="0.30"/>
      <rect x="195" y="100" width="35" height="200" rx="4" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <text x="212" y="210" text-anchor="middle" font-size="22" fill="COLOR" opacity="0.60" font-weight="bold">J</text>
      <path d="M105,100 Q150,80 195,100" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M105,300 Q150,320 195,300" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M150,130 L150,220" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,155 L130,175" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.55"/>
      <path d="M150,155 L170,175" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.55"/>
      <circle cx="150" cy="120" r="14" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <circle cx="150" cy="120" r="10" fill="COLOR" opacity="0.32"/>
      <rect x="135" y="220" width="30" height="40" rx="2" fill="COLOR" fill-opacity="0.28" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M140,230 L160,230" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <path d="M142,238 L158,238" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <path d="M144,246 L156,246" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <path d="M130,260 Q150,280 170,260" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M125,265 Q150,290 175,265" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M150,300 Q140,320 150,340 Q160,320 150,300" fill="COLOR" opacity="0.35"/>
      <path d="M150,305 Q145,318 150,335 Q155,318 150,305" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
    </g>`,

  '女皇': `
    <g>
      <path d="M120,100 L125,80 L135,95 L145,75 L150,70 L155,75 L165,95 L175,80 L180,100" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="125" cy="78" r="4" fill="COLOR" opacity="0.45"/>
      <circle cx="145" cy="73" r="4" fill="COLOR" opacity="0.45"/>
      <circle cx="150" cy="68" r="4" fill="COLOR" opacity="0.45"/>
      <circle cx="155" cy="73" r="4" fill="COLOR" opacity="0.45"/>
      <circle cx="175" cy="78" r="4" fill="COLOR" opacity="0.45"/>
      <circle cx="135" cy="90" r="3" fill="COLOR" opacity="0.35"/>
      <circle cx="165" cy="90" r="3" fill="COLOR" opacity="0.35"/>
      <circle cx="150" cy="85" r="3" fill="COLOR" opacity="0.35"/>
      <circle cx="120" cy="95" r="3" fill="COLOR" opacity="0.35"/>
      <circle cx="180" cy="95" r="3" fill="COLOR" opacity="0.35"/>
      <circle cx="150" cy="95" r="3" fill="COLOR" opacity="0.35"/>
      <circle cx="142" cy="82" r="3" fill="COLOR" opacity="0.35"/>
      <circle cx="158" cy="82" r="3" fill="COLOR" opacity="0.35"/>
      <path d="M150,105 L150,220" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,140 L120,165" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,140 L180,165" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M120,165 L115,155" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M180,165 L185,155" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="150" cy="105" r="12" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M150,220 L130,260" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,220 L170,260" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M110,170 L110,200 L130,200" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <circle cx="120" cy="185" r="10" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <circle cx="120" cy="185" r="3" fill="COLOR" opacity="0.45"/>
      <path d="M70,280 Q90,270 110,280 Q130,270 150,280 Q170,270 190,280 Q210,270 230,280" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M75,290 Q95,280 115,290 Q135,280 155,290 Q175,280 195,290 Q215,280 225,290" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M80,300 Q100,290 120,300 Q140,290 160,300 Q180,290 200,300 Q220,290 230,300" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
    </g>`,

  '皇帝': `
    <g>
      <rect x="90" y="180" width="120" height="140" rx="5" fill="COLOR" fill-opacity="0.25" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M90,180 L90,170 Q150,150 210,170 L210,180" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M110,180 L105,165" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M105,165 Q108,158 112,165" fill="COLOR" opacity="0.45"/>
      <path d="M190,180 L195,165" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M195,165 Q198,158 202,165" fill="COLOR" opacity="0.45"/>
      <path d="M150,120 L150,180" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,145 L125,170" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,145 L175,170" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <circle cx="150" cy="110" r="14" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M140,100 L145,85 L150,92 L155,85 L160,100" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M125,170 L120,195" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M175,170 L180,195" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M130,200 L150,195 L170,200" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M140,210 L160,210" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <path d="M150,195 L150,240" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <line x1="120" y1="240" x2="180" y2="240" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M135,240 L130,280" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M165,240 L170,280" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <circle cx="125" cy="195" r="4" fill="COLOR" opacity="0.45"/>
      <circle cx="175" cy="195" r="4" fill="COLOR" opacity="0.45"/>
      <path d="M100,320 L200,320" stroke="COLOR" stroke-width="2" opacity="0.45"/>
    </g>`,

  '教皇': `
    <g>
      <path d="M135,80 L140,60 L150,70 L160,60 L165,80" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M140,80 Q150,70 160,80" fill="COLOR" opacity="0.30"/>
      <line x1="150" y1="60" x2="150" y2="50" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <line x1="140" y1="70" x2="160" y2="70" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <line x1="143" y1="65" x2="157" y2="65" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <circle cx="150" cy="95" r="16" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <circle cx="150" cy="95" r="12" fill="COLOR" opacity="0.28"/>
      <path d="M150,111 L150,200" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,140 L120,165" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,140 L180,165" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M120,165 L115,180" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M180,165 L185,180" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M150,200 L135,240" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M150,200 L165,240" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M100,250 L120,240 L120,260 Z" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M200,250 L180,240 L180,260 Z" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="110" cy="255" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <circle cx="190" cy="255" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M130,280 L140,270 L150,280 L160,270 L170,280" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M125,285 L135,275 L145,285 L155,275 L165,285 L175,275" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="130" y1="290" x2="170" y2="290" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="135" y1="295" x2="165" y2="295" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
    </g>`,

  '恋人': `
    <g>
      <path d="M150,60 L150,90" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M140,70 L160,70" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <circle cx="150" cy="55" r="12" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M140,55 L145,42 L150,50 L155,42 L160,55" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M150,90 L150,120" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M150,90 L130,110" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M150,90 L170,110" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M110,170 L110,280" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M110,200 L90,230" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M110,200 L130,230" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <circle cx="110" cy="158" r="14" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M110,280 L95,310" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M110,280 L125,310" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M190,170 L190,280" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M190,200 L170,230" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M190,200 L210,230" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <circle cx="190" cy="158" r="14" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M190,280 L175,310" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M190,280 L205,310" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M130,230 L170,230" stroke="COLOR" stroke-width="1.5" opacity="0.45" stroke-dasharray="3,2"/>
      <path d="M70,330 Q90,320 110,330 Q130,320 150,330 Q170,320 190,330 Q210,320 230,330" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M75,340 Q95,330 115,340 Q135,330 155,340 Q175,330 195,340 Q215,330 225,340" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <rect x="80" y="345" width="16" height="30" rx="2" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M80,345 Q88,335 96,345" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="88" cy="355" r="2" fill="COLOR" opacity="0.30"/>
      <rect x="204" y="345" width="16" height="30" rx="2" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M204,345 Q212,335 220,345" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="212" cy="355" r="2" fill="COLOR" opacity="0.30"/>
    </g>`,

  '战车': `
    <g>
      <rect x="100" y="180" width="100" height="70" rx="5" fill="COLOR" fill-opacity="0.28" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M100,180 Q150,150 200,180" fill="COLOR" fill-opacity="0.25" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M110,180 L110,160 L140,160 L140,180" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M160,180 L160,160 L190,160 L190,180" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M150,135 L150,180" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,155 L130,175" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,155 L170,175" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="150" cy="125" r="14" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M150,125 L150,115" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M145,118 L155,118" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <circle cx="80" cy="280" r="22" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="80" cy="280" r="15" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="80" cy="280" r="8" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <circle cx="80" cy="280" r="3" fill="COLOR" opacity="0.45"/>
      <circle cx="220" cy="280" r="22" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="220" cy="280" r="15" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="220" cy="280" r="8" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <circle cx="220" cy="280" r="3" fill="COLOR" opacity="0.45"/>
      <path d="M60,260 Q80,240 100,260" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M200,260 Q220,240 240,260" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M65,255 Q80,245 95,255" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M205,255 Q220,245 235,255" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M70,320 Q150,330 230,320" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M60,80 L70,70 L80,80" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M220,80 L230,70 L240,80" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <rect x="55" y="80" width="20" height="15" rx="2" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <rect x="225" y="80" width="20" height="15" rx="2" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
    </g>`,

  '力量': `
    <g>
      <path d="M115,95 Q150,75 185,95 Q150,115 115,95 Z" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M125,95 Q150,82 175,95 Q150,108 125,95 Z" fill="COLOR" opacity="0.30"/>
      <path d="M150,120 L150,210" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,150 L125,175" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,150 L175,175" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <circle cx="150" cy="108" r="14" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M150,210 L135,250" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M150,210 L165,250" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M125,175 L120,195" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M175,175 L170,195" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <ellipse cx="100" cy="240" rx="40" ry="25" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <ellipse cx="100" cy="240" rx="35" ry="20" fill="COLOR" opacity="0.25"/>
      <path d="M70,225 Q80,210 90,225" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M110,225 Q120,210 130,225" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="88" cy="232" r="3" fill="COLOR" opacity="0.45"/>
      <circle cx="112" cy="232" r="3" fill="COLOR" opacity="0.45"/>
      <path d="M95,248 Q100,255 105,248" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M120,195 L95,220" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M170,195 L105,225" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M60,280 Q80,270 100,280 Q120,270 140,280" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M65,290 Q85,280 105,290 Q125,280 135,290" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M160,270 Q170,265 180,270" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M165,278 Q175,273 185,278" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
    </g>`,

  '隐士': `
    <g>
      <path d="M90,80 L100,60 L110,80" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M95,80 L105,65 L115,80" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M80,100 Q100,85 120,100 Q100,115 80,100" fill="COLOR" fill-opacity="0.32" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M80,100 L80,120 Q100,130 120,120 L120,100" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M100,130 L100,250" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M100,170 L75,200" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M100,170 L125,190" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M75,200 L70,220" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M70,220 L65,240 L75,235 L68,250" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M100,250 L85,290" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M100,250 L115,290" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <rect x="120" y="180" width="14" height="20" rx="3" fill="COLOR" fill-opacity="0.30" stroke="COLOR" stroke-width="1.5" opacity="0.60"/>
      <circle cx="127" cy="175" r="6" fill="COLOR" opacity="0.45"/>
      <circle cx="127" cy="175" r="3" fill="COLOR" opacity="0.60"/>
      <path d="M127,169 L127,165" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M123,167 L131,167" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <path d="M60,300 Q80,290 100,300 Q120,290 140,300 L180,320 L220,340" fill="none" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <path d="M50,310 Q70,300 90,310 Q110,300 130,310 L170,330 L210,350" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.30"/>
      <path d="M200,100 L210,90 L220,100 L230,90 L240,100" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M205,110 L215,100 L225,110 L235,100" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M200,120 L210,110 L220,120 L230,110 L240,120" fill="none" stroke="COLOR" stroke-width="1" opacity="0.20"/>
    </g>`,

  '命运之轮': `
    <g>
      <circle cx="150" cy="210" r="70" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="150" cy="210" r="60" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="150" cy="210" r="50" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="150" cy="210" r="40" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <circle cx="150" cy="210" r="25" fill="COLOR" opacity="0.25"/>
      <circle cx="150" cy="210" r="25" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="150" y1="140" x2="150" y2="280" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="80" y1="210" x2="220" y2="210" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="100" y1="160" x2="200" y2="260" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <line x1="200" y1="160" x2="100" y2="260" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <text x="150" y="175" text-anchor="middle" font-size="14" fill="COLOR" opacity="0.60" font-weight="bold">T</text>
      <text x="185" y="215" text-anchor="middle" font-size="14" fill="COLOR" opacity="0.60" font-weight="bold">A</text>
      <text x="150" y="250" text-anchor="middle" font-size="14" fill="COLOR" opacity="0.60" font-weight="bold">R</text>
      <text x="115" y="215" text-anchor="middle" font-size="14" fill="COLOR" opacity="0.60" font-weight="bold">O</text>
      <path d="M140,145 Q150,130 160,145" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <circle cx="150" cy="128" r="5" fill="COLOR" opacity="0.45"/>
      <path d="M80,240 Q75,250 85,255 Q95,250 90,240" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="60" cy="120" r="12" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M55,114 Q60,108 65,114" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M54,122 Q60,126 66,122" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <circle cx="240" cy="120" r="12" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="60" cy="310" r="12" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="240" cy="310" r="12" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M55,115 Q60,108 65,115" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M235,115 Q240,108 245,115" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M55,305 Q60,298 65,305" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M235,305 Q240,298 245,305" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
    </g>`,

  '正义': `
    <g>
      <path d="M100,90 L100,320" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <path d="M200,90 L200,320" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <path d="M100,90 L200,90" stroke="COLOR" stroke-width="1.5" opacity="0.30"/>
      <path d="M100,320 L200,320" stroke="COLOR" stroke-width="1.5" opacity="0.30"/>
      <circle cx="150" cy="120" r="16" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M150,136 L150,230" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,170 L120,200" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,170 L180,200" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,230 L130,270" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M150,230 L170,270" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M180,200 L200,180 L210,120" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M205,125 L210,120 L215,125" fill="COLOR" opacity="0.60"/>
      <path d="M210,120 L210,100" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M120,200 L80,170" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <line x1="60" y1="170" x2="100" y2="170" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M60,170 Q55,155 65,160" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M100,170 Q105,155 95,160" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <line x1="60" y1="170" x2="60" y2="175" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="100" y1="170" x2="100" y2="175" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M80,170 L80,165" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M130,280 Q150,290 170,280" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M125,285 Q150,298 175,285" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
    </g>`,

  '倒吊人': `
    <g>
      <line x1="80" y1="100" x2="220" y2="100" stroke="COLOR" stroke-width="3" opacity="0.60"/>
      <line x1="100" y1="100" x2="100" y2="85" stroke="COLOR" stroke-width="3" opacity="0.60"/>
      <line x1="200" y1="100" x2="200" y2="85" stroke="COLOR" stroke-width="3" opacity="0.60"/>
      <line x1="100" y1="85" x2="200" y2="85" stroke="COLOR" stroke-width="3" opacity="0.60"/>
      <line x1="150" y1="100" x2="150" y2="140" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,140 L150,145" stroke="COLOR" stroke-width="3" opacity="0.60"/>
      <circle cx="150" cy="330" r="16" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="150" cy="330" r="12" fill="COLOR" opacity="0.32"/>
      <line x1="150" y1="145" x2="150" y2="314" stroke="COLOR" stroke-width="3" opacity="0.60"/>
      <path d="M150,200 L120,230" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,200 L180,230" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M120,230 L115,250" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M180,230 L185,250" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M150,270 L125,300" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M150,270 L175,300" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <circle cx="150" cy="310" r="20" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="150" cy="310" r="25" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <line x1="130" y1="310" x2="170" y2="310" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <line x1="150" y1="290" x2="150" y2="330" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <circle cx="138" cy="325" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="162" cy="325" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="150" cy="340" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="130" cy="310" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="170" cy="310" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="150" cy="290" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="135" cy="295" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="165" cy="295" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="135" cy="340" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="165" cy="340" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="125" cy="320" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="175" cy="320" r="2" fill="COLOR" opacity="0.45"/>
    </g>`,

  '死神': `
    <g>
      <ellipse cx="150" cy="100" rx="22" ry="26" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="142" cy="94" r="4" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.60"/>
      <circle cx="158" cy="94" r="4" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.60"/>
      <path d="M145,106 L150,110 L155,106" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <line x1="140" y1="85" x2="145" y2="88" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <line x1="160" y1="85" x2="155" y2="88" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M150,126 L150,220" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,160 L125,185" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,160 L175,185" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M125,185 L120,200" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M175,185 L180,200" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M150,220 L130,260" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M150,220 L170,260" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <ellipse cx="110" cy="180" rx="35" ry="22" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M80,170 Q90,160 100,170" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M120,170 Q130,160 140,170" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M75,200 L70,210 L80,205" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M145,200 L150,205 L155,200" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M180,200 L200,180 L220,160" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <rect x="215" y="140" width="20" height="25" rx="2" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M220,140 L225,130 L230,140" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <circle cx="225" cy="150" r="3" fill="COLOR" opacity="0.45"/>
      <path d="M70,300 Q90,290 110,300" fill="none" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <path d="M90,295 L90,280" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="90" cy="275" r="5" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M130,310 Q150,300 170,310" fill="none" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <path d="M150,305 L150,290" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="150" cy="285" r="5" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M200,290 Q210,280 220,290 L230,270" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="230" cy="265" r="8" fill="COLOR" opacity="0.28"/>
      <line x1="225" y1="260" x2="235" y2="260" stroke="COLOR" stroke-width="1" opacity="0.30"/>
    </g>`,

  '节制': `
    <g>
      <circle cx="150" cy="110" r="16" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M150,126 L150,230" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,160 L120,190" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,160 L180,190" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M120,190 L110,170" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M180,190 L190,170" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,230 L125,270" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M150,230 L175,270" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M115,95 Q150,75 185,95 Q150,115 115,95 Z" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <polygon points="150,140 143,155 157,155" fill="COLOR" fill-opacity="0.35" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M100,170 L95,165 Q90,160 95,155 L100,150" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <ellipse cx="95" cy="165" rx="10" ry="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M200,170 L205,165 Q210,160 205,155 L200,150" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <ellipse cx="205" cy="165" rx="10" ry="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M100,155 Q150,140 200,155" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55" stroke-dasharray="2,2"/>
      <path d="M95,160 Q150,145 205,160" fill="none" stroke="COLOR" stroke-width="1" opacity="0.45" stroke-dasharray="2,2"/>
      <path d="M110,280 Q130,270 150,280 Q170,270 190,280" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M70,280 Q90,270 110,280" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M190,280 Q210,270 230,280" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M75,290 L85,285 L95,290" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M205,290 L215,285 L225,290" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
    </g>`,

  '恶魔': `
    <g>
      <polygon points="150,80 120,130 180,130" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <line x1="150" y1="80" x2="150" y2="130" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="135" y1="105" x2="165" y2="105" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="150" cy="155" r="18" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M135,145 L128,125" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M128,125 Q125,118 130,120" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M165,145 L172,125" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M172,125 Q175,118 170,120" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="143" cy="150" r="3" fill="COLOR" opacity="0.55"/>
      <circle cx="157" cy="150" r="3" fill="COLOR" opacity="0.55"/>
      <path d="M145,162 Q150,167 155,162" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M150,173 L150,270" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,200 L120,230" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,200 L180,230" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,270 L130,310" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M150,270 L170,310" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <rect x="100" y="310" width="30" height="40" rx="3" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <rect x="170" y="310" width="30" height="40" rx="3" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="115" cy="320" r="6" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <circle cx="185" cy="320" r="6" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M115,326 L115,340 L120,345" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M185,326 L185,340 L180,345" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M130,325 L140,325" stroke="COLOR" stroke-width="1.5" opacity="0.45" stroke-dasharray="2,2"/>
      <path d="M160,325 L170,325" stroke="COLOR" stroke-width="1.5" opacity="0.45" stroke-dasharray="2,2"/>
      <rect x="140" y="230" width="8" height="25" rx="1" fill="COLOR" opacity="0.45"/>
      <path d="M144,230 L144,220" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M140,220 L148,215" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
    </g>`,

  '高塔': `
    <g>
      <rect x="120" y="120" width="60" height="200" fill="COLOR" fill-opacity="0.25" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <rect x="125" y="125" width="50" height="195" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M115,120 L150,90 L185,120" fill="COLOR" fill-opacity="0.28" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <rect x="140" y="140" width="20" height="25" rx="2" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M145,140 L150,135 L155,140" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <rect x="140" y="180" width="20" height="25" rx="2" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <rect x="140" y="220" width="20" height="25" rx="2" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M150,90 L150,60" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.70"/>
      <path d="M145,60 L150,45 L155,60" fill="COLOR" opacity="0.60"/>
      <path d="M150,45 L150,35" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M140,50 L150,35 L160,50" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M135,55 L150,30 L165,55" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <line x1="150" y1="70" x2="130" y2="55" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <line x1="150" y1="70" x2="170" y2="55" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <line x1="150" y1="75" x2="125" y2="65" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <line x1="150" y1="75" x2="175" y2="65" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M100,150 L115,160" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="95" cy="145" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M200,150 L185,160" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="205" cy="145" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M95,155 L90,175 L95,195" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M205,155 L210,175 L205,195" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M130,120 L125,110" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M170,120 L175,110" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="125" cy="107" r="4" fill="COLOR" opacity="0.45"/>
      <circle cx="175" cy="107" r="4" fill="COLOR" opacity="0.45"/>
      <path d="M80,320 Q150,330 220,320" fill="none" stroke="COLOR" stroke-width="2" opacity="0.45"/>
    </g>`,

  '星星': `
    <g>
      <polygon points="150,80 156,100 178,100 160,112 168,134 150,120 132,134 140,112 122,100 144,100" fill="COLOR" opacity="0.50" stroke="COLOR" stroke-width="1.5"/>
      <polygon points="150,85 154,98 170,98 157,108 163,124 150,115 137,124 143,108 130,98 146,98" fill="COLOR" opacity="0.30"/>
      <circle cx="100" cy="100" r="3" fill="COLOR" opacity="0.55"/>
      <circle cx="200" cy="95" r="2.5" fill="COLOR" opacity="0.50"/>
      <circle cx="80" cy="130" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="220" cy="125" r="2.5" fill="COLOR" opacity="0.45"/>
      <circle cx="90" cy="160" r="2" fill="COLOR" opacity="0.35"/>
      <circle cx="210" cy="155" r="2" fill="COLOR" opacity="0.35"/>
      <circle cx="110" cy="80" r="1.5" fill="COLOR" opacity="0.45"/>
      <circle cx="190" cy="75" r="1.5" fill="COLOR" opacity="0.45"/>
      <path d="M150,150 L150,240" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <circle cx="150" cy="145" r="12" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M150,180 L130,210" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M150,180 L170,210" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M130,210 L120,250" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <path d="M170,210 L180,250" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <path d="M120,250 Q110,270 100,290" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M120,250 Q115,275 108,300" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M180,250 Q190,270 200,290" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M180,250 Q185,275 192,300" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <ellipse cx="150" cy="310" rx="50" ry="15" fill="COLOR" fill-opacity="0.25" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M100,310 Q110,305 120,310" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M180,310 Q190,305 200,310" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M80,280 L90,270 L95,275" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="85" cy="268" r="3" fill="COLOR" opacity="0.30"/>
    </g>`,

  '月亮': `
    <g>
      <path d="M110,100 A45,45 0 1,1 190,100 A35,35 0 1,0 110,100" fill="COLOR" opacity="0.30"/>
      <path d="M110,100 A45,45 0 1,1 190,100 A35,35 0 1,0 110,100" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="130" cy="90" r="3" fill="COLOR" opacity="0.45"/>
      <circle cx="145" cy="85" r="2" fill="COLOR" opacity="0.35"/>
      <circle cx="155" cy="95" r="2.5" fill="COLOR" opacity="0.30"/>
      <path d="M135,105 Q140,100 145,105" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <rect x="70" y="220" width="30" height="60" rx="3" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M70,220 L85,200 L100,220" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <rect x="75" y="225" width="8" height="10" rx="1" fill="none" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <rect x="87" y="225" width="8" height="10" rx="1" fill="none" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <rect x="200" y="220" width="30" height="60" rx="3" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M200,220 L215,200 L230,220" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <rect x="205" y="225" width="8" height="10" rx="1" fill="none" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <rect x="217" y="225" width="8" height="10" rx="1" fill="none" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <path d="M100,280 Q150,260 200,280" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M110,290 Q150,270 190,290" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M120,300 Q150,285 180,300" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <ellipse cx="150" cy="330" rx="30" ry="15" fill="COLOR" fill-opacity="0.25" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M140,320 Q145,310 150,320 Q155,310 160,320" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="140" cy="318" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="160" cy="318" r="2" fill="COLOR" opacity="0.45"/>
      <path d="M110,290 L100,270 Q95,260 100,255" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M100,255 Q95,250 100,245" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M190,290 L200,270 Q205,260 200,255" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M200,255 Q205,250 200,245" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="80" cy="160" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="220" cy="155" r="2" fill="COLOR" opacity="0.45"/>
      <circle cx="95" cy="140" r="1.5" fill="COLOR" opacity="0.35"/>
      <circle cx="205" cy="135" r="1.5" fill="COLOR" opacity="0.35"/>
    </g>`,

  '太阳': `
    <g>
      <circle cx="150" cy="160" r="40" fill="COLOR" opacity="0.32"/>
      <circle cx="150" cy="160" r="40" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="150" cy="160" r="35" fill="none" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <circle cx="140" cy="152" r="4" fill="COLOR" opacity="0.55"/>
      <circle cx="160" cy="152" r="4" fill="COLOR" opacity="0.55"/>
      <path d="M142,170 Q150,178 158,170" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <line x1="150" y1="120" x2="150" y2="100" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <line x1="150" y1="200" x2="150" y2="220" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <line x1="110" y1="160" x2="90" y2="160" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <line x1="190" y1="160" x2="210" y2="160" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <line x1="122" y1="132" x2="108" y2="118" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="178" y1="132" x2="192" y2="118" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="122" y1="188" x2="108" y2="202" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="178" y1="188" x2="192" y2="202" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <line x1="135" y1="125" x2="125" y2="108" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="165" y1="125" x2="175" y2="108" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="135" y1="195" x2="125" y2="212" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="165" y1="195" x2="175" y2="212" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="115" y1="145" x2="98" y2="138" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="185" y1="145" x2="202" y2="138" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="115" y1="175" x2="98" y2="182" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <line x1="185" y1="175" x2="202" y2="182" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <rect x="80" y="260" width="140" height="15" rx="2" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="100" cy="258" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="130" cy="258" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="160" cy="258" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="190" cy="258" r="8" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M140,240 L150,230 L160,240" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,230 L150,220" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M135,245 L140,240 L160,240 L165,245" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M130,290 L135,280 L145,290" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M155,290 L165,280 L170,290" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
    </g>`,

  '审判': `
    <g>
      <circle cx="150" cy="90" r="16" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M150,106 L150,160" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,130 L125,155" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,130 L175,155" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M125,155 L120,170" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M175,155 L180,170" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M120,170 L115,165 L110,180" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M180,170 L185,165 L190,180" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M110,180 L105,175 L100,185" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M190,180 L195,175 L200,185" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <rect x="100" y="165" width="12" height="8" rx="1" fill="COLOR" fill-opacity="0.30" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <rect x="188" y="165" width="12" height="8" rx="1" fill="COLOR" fill-opacity="0.30" stroke="COLOR" stroke-width="1" opacity="0.45"/>
      <path d="M100,185 L95,180" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M200,185 L205,180" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <rect x="90" y="260" width="35" height="50" rx="3" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M90,260 L107,245 L125,260" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M100,270 L115,270" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M107,270 L107,290" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <rect x="132" y="260" width="35" height="50" rx="3" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M132,260 L150,245 L167,260" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M142,270 L157,270" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M150,270 L150,290" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <rect x="175" y="260" width="35" height="50" rx="3" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M175,260 L192,245 L210,260" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M185,270 L200,270" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M192,270 L192,290" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M107,260 L107,240" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="107" cy="235" r="5" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M150,260 L150,240" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="150" cy="235" r="5" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M192,260 L192,240" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <circle cx="192" cy="235" r="5" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M70,330 Q150,340 230,330" fill="none" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <path d="M80,340 Q150,350 220,340" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.30"/>
    </g>`,

  '世界': `
    <g>
      <ellipse cx="150" cy="210" rx="80" ry="110" fill="none" stroke="COLOR" stroke-width="3" opacity="0.60"/>
      <ellipse cx="150" cy="210" rx="75" ry="105" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M70,160 Q150,140 230,160" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M70,260 Q150,280 230,260" fill="none" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M150,100 L150,180" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,155 L130,180" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M150,155 L170,180" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <circle cx="150" cy="140" r="14" fill="none" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M150,180 L135,220" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M150,180 L165,220" stroke="COLOR" stroke-width="2.5" opacity="0.55"/>
      <path d="M130,180 L120,170" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M170,180 L180,170" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M150,220 L140,260" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <path d="M150,220 L160,260" stroke="COLOR" stroke-width="2" opacity="0.45"/>
      <circle cx="80" cy="110" r="18" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M72,105 Q80,95 88,105" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M75,115 Q80,120 85,115" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="220" cy="110" r="18" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M212,100 L220,108 L228,100" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M215,118 L220,112 L225,118" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="80" cy="310" r="18" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M72,305 Q80,295 88,305" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M75,315 Q80,322 85,315" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <circle cx="220" cy="310" r="18" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M212,305 Q220,295 228,305" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M215,315 Q220,322 225,315" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.45"/>
      <path d="M75,140 L70,160" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M225,140 L230,160" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M75,280 L70,260" stroke="COLOR" stroke-width="1" opacity="0.30"/>
      <path d="M225,280 L230,260" stroke="COLOR" stroke-width="1" opacity="0.30"/>
    </g>`,
};

const courtSymbols: Record<string, string> = {
  '侍从': `
    <g>
      <ellipse cx="150" cy="310" rx="40" ry="6" fill="COLOR" opacity="0.10"/>
      <circle cx="150" cy="115" r="20" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.75"/>
      <circle cx="150" cy="115" r="15" fill="COLOR" fill-opacity="0.28"/>
      <path d="M140,105 Q145,92 150,98 Q155,92 160,105" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.70"/>
      <path d="M150,135 L150,255" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
      <path d="M150,170 L118,205" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.70"/>
      <path d="M150,170 L182,205" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.70"/>
      <path d="M150,255 L125,305" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <path d="M150,255 L175,305" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <path d="M118,205 L108,225" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M182,205 L192,225" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <rect x="95" y="218" width="18" height="24" rx="3" fill="COLOR" fill-opacity="0.28" stroke="COLOR" stroke-width="2" opacity="0.65"/>
      <rect x="187" y="218" width="18" height="24" rx="3" fill="COLOR" fill-opacity="0.28" stroke="COLOR" stroke-width="2" opacity="0.65"/>
      <path d="M150,135 L140,155 L160,155 Z" fill="COLOR" fill-opacity="0.22" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M130,255 Q150,262 170,255" fill="none" stroke="COLOR" stroke-width="2" opacity="0.50"/>
      <circle cx="104" cy="215" r="3" fill="COLOR" opacity="0.40"/>
      <circle cx="196" cy="215" r="3" fill="COLOR" opacity="0.40"/>
      <path d="M125,305 L120,310" stroke="COLOR" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
      <path d="M175,305 L180,310" stroke="COLOR" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
      <path d="M108,225 L104,228 L112,230" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.50"/>
      <path d="M192,225 L196,228 L188,230" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.50"/>
    </g>`,

  '骑士': `
    <g>
      <ellipse cx="150" cy="300" rx="55" ry="8" fill="COLOR" opacity="0.10"/>
      <ellipse cx="155" cy="255" rx="48" ry="20" fill="COLOR" fill-opacity="0.22" stroke="COLOR" stroke-width="2.5" opacity="0.70"/>
      <path d="M190,240 Q200,218 197,198" fill="none" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.70"/>
      <path d="M197,198 Q207,192 214,198 Q212,208 203,205" fill="COLOR" fill-opacity="0.32" stroke="COLOR" stroke-width="2.5" opacity="0.70"/>
      <path d="M205,192 L210,182" stroke="COLOR" stroke-width="2" stroke-linecap="round" opacity="0.60"/>
      <circle cx="209" cy="198" r="2" fill="COLOR" opacity="0.60"/>
      <path d="M194,210 Q188,216 191,224 Q185,228 188,236" fill="none" stroke="COLOR" stroke-width="2" opacity="0.50"/>
      <path d="M185,273 L188,298" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <path d="M178,273 L174,298" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <path d="M122,273 L117,298" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <path d="M130,273 L134,298" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <ellipse cx="188" cy="300" rx="4" ry="2" fill="COLOR" opacity="0.50"/>
      <ellipse cx="174" cy="300" rx="4" ry="2" fill="COLOR" opacity="0.50"/>
      <ellipse cx="117" cy="300" rx="4" ry="2" fill="COLOR" opacity="0.50"/>
      <ellipse cx="134" cy="300" rx="4" ry="2" fill="COLOR" opacity="0.50"/>
      <path d="M107,250 Q95,262 90,278 Q88,288 92,295" fill="none" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.55"/>
      <path d="M138,238 Q155,232 172,238 L170,246 Q155,242 140,246 Z" fill="COLOR" fill-opacity="0.22" stroke="COLOR" stroke-width="1.5" opacity="0.60"/>
      <path d="M148,235 L148,170" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
      <circle cx="148" cy="155" r="16" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.75"/>
      <circle cx="148" cy="155" r="12" fill="COLOR" fill-opacity="0.22"/>
      <path d="M136,150 L141,132 L148,145 L155,132 L160,150" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.70"/>
      <path d="M148,190 L125,210" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.70"/>
      <path d="M148,190 L172,178" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.70"/>
      <path d="M148,235 L133,255" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M148,235 L163,255" stroke="COLOR" stroke-width="2.5" opacity="0.60"/>
      <path d="M172,178 L208,118 L213,113" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
      <path d="M208,118 L203,115 L213,113 L211,123" fill="none" stroke="COLOR" stroke-width="2" opacity="0.65"/>
      <path d="M118,205 L128,200 L128,220 L118,225 L108,220 L108,200 Z" fill="COLOR" fill-opacity="0.32" stroke="COLOR" stroke-width="2" opacity="0.60"/>
      <path d="M125,210 L155,232 L197,205" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.40"/>
      <path d="M80,310 Q150,318 220,310" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.35"/>
    </g>`,

  '王后': `
    <g>
      <ellipse cx="150" cy="310" rx="40" ry="6" fill="COLOR" opacity="0.10"/>
      <circle cx="150" cy="120" r="20" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.75"/>
      <circle cx="150" cy="120" r="15" fill="COLOR" fill-opacity="0.28"/>
      <path d="M136,112 L141,95 L146,108 L150,90 L154,108 L159,95 L164,112" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.75"/>
      <circle cx="141" cy="93" r="3.5" fill="COLOR" opacity="0.50"/>
      <circle cx="150" cy="88" r="3.5" fill="COLOR" opacity="0.50"/>
      <circle cx="159" cy="93" r="3.5" fill="COLOR" opacity="0.50"/>
      <path d="M150,140 L150,260" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
      <path d="M150,170 L118,210" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.70"/>
      <path d="M150,170 L182,210" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.70"/>
      <path d="M118,210 L108,235" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M182,210 L192,235" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.60"/>
      <path d="M150,260 L128,305" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <path d="M150,260 L172,305" stroke="COLOR" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
      <ellipse cx="103" cy="238" rx="10" ry="7" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <ellipse cx="197" cy="238" rx="10" ry="7" fill="none" stroke="COLOR" stroke-width="2" opacity="0.55"/>
      <path d="M108,235 L103,238" stroke="COLOR" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
      <path d="M192,235 L197,238" stroke="COLOR" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
      <path d="M140,260 Q150,268 160,260" fill="none" stroke="COLOR" stroke-width="2" opacity="0.50"/>
      <path d="M150,140 L138,162 L162,162 Z" fill="COLOR" fill-opacity="0.22" stroke="COLOR" stroke-width="1.5" opacity="0.55"/>
      <path d="M128,305 L123,310" stroke="COLOR" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
      <path d="M172,305 L177,310" stroke="COLOR" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
    </g>`,

  '国王': `
    <g>
      <rect x="110" y="175" width="80" height="100" rx="4" fill="COLOR" fill-opacity="0.25" stroke="COLOR" stroke-width="2.5" opacity="0.70"/>
      <path d="M110,175 L110,165 Q150,145 190,165 L190,175" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.7"/>
      <path d="M110,275 L105,290" stroke="COLOR" stroke-width="2.5" opacity="0.6"/>
      <path d="M190,275 L195,290" stroke="COLOR" stroke-width="2.5" opacity="0.6"/>
      <path d="M150,125 L150,175" stroke="COLOR" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
      <path d="M150,155 L125,175" stroke="COLOR" stroke-width="2.5" opacity="0.7"/>
      <path d="M150,155 L175,175" stroke="COLOR" stroke-width="2.5" opacity="0.7"/>
      <circle cx="150" cy="112" r="16" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.75"/>
      <circle cx="150" cy="112" r="12" fill="COLOR" fill-opacity="0.28"/>
      <path d="M138,104 L143,84 L148,99 L150,79 L152,99 L157,84 L162,104" fill="none" stroke="COLOR" stroke-width="2.5" opacity="0.75"/>
      <path d="M125,175 L120,195" stroke="COLOR" stroke-width="2" opacity="0.6"/>
      <path d="M175,175 L180,195" stroke="COLOR" stroke-width="2" opacity="0.6"/>
      <circle cx="120" cy="190" r="4" fill="COLOR" opacity="0.5"/>
      <circle cx="180" cy="190" r="4" fill="COLOR" opacity="0.5"/>
      <path d="M140,215 L160,215" stroke="COLOR" stroke-width="2" opacity="0.5"/>
      <path d="M150,215 L150,245" stroke="COLOR" stroke-width="2" opacity="0.5"/>
      <line x1="135" y1="245" x2="165" y2="245" stroke="COLOR" stroke-width="2" opacity="0.5"/>
      <path d="M105,290 L98,295" stroke="COLOR" stroke-width="2" opacity="0.5"/>
      <path d="M195,290 L202,295" stroke="COLOR" stroke-width="2" opacity="0.5"/>
      <rect x="92" y="293" width="16" height="6" rx="1" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.5"/>
      <rect x="192" y="293" width="16" height="6" rx="1" fill="none" stroke="COLOR" stroke-width="1.5" opacity="0.5"/>
    </g>`,
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
        centralContent += drawFn(80, 340, 0.5);
        centralContent += drawFn(220, 340, 0.5);
      }
      topContent = `<text x="150" y="42" text-anchor="middle" font-size="14" fill="${colors.accent}" font-weight="300" letter-spacing="3" opacity="0.7">${card.name.replace(courtKey, '').trim()}</text>`;
    } else {
      const roman = numberToRoman[number] || String(number);
      topContent = `<text x="150" y="42" text-anchor="middle" font-size="18" fill="${colors.accent}" font-weight="300" letter-spacing="4" opacity="0.7">${roman}</text>`;
      if (drawFn && suitPositions[number]) {
        centralContent = suitPositions[number].map(p => drawFn(p.x, p.y, 0.7)).join('\n');
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
