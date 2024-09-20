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
let persons = [
  'Bob',
  'Mary',
  'Ann',
  'Mike'
];
function assignNumber(persons) {

  let obj = {};

  let min = Math.ceil(1);
  let max = Math.floor(10);

  obj = persons.reduce((accumulator, currentValue, index) => {

    accumulator[persons[index]] = Math.floor((Math.random() * (max - min)) + min);

    return accumulator;

  },{});

  return obj;
}
assignNumber(persons);


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

const array = [1,2,2,3,3]
function isDuplicate(array) {
  const mySet = new Set(array);
  return mySet.size !== array.length ? true : false;
}
isDuplicate(array);

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
