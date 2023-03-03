// 创建一个匹配所有非数字或元音字符的正则表达式。 请记得在正则表达式中包含恰当的标志。
/*
let quoteSample = "3 blind mice.";
let myRegex = /change/; // 修改这一行
let result = myRegex; // 修改这一行
*/

//           ↓

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; // 修改这一行
let result = quoteSample.match(myRegex); // 修改这一行
console.log(result);