import type { TarotCard } from '../data/tarotCards';

export interface ReadingHistoryItem {
  id: string;
  timestamp: number;
  spreadType: 'single' | 'three';
  cards: TarotCard[];
  isReversedList: boolean[];
  positions: string[];
  question: string;
  interpretation: string;
}
