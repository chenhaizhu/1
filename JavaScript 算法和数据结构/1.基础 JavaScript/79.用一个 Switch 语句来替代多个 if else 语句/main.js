// DO: 把串联的 if/else if 语句改成 switch 语句。

function chainToSwitch(val) {
    let answer = "";
    // 只修改这一行下面的代码
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    // 只修改这一行上面的代码
    return answer;
}

chainToSwitch(7);