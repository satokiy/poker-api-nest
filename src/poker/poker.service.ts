import { Injectable } from '@nestjs/common';
import { PokerRole } from './poker-best.enum';
import { Hand } from './poker.model';
import {
  isFlash,
  isStraight,
  isStraightFlash,
} from '../../libs/poker/src/poker';

@Injectable()
export class PokerService {
  private cards: string;
  private cardList: string[];

  welcome() {
    return 'this is poker service. welcome!';
  }

  async judge(hand: Hand) {
    return await this.judgeRole(hand);
  }

  async judgeRole(hand: Hand) {
    if (await isStraightFlash(hand.cardList)) {
      hand.role = PokerRole.STRAIGHT_FLASH;
      return hand;
    }

    if (await isFlash(hand.cardList)) {
      hand.role = PokerRole.FLASH;
      return hand;
    }
    if (await isStraight(hand.cardList)) {
      hand.role = PokerRole.STRAIGHT;
      return hand;
    }

    hand.role = PokerRole.NO_ROLE;
    return hand;
  }
}
