/**
 *  2.2.1 バブルソート
 *======================＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝難しかったけど、理解できなかったわけではない
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
  let n = array.length;
  for(let i = 0; i < n - 1; i++){
    for(let j = 0; j < n - 1 - i; j++){
      if(array[j]>array[j+1]){
        //要素の交換
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;

      // ソート済みの部分でkeyの正しい位置を探す
      while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j]; // 要素を右にシフト
          j = j - 1;
      }
      array[j + 1] = key; // keyを正しい位置に挿入
  }
  return array;
}

/**
 *  2.2.3 マージソート
 * ======================＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝難しいけど、なんとなーくこういうことかなって解答見て思う
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort(arr) {
  // 要素が1つ以下の場合、そのまま返す（分割終了）
  if (arr.length <= 1) {
    return arr;
  }

  // 配列を半分に分割
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 分割した部分を再帰的にソートしながらマージ
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  // 左右の配列を比較しながら結果の配列に追加
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // 残りの要素を追加
  return result.concat(left.slice(i)).concat(right.slice(j));
}

/**
 *  2.2.4 クイックソート
 * ==============================================全く全然かけらも分からない
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort(a, start = 0, end = a.length - 1) {
  // ベースケース: 配列の部分が1つ以下になったら終了
  if (start >= end) return;

  // パーティション関数で配列をピボットの位置で分割
  let pivotIndex = partition(a, start, end);

  // 左側と右側で再帰的にソートを実行
  quickSort(a, start, pivotIndex - 1);
  quickSort(a, pivotIndex + 1, end);

  return a; // ソートされた配列を返す
}

function partition(a, start, end) {
  let pivot = a[end]; // ピボットとして末尾の要素を選ぶ
  let i = start - 1;  // 小さい値を追跡するインデックス

  for (let j = start; j < end; j++) {
    if (a[j] <= pivot) {
      i++;
      // iとjをスワップして、小さい値を左側に移動
      [a[i], a[j]] = [a[j], a[i]];
    }
  }
  // 最後にピボットを正しい位置に移動
  [a[i + 1], a[end]] = [a[end], a[i + 1]];
  
  return i + 1; // ピボットのインデックスを返す
}


module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}
