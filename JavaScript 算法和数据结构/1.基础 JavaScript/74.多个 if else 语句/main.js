// DO: 请将 if/else if 语句串联起来，实现下面的逻辑：
// num < 5 - 返回 Tiny
// num < 10 - 返回 Small
// num < 15 - 返回 Medium
// num < 20 - 返回 Large
// num >= 20 - 返回 Huge

function testSize(num) {
    // 只修改这一行下面的代码
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
    // 只修改这一行上面的代码
}

testSize(7);