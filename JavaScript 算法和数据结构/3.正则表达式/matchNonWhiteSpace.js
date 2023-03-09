// 修改正则表达式 countNonWhiteSpace 以查找字符串中的多个非空字符。

/*
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // 修改这一行
let result = sample.match(countNonWhiteSpace);
*/

//               ↓

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // 修改这一行
let result = sample.match(countNonWhiteSpace);
console.log(result);