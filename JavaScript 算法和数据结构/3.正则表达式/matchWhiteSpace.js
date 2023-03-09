// 修改正则表达式 countWhiteSpace 查找字符串中的多个空白字符。

/*
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // 修改这一行
let result = sample.match(countWhiteSpace);
*/

//               ↓

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // 修改这一行
let result = sample.match(countWhiteSpace);
console.log(result);