// 编写一个正则表达式并使用适当的字符串方法删除字符串开头和结尾的空格。
// String.prototype.trim() 方法在这里也可以实现同样的效果，但是你需要使用正则表达式来完成此项挑战。


/*
let hello = "   Hello, World!  ";
let wsRegex = /change/; // 修改这一行
let result = hello; // 修改这一行
*/

//               ↓

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // 修改这一行
let result = hello.replace(wsRegex, ""); // 修改这一行
console.log(result);