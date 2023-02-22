// DO: 将小于或等于运算符添加到指示的行，以便返回语句有意义。

function testLessOrEqual(val) {
    if (val <= 12) {  // 修改这一行
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // 修改这一行
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);