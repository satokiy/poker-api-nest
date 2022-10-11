import { cardList, Suit } from 'libs/const/playingCards';

// suitの数をそれぞれカウント
// eg) { '♠': 1, '♣': 2, '♦': 2, '♥': 0 }
export const suitCount = (cards) => {
  const suits = cards.map((value) => {
    return value.slice(0, 1);
  });
  const count = {
    [Suit.SPADE]: 0,
    [Suit.CLUB]: 0,
    [Suit.DIAMOND]: 0,
    [Suit.HEART]: 0,
  };

  suits.forEach((suit) => {
    count[suit]++;
  });
  return count;
};

// numberの数をそれぞれカウント
// eg) {'2': 1, .. ,'13': 2, '14': 0 }
export const numCount = (cards) => {
  const numbers = cards.map((value) => {
    return value.slice(1);
  });
  const count = {};
  for (const l of cardList) {
    count[l.rank] = 0;
  }
  numbers.forEach((num) => {
    const rank = cardList.find((n) => n.label == num);
    count[rank.rank]++;
  });
  return count;
};