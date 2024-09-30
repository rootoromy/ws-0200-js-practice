
/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence (n, sum = 0) {
  if(n === 0){
    return sum;
  }
  return sumSequence(n - 1, sum + n);
}


/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

function fibonacci (num) {
  array = [];
  array.push(1);
  array.push(1);
  

  for(let i = 2; i <= num-1; i++){
    let newNum = array[i-2]+array[i-1];
    array.push(newNum);
  }
  console.log(array);
  return array;
}


/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 * ============================================難しかった。あまり理解できていない。
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize (node, sum = 0) {
  // 基本ケース：ディレクトリがファイルの場合はそのサイズを返す
  if (node.type === 'file') {
    sum = node.size;
    return sum;
  }

  // 再帰ケース：ディレクトリがフォルダの場合はその子要素を再帰的に処理
  if (node.type === 'folder' && Array.isArray(node.children)) {
    return node.children.reduce((total, child) => {
      sum = total + fileSize(child);
      return sum;
    }, 0);
  }

  // フォルダでもファイルでもない場合はサイズ0を返す
  sum = 0;
  return sum;
}


module.exports = {
  sumSequence,
  fibonacci,
  fileSize
}
