// 修复正则表达式 /<.*>/，让它返回 HTML 标签 <h1>，而不是文本 "<h1>Winter is coming</h1>"。
// 请记得在正则表达式中使用通配符 . 来匹配任意字符。


/*
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // 修改这一行
let result = text.match(myRegex);
*/

//           ↓

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // 修改这一行
let result = text.match(myRegex);
console.log(result);

