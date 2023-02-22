// DO: 写一个测试 val 的 switch 语句，并且根据下面的条件来设置不同的 answer：
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta

function caseInSwitch(val) {
    let answer = "";
    // 只修改这一行下面的代码
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    // 只修改这一行上面的代码
    return answer;
}

caseInSwitch(1);