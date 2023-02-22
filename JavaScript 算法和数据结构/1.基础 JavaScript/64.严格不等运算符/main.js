// DO: 在 if 语句中，添加严格不相等运算符，这样函数在当 val 不严格等于 17 的时候，会返回 Not Equal。

// 设置
function testStrictNotEqual(val) {
    if (val !== 17) { // 修改这一行
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);