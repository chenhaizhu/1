// 使用 .test() 方法，检测字符串 myString 是否符合正则表达式 myRegex 定义的规则。

/*
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // 修改这一行
*/

//           ↓

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // 修改这一行

