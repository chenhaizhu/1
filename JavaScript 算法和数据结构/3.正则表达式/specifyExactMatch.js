// 修改正则表达式timRegex，以匹配仅有四个字母 m 的单词 Timber。

/*
let timStr = "Timmmmber";
let timRegex = /change/; // 修改这一行
let result = timRegex.test(timStr);
*/

//               ↓

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // 修改这一行
let result = timRegex.test(timStr);