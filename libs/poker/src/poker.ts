// Pokerの役判定サービスクラス
import { Injectable } from '@nestjs/common';
import { suitList } from 'libs/const/playingCards';
import { numCount, suitCount } from 'libs/poker/src/playingCardUtil';
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
    return Object.values(numOnHand).some((v) => v === 3) &&
      Object.values(numOnHand).some((v) => v === 2)
      ? true
      : false;
  };

  isFlash = async (hand: string[]) => {
    const suitOnHand = suitCount(hand);
    return suitList.some((s) => suitOnHand[s] === 5);
  };

  isStraight = async (hand: string[]) => {
    const numOnHand = numCount(hand);
    let numArray = [];
    for (const [key, value] of Object.entries(numOnHand)) {
      if (value == 1) {
        numArray.push(key);
      }
    }
    // すべてのカードが1枚でなければならない
    if (numArray.length !== 5) {
      return false;
    }
    // 変換と並び替え
    numArray = numArray.map(Number).sort((a, b) => {
      return a - b;
    });
    // 最大値と最小値の差分が4ならストレート
    return numArray[4] - numArray[0] == 4;
  };

  isStraightFlash = async (hand: string[]) => {
    return (await this.isFlash(hand)) && (await this.isStraight(hand));
  };
}
