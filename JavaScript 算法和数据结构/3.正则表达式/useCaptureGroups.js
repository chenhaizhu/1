// 在 reRegex 中使用捕获组来匹配一个只由相同的数字重复三次组成的由空格分隔字符串。

/*
let repeatNum = "42 42 42";
let reRegex = /change/; // 修改这一行
let result = reRegex.test(repeatNum);
*/

//               ↓

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // 修改这一行
let result = reRegex.test(repeatNum);