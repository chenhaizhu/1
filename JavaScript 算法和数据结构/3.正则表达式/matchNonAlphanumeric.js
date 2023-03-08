// 使用缩写 \W 来计算引号中所有非字符字母和数字字符的数量。

/*
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // 修改这一行
let result = quoteSample.match(nonAlphabetRegex).length;
*/

//               ↓

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // 修改这一行
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);

