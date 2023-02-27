// 使用一个带有 rest 语法的解构赋值来模拟 Array.prototype.slice() 的行为。
// removeFirstTwo() 应该返回原始数组 list 的子数组，前两个元素被省略。

/*
function removeFirstTwo(list) {
  // 只修改这一行下面的代码
  const shorterList = list; // 修改这一行
  // 只修改这一行上面的代码
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
*/

//            ↓

function removeFirstTwo(list) {
    // 只修改这一行下面的代码
    const [a, b, ...shorterList] = list; // 修改这一行
    // 只修改这一行上面的代码
    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

