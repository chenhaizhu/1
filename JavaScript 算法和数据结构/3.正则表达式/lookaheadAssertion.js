// 在正则表达式 pwRegex 中使用先行断言以匹配大于 5 个字符且有两个连续数字的密码。

/*
let sampleWord = "astronaut";
let pwRegex = /change/; // 修改这一行
let result = pwRegex.test(sampleWord);
*/

//               ↓

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // 修改这一行
let result = pwRegex.test(sampleWord);