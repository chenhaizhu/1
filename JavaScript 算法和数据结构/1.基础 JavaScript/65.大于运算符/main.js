// DO: 将大于运算符添加到指示的行，以便返回语句有意义。

function testGreaterThan(val) {
    if (val > 100) {  // 修改这一行
        return "Over 100";
    }

    if (val > 10) {  // 修改这一行
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);