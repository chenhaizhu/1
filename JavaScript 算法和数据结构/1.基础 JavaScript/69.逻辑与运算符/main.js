// DO: 请使用 && 运算符把两个 if 语句合并为一个 if 语句，如果 val 小于或等于 50 并且大于或等于 25 时，返回 Yes。 否则，将返回 No。

function testLogicalAnd(val) {
    // 只修改这一行下面的代码

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    // 只修改这一行上面的代码
    return "No";
}

testLogicalAnd(10);