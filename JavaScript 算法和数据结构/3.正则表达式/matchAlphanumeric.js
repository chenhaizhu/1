// 创建一个正则表达式，使其可以匹配 h 和 s 之间的一系列字母，以及 2 和 6 之间的一系列数字。 请记得在正则表达式中包含恰当的标志。
/*
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // 修改这一行
let result = myRegex; // 修改这一行
*/

//           ↓

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // 修改这一行
let result = quoteSample.match(myRegex); // 修改这一行