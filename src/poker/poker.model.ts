import { PokerBest, PokerRole } from './poker-best.enum';

export interface Hand {
  cards: string;
  cardList?: string[];
  role?: PokerRole;
  error?: string[];
}

export interface PokerResult {
  cards: string;
  best: PokerBest;
  role: PokerRole;
}
