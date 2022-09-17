// Pokerの役判定

export const isFlash = async (cardList: string[]) => {
  const suitList = cardList.map((card) => {
    return card.charAt(0);
  });
  const suitUniqList = [...new Set(suitList)];
  return suitUniqList.length === 1;
};

export const isStraight = async (cardList: string[]) => {
  // カードリストにおける、数値の最大と最小の差分が4であることを判定
  const numOnHand: number[] = cardList.map((card) => Number(card.slice(1)));
  numOnHand.sort((n, m) => n - m);
  return numOnHand[4] - numOnHand[0] === 4;
};

export const isStraightFlash = async (cardList: string[]) => {
  return isFlash(cardList) && isStraight(cardList);
};
