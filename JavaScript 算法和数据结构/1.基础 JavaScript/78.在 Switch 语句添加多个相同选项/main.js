// DO: 请写一个 switch 语句，按如下条件设置 answer ：
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

function sequentialSizes(val) {
    let answer = "";
    // 只修改这一行下面的代码
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    // 只修改这一行上面的代码
    return answer;
}

sequentialSizes(1);