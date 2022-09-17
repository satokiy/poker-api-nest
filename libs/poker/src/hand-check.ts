import { Injectable } from '@nestjs/common';
import { ErrorMessage } from 'libs/const/error';
import { Hand } from 'src/poker/poker.model';

@Injectable()
export class HandCheckService {
  private cardList: string[];
  constructor(hand: Hand) {
    this.cardList = hand.hand.split(' ');
  }

  isInvalidMessage(): string[] {
    const message = [];
    if (this.invalidLength()) {
      message.push(ErrorMessage.DEFAULT_ERROR);
      return message;
    }
    if (this.dupCard()) {
      message.push(ErrorMessage.DUP_ERROR);
      return message;
    }
    if (this.invalidCard()) {
      message.push(ErrorMessage.CARD_ERROR);
      return message;
    }
    return message;
  }

  invalidLength() {
    if (this.cardList.length !== 5) {
      return true;
    }
  }

  dupCard() {
    const set = new Set(this.cardList);
    if (this.cardList.length !== set.size) {
      return true;
    }
  }

  invalidCard() {
    const regex = new RegExp(/^([SHDC])([1-9]|1[0-3])$/);
    return this.cardList.some((card) => !regex.test(card));
  }
}
