// DO: 修改函数 abTest 当 a 或 b 小于 0 时，函数立即返回一个 undefined 并退出。

// 设置
function abTest(a, b) {
    // 只修改这一行下面的代码
    if (a < 0 || b < 0) {
        return;
    }
    // 只修改这一行上面的代码

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);