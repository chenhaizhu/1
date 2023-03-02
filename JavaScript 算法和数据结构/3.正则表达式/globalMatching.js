// 使用正则表达式 starRegex，从字符串 twinkleStar 中匹配所有的 Twinkle 单词并提取出来。
// 注意：在正则表达式上可以有多个标志，比如 /search/gi

/*
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // 修改这一行
let result = twinkleStar; // 修改这一行
*/

//           ↓

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // 修改这一行
let result = twinkleStar.match(starRegex); // 修改这一行

