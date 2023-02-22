// DO: 请使用逻辑或运算符把两个 if 语句合并为一个语句，如果 val 不在 10 和 20 之间（包括不是 10 和 不是 20），返回 Outside。 否则，返回 Inside。

function testLogicalOr(val) {
    // 只修改这一行下面的代码

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // 只修改这一行上面的代码
    return "Inside";
}

testLogicalOr(15);