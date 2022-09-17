// Pokerの役判定サービスクラス
import { Injectable } from '@nestjs/common';
import { PokerRole } from 'src/poker/poker-best.enum';
import { Hand } from 'src/poker/poker.model';

@Injectable()
export class JudgePokerRoleService {
  judgeRole = async (hand: Hand) => {
    if (await this.isStraightFlash(hand.cardList)) {
      hand.role = PokerRole.STRAIGHT_FLASH;
      return hand;
    }
    if (await this.isFlash(hand.cardList)) {
      hand.role = PokerRole.FLASH;
      return hand;
    }
    if (await this.isStraight(hand.cardList)) {
      hand.role = PokerRole.STRAIGHT;
      return hand;
    }

    hand.role = PokerRole.NO_ROLE;
    return hand;
  };

  isFlash = async (cardList: string[]) => {
    const suitList = cardList.map((card) => {
      return card.charAt(0);
    });
    const suitUniqList = [...new Set(suitList)];
    return suitUniqList.length === 1;
  };

  isStraight = async (cardList: string[]) => {
    // 条件1と2を満たす場合true
    // 1. 数値の最大と最小の差分が4、または10からAceの配列
    // 2. ユニークな5枚のカード
    const numOnHand: number[] = cardList.map((card) => Number(card.slice(1)));
    const uniqList = [...new Set(numOnHand)];
    numOnHand.sort((n, m) => n - m);

    if (
      uniqList.length === 5 &&
      (numOnHand[4] - numOnHand[0] === 4 ||
        JSON.stringify(numOnHand) === JSON.stringify([1, 10, 11, 12, 13]))
    ) {
      return true;
    } else {
      return false;
    }
  };

  isStraightFlash = async (cardList: string[]) => {
    return this.isFlash(cardList) && this.isStraight(cardList);
  };
}
