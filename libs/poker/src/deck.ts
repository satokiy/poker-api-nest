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

  // 山札からカードを取り出すメソッド
  deal = (num: number) => {
    return this._deck.splice(0, num);
  };
}
