// 完善正则表达式，使其以区分大小写的方式检查 Franklin Roosevelt 或 Eleanor Roosevelt 的名字，并且应该忽略 middle names。
// 然后完善代码，使创建的正则检查 myString，根据正则是否匹配返回 true 或 false。

/*
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // 修改这一行
let result = false; // 修改这一行
// 使用 myString 通过挑战后，了解分组如何运行
*/

//               ↓

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).* Roosevelt/i; // 修改这一行
let result = myRegex.test(myString); // 修改这一行
// 使用 myString 通过挑战后，了解分组如何运行