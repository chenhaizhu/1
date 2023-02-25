// 数组声明为 const s = [5, 7, 2]。 使用对各元素赋值的方法将数组改成 [2, 5, 7]。

/*
const s = [5, 7, 2];
function editInPlace() {
    // 只修改这一行下面的代码

    // 使用 s = [2, 5, 7] 将无效

    // 只修改这一行上面的代码
}
editInPlace();
*/

//        ↓

const s = [5, 7, 2];

function editInPlace() {
    // 只修改这一行下面的代码
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // 使用 s = [2, 5, 7] 将无效

    // 只修改这一行上面的代码
}

editInPlace();