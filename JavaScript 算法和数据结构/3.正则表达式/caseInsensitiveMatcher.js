// 编写正则表达式 fccRegex 以匹配 freeCodeCamp，忽略大小写。 正则表达式不应与任何缩写或带有空格的变体匹配。

/*
let myString = "freeCodeCamp";
let fccRegex = /change/; // 修改这一行
let result = fccRegex.test(myString);
*/

//           ↓

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // 修改这一行
let result = fccRegex.test(myString);

