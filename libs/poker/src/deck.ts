import { deckBase, DeckType } from '../../const/playingCards';
// 山札クラス
export class Deck {
  _deck: DeckType[];
  constructor() {
    this._deck = [...deckBase]; // deckBaseをコピー

    // シャッフル
    // Math.random -> 0以上1未満の値を返す
    // sort -> callback関数の結果が正か負かで並べ替え順序が変わる
    this._deck.sort((a, b) => Math.random() - 0.5);
  }

  // 山札からカードを取り出す
  deal = (num: number) => {
    // 5枚未満になったらリセット
    if (this._deck.length < 5) {
      console.log('reset deck!');
      this._deck = [...deckBase];
      this._deck.sort((a, b) => Math.random() - 0.5);
    }
    return this._deck.splice(0, num);
  };

}
