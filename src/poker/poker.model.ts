import { PokerBest, PokerRole } from './poker-best.enum';

export interface Hand {
  cards: string;
}

export interface PokerResult {
  cards: string;
  best: PokerBest;
  role: PokerRole;
}
