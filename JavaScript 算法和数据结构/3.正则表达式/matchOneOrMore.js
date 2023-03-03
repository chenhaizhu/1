// 想要在字符串 Mississippi 中匹配到出现一次或多次的字母 s 的匹配项。 编写一个使用 + 符号的正则表达式。

/*
let difficultSpelling = "Mississippi";
let myRegex = /change/; // 修改这一行
let result = difficultSpelling.match(myRegex);
*/

//           ↓

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // 修改这一行
let result = difficultSpelling.match(myRegex);