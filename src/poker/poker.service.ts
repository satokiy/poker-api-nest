import { BadRequestException, Injectable } from '@nestjs/common';
import { PokerRole } from './poker-best.enum';
import { Hand } from './poker.model';
import { isFlash, isStraight, isStraightFlash } from 'libs/poker/src/poker';
import { HandCheckService } from 'libs/poker/src/hand-check';

@Injectable()
export class PokerService {
  welcome() {
    return 'this is poker service. welcome!';
  }

  async judge(handInfo: Hand) {
    console.log(handInfo);
    const checkService = new HandCheckService(handInfo);
    const errorMessage = checkService.isInvalidMessage();

    if (errorMessage.length > 0) {
      throw new BadRequestException(errorMessage);
    }

    handInfo.cardList = handInfo.hand.split(' ');
    return await this.judgeRole(handInfo);
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
