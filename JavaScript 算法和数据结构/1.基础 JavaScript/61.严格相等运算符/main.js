// DO: 在 if 语句中使用严格相等运算符，这样函数将在 val 严格等于 7 时返回字符串 Equal。

// 设置
function testStrict(val) {
    if (val === 7) { // 修改这一行
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);