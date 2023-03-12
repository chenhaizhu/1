// 修复字符串，使其对 href 值使用不同的引号，或者转义现有的引号。 在整个字符串周围保留双引号。


/*
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
*/

//               ↓

let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);