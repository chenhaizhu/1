// 修改正则表达式 userCheck 以满足文档中列出的约束。

/*
let username = "JackOfAllTrades";
let userCheck = /change/; // 修改这一行
let result = userCheck.test(username);
*/

//               ↓

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // 修改这一行
let result = userCheck.test(username);
console.log(result);

