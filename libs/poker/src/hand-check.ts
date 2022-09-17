import { Injectable } from '@nestjs/common';
import { ErrorMessage } from 'libs/const/error';
import { Hand } from 'src/poker/poker.model';

@Injectable()
export class HandCheckService {
  isInvalidMessage(handInfo: Hand): string[] {
    const message = [];
    const cardList: string[] = handInfo.hand.split(' ');

    if (this.invalidLength(cardList)) {
      message.push(ErrorMessage.DEFAULT_ERROR);
      return message;
    }
    if (this.dupCard(cardList)) {
      message.push(ErrorMessage.DUP_ERROR);
      return message;
    }
    if (this.invalidCard(cardList)) {
      message.push(ErrorMessage.CARD_ERROR);
      return message;
    }
    return message;
  }

  invalidLength(cardList: string[]) {
    if (cardList.length !== 5) {
      return true;
    }
  }

  dupCard(cardList: string[]) {
    const set = new Set(cardList);
    if (cardList.length !== set.size) {
      return true;
    }
  }

  invalidCard(cardList: string[] ) {
    const regex = new RegExp(/^([SHDC])([1-9]|1[0-3])$/);
    return cardList.some((card) => !regex.test(card));
  }
}
