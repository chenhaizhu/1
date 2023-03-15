// 我们已经定义了一个叫做 myNestedArray 的数组变量。
// 请修改 myNestedArray，使用字符串（string）、数字（number）或布尔值（boolean）的任意组合作为数组的元素，并让 myNestedArray 刚好有 5 层（注意，最外层的数组是第 1 层）。
// 同时，请在第 3 层的数组中包含字符串 deep；在第 4 层的数组中包含字符串 deeper，在第 5 层的数组中包含字符串 deepest。

/*
let myNestedArray = [
  // 只修改这一行下面的代码
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // 只修改这一行上面的代码
];
*/

//               ↓

let myNestedArray = [
    // 只修改这一行下面的代码
    ['unshift', false, 1, 2, 3, 'complex', 'nested',['deep',['deeper',['deepest']]]],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // 只修改这一行上面的代码
];