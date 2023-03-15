// 我们已经定义了一个 forecast 函数，它接受一个数组作为参数。
// 请修改这个函数，利用 slice() 从输入的数组中提取信息，最终返回一个包含元素 warm 和 sunny 的新数组。

/*
function forecast(arr) {
  // 只修改这一行下面的代码

  return arr;
}

// 只修改这一行上面的代码
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
*/

//               ↓

function forecast(arr) {
    // 只修改这一行下面的代码
    arr = arr.slice(2, 4);
    return arr;
}

// 只修改这一行上面的代码
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));