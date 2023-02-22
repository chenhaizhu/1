// DO: 在 if 语句中添加不等式运算符 != 以便函数在 val 不等于 99 时返回字符串 Not Equal。

// 设置
function testNotEqual(val) {
    if (val != 99) { // 修改这一行
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);