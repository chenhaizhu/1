// 使用缩写 \d 来计算电影标题中有多少个数字。 书面数字（"six" 而不是 6）不计算在内。

/*
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // 修改这一行
let result = movieName.match(numRegex).length;
*/

//               ↓

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // 修改这一行
let result = movieName.match(numRegex).length;
console.log(result);

