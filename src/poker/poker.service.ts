import { Injectable } from '@nestjs/common';

@Injectable()
export class PokerService {
  private cards: string;
  private cardList: string[];

  welcome() {
    return 'this is poker service. welcome!';
  }

  judge(cards: string) {
    return this.judgeRole(cards);
  }

  judgeRole(cards: string) {
    return cards;
  }

  flash?(cardList) {
    const suitList = cardList.map((card) => {
      return card.charAt(0);
    });
    const suitUniqList = [...new Set(suitList)];
    return suitUniqList.length === 1;
  }
}
