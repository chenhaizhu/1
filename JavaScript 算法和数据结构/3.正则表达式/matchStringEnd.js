// 使用锚点字符 $ 来匹配字符串 caboose 在字符串末尾 caboose。

/*
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // 修改这一行
let result = lastRegex.test(caboose);
*/

//               ↓

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // 修改这一行
let result = lastRegex.test(caboose);

