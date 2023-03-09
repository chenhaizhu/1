// 修改正则表达式 ohRegex 以匹配出现 3 到 6 次字母 h 的字符串 Oh no。

/*
let ohStr = "Ohhh no";
let ohRegex = /change/; // 修改这一行
let result = ohRegex.test(ohStr);
*/

//               ↓

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // 修改这一行
let result = ohRegex.test(ohStr);
console.log(result);