// DO: 将小于运算符添加到指示的行，以便返回语句有意义。

function testLessThan(val) {
    if (val < 25) {  // 修改这一行
        return "Under 25";
    }

    if (val < 55) {  // 修改这一行
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);