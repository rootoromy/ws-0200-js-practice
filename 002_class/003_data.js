/**
 *  リストの実装
 *
 *  オブジェクト指向やJavaScriptの組み込みAPIの成り立ちを理解するためにも
 *  データ構造をクラスで実装してみましょう。
 *  実際に使われるリストは要素の型の縛りはありませんが、今回のリストは要素を数値に限定します。
 *
 *  TODO: のついているメソッドを実際に実装してください
 *
 */

class List {
  data = [];
  /**
   * Listクラスのインスタンスを作成する。
   * @constructor
   * @this {List}
   * @param {Number} array リストのデータ
   */
  constructor(array) {
    this.data = array;
  }

  /** リストの長さを返す
   *
   * @return {Number}
   */
  get size() {
    // TODO:
    return this.data.length;
  }

  /** 引数で渡された添字のデータを取得する
   *
   * @param {Number} index
   * @return {Number}
   */
  index(index) {
    // TODO:
    return this.data[index];
  }

  /** リストの 要素を追加する
   *
   * @param {Number} item
   * @return {Number}
   */
  push(item) {
    // TODO:
    this.data[this.size] = item;
    return this.size;
  }

  /** 与えられた引数により、リストの 要素を削除する
   *
   * @param {Number} targetIndex
   * @return {Number}
   */
  remove(targetIndex) {
    // TODO:
    if(targetIndex >= 0 && targetIndex < this.size){
      for(let i = targetIndex; i < this.size - 1; i++){
        this.data[i] = this.data[i + 1];
      }
      this.data.length--;
    } else {
      throw new Error('Invalid index');
    }
    return this.size;
  }

  /** リストの 末尾の要素を取得する
   *
   * @param {Number} targetIndex
   * @return {Number}
   */
  pop() {
    // TODO:
    if(this.size === 0){
      throw new Error('Cannot pop from empty list');
    }
    const lastItem = this.data[this.size - 1];
    this.data.length--;
    return lastItem;
  }

  /** リストの 先頭の要素を取得する
   *
   * @return {Number}
   */
  shift() {
    // TODO:
    const firstItem = this.data[0];
    this.remove(0);
    return firstItem;
  }

  /** リストの の中から引数に合致する値を取得する
   *
   * XXX: find関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {Number | undefined}
   */
  find(target) {
    // TODO:
    for(let i = 0; i < this.size; i++){
      if(this.data[i] === target){
        return this.data[i];
      }
    }
    return undefined;
  }

  /** リストの の中から引数に合致する値のindexを取得する。見つからない場合は-1を返す
   *
   * XXX: findIndex関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {Number}
   */
  findIndex(target) {
    // TODO:
    for(let i = 0; i < this.size; i++){
      if(this.data[i] === target){
        return i;
      }
    }
    return -1;
  }

  /** リストの の中から要素に合致する数を取り除く
   *
   * 実際のデータ(this.data)に変更を加えることなく、新しい配列を返す形で実装しましょう。
   *
   * XXX: filter関数は使わずにfor文、while文を活用して実装しましょう
   *
   * @param {Number} target
   * @return {List}
   */
  filter(target) {
    // TODO:
    const newList = [];
    for(let i = 0; i < this.size; i++){
      if(this.data[i] !== target){
        newList[newList.length] = this.data[i];
      }
    }
    return new List(newList);
  }
}

/**
 *  スタックの実装
 *
 *  スタックの実装を理解して、要素の追加、取り出しのメソッドをそれぞれ実装しましょう。
 *  https://qiita.com/drken/items/6a95b57d2e374a3d3292
 *
 *  TODO: のついているメソッドを実際に実装してください
 *
 */

class Stack {
  data = [];

  /** スタックの長さを返す
   *
   * @return {Number}
   */
  get size() {
    return this.data.length;
  }

  /** スタックに要素を追加する
   *
   * @param {Number} item
   */
  push(item) {
    // TODO:
    this.data[this.size] = item;
  }

  /** スタックから要素を取得する
   *
   * @param {Number} item
   * @return {Number}
   */
  pop() {
    // TODO:
    if(this.size > 0){
      const lastItem = this.data[this.size - 1];
      this.data.length--;
      return lastItem;
    }
  }

  /** スタックの末尾の要素を参照する
   *
   * @param {Number} item
   * @return {Number}
   */
  peek() {
    // TODO:
    return this.data[this.size - 1];
  }
}

/**
 *  キューの実装
 *
 *  キューの実装を理解して、要素の追加、取り出しのメソッドをそれぞれ実装しましょう。
 *  https://qiita.com/drken/items/6a95b57d2e374a3d3292
 *
 *  TODO: のついているメソッドを実際に実装してください
 *
 */

class Queue {
  data = [];

  /** キューの長さを返す
   *
   * @return {Number}
   */
  get size() {
    return this.data.length;
  }

  /** キューに要素を追加する
   *
   * @param {Number} item
   * @return {Number}
   */
  enqueue(item) {
    // TODO:
    this.data[this.size] = item;
    return this.size;
  }

  /** キューから要素を取得する
   *
   * @return {Number}
   */
  dequeue() {
    // TODO:
    if(this.size > 0){
      const firstItem = this.data[0];
      for(let i = 0; i < this.size - 1; i++){
        this.data[i] = this.data[i + 1];
      }
      this.data.length--;
      return firstItem;
    }
  }

  /** キューの要素を参照する
   *
   * @return {Number}
   */
  peek() {
    // TODO:
    return this.data[0];
  }
}

module.exports = {
  List,
  Stack,
  Queue
};
