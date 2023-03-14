// 我们已经定义了一个 htmlColorNames 函数，它以一个 HTML 颜色的数组作为输入参数。
// 请修改这个函数，使用 splice() 来移除数组中的前两个元素，并在对应的位置上添加 'DarkSalmon' 和 'BlanchedAlmond'。

/*
function htmlColorNames(arr) {
  // 只修改这一行下面的代码

  // 只修改这一行上面的代码
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
*/

//               ↓

function htmlColorNames(arr) {
    // 只修改这一行下面的代码
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    // 只修改这一行上面的代码
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));