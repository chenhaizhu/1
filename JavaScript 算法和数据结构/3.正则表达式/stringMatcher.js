// 完成正则表达式 waldoRegex，在字符串 waldoIsHiding 中匹配到文本 "Waldo"。

/*
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // 修改这一行
let result = waldoRegex.test(waldoIsHiding);
*/

//           ↓

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // 修改这一行
let result = waldoRegex.test(waldoIsHiding);

