
/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch (array, target) {
  return array.indexOf(target);
}

/**
 *  2.3.2 バイナリサーチ
 * ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝難しい。
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // ターゲットが見つかった場合、インデックスを返す
    } else if (array[mid] < target) {
      left = mid + 1; // ターゲットが中央より右にある場合、左端を更新
    } else {
      right = mid - 1; // ターゲットが中央より左にある場合、右端を更新
    }
  }

  return -1; // ターゲットが見つからない場合は -1 を返す
}

module.exports = {
  linearSearch,
  binarySearch
}
