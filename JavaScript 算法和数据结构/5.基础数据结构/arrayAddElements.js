// 我们已经定义了一个 mixedNumbers 函数，它接收一个数组作为参数。
// 请修改这个函数，使用 push() 和 unshift() 来将 'I', 2, 'three' 插入到数组开头；
// 将 7, 'VIII', 9 插入到数组的末尾。最终这个函数的返回值就会是一个依次包含不同形式的 1-9 的数组。

/*
function mixedNumbers(arr) {
  // 只修改这一行下面的代码

  // 只修改这一行上面的代码
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
*/

//               ↓

function mixedNumbers(arr) {
    // 只修改这一行下面的代码
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // 只修改这一行上面的代码
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));