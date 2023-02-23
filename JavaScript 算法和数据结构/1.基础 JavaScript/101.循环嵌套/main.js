// DO: 修改函数 multiplyAll，获得 arr 内部数组的每个数字相乘的结果 product。

function multiplyAll(arr) {
    let product = 1;
    // 只修改这一行下面的代码
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // 只修改这一行上面的代码
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);