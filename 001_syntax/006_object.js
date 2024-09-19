/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  const obj = {name: 'Bob',age: 32,gender: 'male'}
  return obj;
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {

  let DataA = {
    name: 'Bob',
    age: 32,
    gender: 'male'
  }
  DataA.name = 'Mary';
  DataA.age = 37;
  DataA.gender = 'female';

  return DataA;
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(min,max) {
  let arr = [
    'Bob',
    'Mary',
    'Ann',
    'Mike'
  ];
  let obj = {};


  min = Math.ceil(min);
  max = Math.floor(max);

 const changeBobNum = Math.floor((Math.random() * (max - min)) + min);
 const changeMaryNum = Math.floor((Math.random() * (max - min)) + min);
 const changeAnnNum = Math.floor((Math.random() * (max - min)) + min);
 const changeMikeNum = Math.floor((Math.random() * (max - min)) + min);

  obj.Bob =  changeBobNum;
  obj.Mary =  changeMaryNum;
  obj.Ann =  changeAnnNum;
  obj.Mike = changeMikeNum;
  console.log(obj);

  return assignNumber(1,10);

}

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
}

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
