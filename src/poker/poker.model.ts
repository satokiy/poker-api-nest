import { PokerBest, PokerRole } from './poker-best.enum';

export interface Hand {
  hand: string[];
  role?: PokerRole;
  error?: string[];
}

export interface PokerResult {
  hand: string[];
  role: PokerRole;
  best: PokerBest;
}
