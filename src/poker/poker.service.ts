import { Injectable } from '@nestjs/common';
import { PokerRole } from './poker-best.enum';
import { Hand } from './poker.model';

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

  async isFlash(cardList: string[]) {
    const suitList = cardList.map((card) => {
      return card.charAt(0);
    });
    const suitUniqList = [...new Set(suitList)];
    return suitUniqList.length === 1;
  }

  async isStraight(cardList: string[]) {
    // カードリストにおける、数値の最大と最小の差分が4であることを判定
    const numOnHand: number[] = cardList.map((card) => Number(card.slice(1)));
    numOnHand.sort((n, m) => n - m);
    return numOnHand[4] - numOnHand[0] === 4;
  }

  async isStraightFlash(cardList: string[]) {
    this.isFlash(cardList) && this.isStraight(cardList);
  }

  async judgeRole(hand: Hand) {
    if (await this.isFlash(hand.cardList)) {
      hand.role = PokerRole.FLASH;
    }
    return hand;
  }
}
