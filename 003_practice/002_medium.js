/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  let stringsToArray = str.split("");
  
  if(num>=0){
    let splicedArray = stringsToArray.splice(-num,num);
    let newArray = splicedArray.concat(stringsToArray);
    let arrayToStrings = newArray.join('');
    //console.log(arrayToStrings);
    return arrayToStrings;
  } else {
    //numがマイナス
    let minusSplicedArray = stringsToArray.splice(0,-num);
    let minusnewArray = stringsToArray.concat(minusSplicedArray);
    let minusArrayToStrings = minusnewArray.join('');
    //console.log(minusArrayToStrings);
    return minusArrayToStrings;
  }
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  //文字列の配列化
  let stringToArray = str.split('');
  //母音
  const vowels = ['a','i','u','e','o'];

  let newStr = stringToArray.filter(
    (stringToArray)=>{
      for(let i = 0; i < stringToArray.length; i++) {
        let judgeVowels = vowels.includes(stringToArray[i]);
        if(!judgeVowels){
          return true;
        } else {
          return false;
        }
      }
    }
  );

  //配列を文字列へ
  let newResult = newStr.join('');
  console.log(newResult);
  return newResult;
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  let string = s1;
  let searchValue = s2;

  return string.split(searchValue).length - 1;
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  let stringtarget = str;
  let stringToArray = stringtarget.split('');
  let reverse = stringToArray.reverse();
  let arrayToStringReverse = reverse.join('');

  return stringtarget===arrayToStringReverse;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let sum = 0;
  let i = 0;

  while (i < array.length) {
    if (array[i] === 4) {
      // 4が見つかったら次の数字が4かどうかチェック
      if(array[i+1] === 4){
        
          i+=3;
        

      }else{
        //4の次が4じゃなかったら普通にスキップ
        i += 2;
      }

    } else {
      // 4でない場合は合計に加える
      sum += array[i];
      i++;
    }
  }

  return sum;
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
