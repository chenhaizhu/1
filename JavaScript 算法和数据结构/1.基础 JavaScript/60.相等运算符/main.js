// DO: 把相等运算符添加到指定的行，这样当 val 的值为 12 的时候，函数会返回 Equal。

// 设置
function testEqual(val) {
    if (val == 12) { // 修改这一行
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);