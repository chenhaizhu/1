// indexOf() 在快速检查一个数组中是否存在某个元素时非常有用。 我们已经定义了一个 quickCheck 函数，它接受一个数组和一个元素作为输入参数。
// 请通过 indexOf() 方法修改这个函数，使得当传入的参数在数组中存在时返回 true，否则返回 false。

/*
function quickCheck(arr, elem) {
  // 只修改这一行下面的代码

  // 只修改这一行上面的代码
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

//               ↓

function quickCheck(arr, elem) {
    // 只修改这一行下面的代码
    return !(arr.indexOf(elem) === -1);
    // 只修改这一行上面的代码
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));