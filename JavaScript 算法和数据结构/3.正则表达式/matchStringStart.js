// 在正则表达式中使用脱字符来找到 Cal 在字符串 rickyAndCal 中的开始位置。

/*
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // 修改这一行
let result = calRegex.test(rickyAndCal);
*/

//           ↓

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // 修改这一行
let result = calRegex.test(rickyAndCal);

