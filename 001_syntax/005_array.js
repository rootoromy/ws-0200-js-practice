/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  for(const arrayChild of array){
    console.log(arrayChild);
  }
}

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  const array = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  return array;
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  if(array.includes(num)){
    return true;
  } else {
    return false;
  }
}

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  array.foreach(
    array.filter(array[i])
  );
}

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate
}
