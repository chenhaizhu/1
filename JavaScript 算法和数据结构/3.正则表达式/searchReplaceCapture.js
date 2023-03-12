// 使用三个捕获组编写一个正则表达式 fixRegex，这三个捕获组将搜索字符串 one two three 中的每个单词。
// 然后更新 replaceText 变量，以字符串 three two one 替换 one two three，并将结果分配给 result 变量。
// 保使用美元符号（$）语法在替换字符串中使用捕获组。

/*
let str = "one two three";
let fixRegex = /change/; // 修改这一行
let replaceText = ""; // 修改这一行
let result = str.replace(fixRegex, replaceText);
*/

//               ↓

let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/; // 修改这一行
let replaceText = "$3 $2 $1"; // 修改这一行
let result = str.replace(fixRegex, replaceText);
console.log(result);