// 我们已经定义了一个 popShift 函数，它接收一个数组作为输入参数并返回一个新的数组。
// 请修改这个函数，使用 pop() 和 shift() 来移除输入的数组中的第一个元素和最后一个元素，并将这两个被移除的元素分别赋值给对应的变量，使得最终返回的数组里包含这两个值。

/*
function popShift(arr) {
  let popped; // 修改这一行
  let shifted; // 修改这一行
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
*/

//               ↓

function popShift(arr) {
    let popped = arr.pop(); // 修改这一行
    let shifted = arr.shift(); // 修改这一行
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));