// 使用元音字符集（a、e、i、o、u）在正则表达式 vowelRegex 中匹配到字符串 quoteSample 中的所有元音。一定要同时匹配大小写元音。
/*
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // 修改这一行
let result = vowelRegex; // 修改这一行
*/

//           ↓

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // 修改这一行
let result = quoteSample.match(vowelRegex); // 修改这一行

