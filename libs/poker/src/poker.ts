// Pokerの役判定サービスクラス
import { Injectable } from '@nestjs/common';
import { numCount, suitCount } from 'libs/poker/src/playingCardUtil'
import { PokerRole } from 'src/poker/poker-best.enum';
import { Hand } from 'src/poker/poker.model';

@Injectable()
export class JudgePokerRoleService {
  judgeRole = async (hand: Hand) => {
    if (await this.isStraightFlash(hand.hand)) {
      hand.role = PokerRole.STRAIGHT_FLASH;
      return hand;
    }
    if (await this.isFourCard(hand.hand)) {
      hand.role = PokerRole.FOUR_CARD;
      return hand;
    }
    if (await this.isFullHouse(hand.hand)) {
      hand.role = PokerRole.FULL_HOUSE;
      return hand;
    }
    if (await this.isFlash(hand.hand)) {
      hand.role = PokerRole.FLASH;
      return hand;
    }
    if (await this.isStraight(hand.hand)) {
      hand.role = PokerRole.STRAIGHT;
      return hand;
    }
    if (await this.isThreeCard(hand.hand)) {
      hand.role = PokerRole.THREE_CARD;
      return hand;
    }
    if (await this.isTwoPair(hand.hand)) {
      hand.role = PokerRole.TWO_PAIR;
      return hand;
    }
    if (await this.isOnePair(hand.hand)) {
      hand.role = PokerRole.ONE_PAIR;
      return hand;
    }

    hand.role = PokerRole.NO_ROLE;
    return hand;
  };

  isFourCard = async (hand) => {
    const numOnHand = numCount(hand);
    return Object.values(numOnHand).some((v) => v === 4);
  };

  isThreeCard = async (hand) => {
    const numOnHand = numCount(hand);
    return Object.values(numOnHand).some((v) => v == 3) &&
      Object.values(numOnHand).every((v) => v !== 2)
      ? true
      : false;
  };

  isTwoPair = async (hand) => {
    const numOnHand = numCount(hand);
    return Object.values(numOnHand).filter((v) => v == 2).length == 2
      ? true
      : false;
  };

  isOnePair = async (hand) => {
    const numOnHand = numCount(hand);
    return Object.values(numOnHand).some((v) => v == 2) ? true : false;
  };

  isFullHouse = async (hand) => {
    const numOnHand = numCount(hand);
    return Object.values(numOnHand).some((v) => v == 3) &&
      Object.values(numOnHand).some((v) => v == 2)
      ? true
      : false;
  };

  isFlash = async (hand: string[]) => {
    const suitList = hand.map((card) => {
      return card.charAt(0);
    });
    const suitUniqList = [...new Set(suitList)];
    return suitUniqList.length === 1;
  };

  isStraight = async (hand: string[]) => {
    // 条件1と2を満たす場合true
    // 1. 数値の最大と最小の差分が4、または10からAceの配列
    // 2. ユニークな5枚のカード
    const numOnHand: number[] = hand.map((card) => Number(card.slice(1)));
    const uniqList = [...new Set(numOnHand)];
    numOnHand.sort((n, m) => n - m);

    return uniqList.length === 5 &&
      (numOnHand[4] - numOnHand[0] === 4 ||
        JSON.stringify(numOnHand) === JSON.stringify([1, 10, 11, 12, 13]))
      ? true
      : false;
  };

  isStraightFlash = async (hand: string[]) => {
    return this.isFlash(hand) && this.isStraight(hand);
  };
}
