// DO: 请把多个 if 语句合并为一个 if/else 语句。

function testElse(val) {
    let result = "";
    // 只修改这一行下面的代码

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // 只修改这一行上面的代码
    return result;
}

testElse(4);