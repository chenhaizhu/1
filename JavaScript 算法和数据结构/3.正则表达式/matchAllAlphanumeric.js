// 使用元字符 \w 来计算所有引号中字母和数字字符的数量。

/*
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // 修改这一行
let result = quoteSample.match(alphabetRegexV2).length;
*/

//               ↓

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // 修改这一行
let result = quoteSample.match(alphabetRegexV2).length;


