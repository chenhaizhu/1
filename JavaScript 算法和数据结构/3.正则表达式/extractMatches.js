// 利用 .match() 方法提取单词 coding。

/*
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // 修改这一行
let result = extractStr; // 修改这一行
*/

//           ↓

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // 修改这一行
let result = extractStr.match(codingRegex); // 修改这一行

