// DO: 添加大于等于运算符到指定行，使得函数的返回语句有意义。

function testGreaterOrEqual(val) {
    if (val >= 20) {  // 修改这一行
        return "20 or Over";
    }

    if (val >= 10) {  // 修改这一行
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);