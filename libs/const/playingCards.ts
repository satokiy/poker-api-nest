export type DeckType = {
  rank: number;
  label: string;
  suit: string;
  value: string;
};

export const Suit = {
  SPADE: '♠',
  CLUB: '♣',
  DIAMOND: '♦',
  HEART: '♥',
};

export const suitList = [Suit.SPADE, Suit.CLUB, Suit.DIAMOND, Suit.HEART];

export const cardList = [
  { rank: 2, label: '2' },
  { rank: 3, label: '3' },
  { rank: 4, label: '4' },
  { rank: 5, label: '5' },
  { rank: 6, label: '6' },
  { rank: 7, label: '7' },
  { rank: 8, label: '8' },
  { rank: 9, label: '9' },
  { rank: 10, label: '10' },
  { rank: 11, label: 'J' },
  { rank: 12, label: 'Q' },
  { rank: 13, label: 'K' },
  { rank: 14, label: 'A' },
];

// 各スートごとに2からAまで作成する
export const deckBase: DeckType[] = suitList
  .map((suit) => {
    return cardList.map((card) => {
      const value = suit + card.label;
      return {
        value,
        suit,
        ...card,
      };
    });
  })
  .flat();

// ジョーカー(初期は使わない)
export const joker = Object.freeze({ isWildcard: true, label: 'Joker' });

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
