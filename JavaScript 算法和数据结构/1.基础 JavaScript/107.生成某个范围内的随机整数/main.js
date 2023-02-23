// 创建一个函数 randomRange，参数为 myMin 和 myMax，返回一个在 myMin（包括 myMin）和 myMax（包括 myMax）之间的随机整数。

function randomRange(myMin, myMax) {
    // 只修改这一行下面的代码
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // 只修改这一行上面的代码
}