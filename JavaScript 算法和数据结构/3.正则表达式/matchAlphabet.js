// 匹配字符串 quoteSample 中的所有字母。一定要同时匹配大小写字母。
/*
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // 修改这一行
let result = alphabetRegex; // 修改这一行
*/

//           ↓

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // 修改这一行
let result = quoteSample.match(alphabetRegex); // 修改这一行
