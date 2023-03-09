// 使用非数字缩写 \D 来计算电影标题中有多少非数字。

/*
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // 修改这一行
let result = movieName.match(noNumRegex).length;
*/

//               ↓

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // 修改这一行
let result = movieName.match(noNumRegex).length;
console.log(result);

