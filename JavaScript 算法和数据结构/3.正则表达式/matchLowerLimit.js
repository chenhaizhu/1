// 修改正则表达式 haRegex，匹配包含四个或更多字母 z 的单词 Hazzah。

/*
let haStr = "Hazzzzah";
let haRegex = /change/; // 修改这一行
let result = haRegex.test(haStr);
*/

//               ↓

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // 修改这一行
let result = haRegex.test(haStr);
console.log(result);

