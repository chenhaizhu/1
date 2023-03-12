// 修改正则表达式 favRegex 以匹配美式英语（favorite）和英式英语（favourite）的单词版本。

/*
let favWord = "favorite";
let favRegex = /change/; // 修改这一行
let result = favRegex.test(favWord);
*/

//               ↓

let favWord = "favorite";
let favRegex = /favou?rite/; // 修改这一行
let result = favRegex.test(favWord);
console.log(result);