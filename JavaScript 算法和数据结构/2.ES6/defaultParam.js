// 给函数 increment 传入默认参数，使得在 value 没有被赋值的时候，默认给 number 加上 1。

/*
// 只修改这一行下面的代码
const increment = (number, value) => number + value;
// 只修改这一行上面的代码
*/

//                 ↓

// 只修改这一行下面的代码
const increment = (number, value = 1) => number + value;
// 只修改这一行上面的代码