// DO: 写一个 switch 语句，设置以下条件设置 answer：
// a - apple
// b - bird
// c - cat
// default - stuff

function switchOfStuff(val) {
    let answer = "";
    // 只修改这一行下面的代码
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    // 只修改这一行上面的代码
    return answer;
}

switchOfStuff(1);