// 在这个挑战里，chewieQuote 已经被初始化为 Aaaaaaaaaaaaaaaarrrgh!。
// 创建一个变量为 chewieRegex 的正则表达式，使用 * 在 chewieQuote 中匹配 A 及其之后出现的零个或多个a。
// 你的正则表达式不需要使用修饰符，也不需要匹配引号。

/*
// 只修改这一行下面的代码
let chewieRegex = /change/; // 修改这一行
// 只修改这一行上面的代码

let result = chewieQuote.match(chewieRegex);
*/

//           ↓

// 只修改这一行下面的代码
let chewieRegex = /Aa*/g; // 修改这一行
// 只修改这一行上面的代码

let result = chewieQuote.match(chewieRegex);

