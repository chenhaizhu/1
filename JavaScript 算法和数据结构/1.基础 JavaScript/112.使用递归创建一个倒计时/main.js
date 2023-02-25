// DO: 已经定义了一个函数 countdown，函数有一个参数（n）。 函数应该基于参数 n 递归调用返回 n 到 1 的连续数字的数组。
// 如果函数以小于 1 的参数调用，函数应该返回空数组。
// 比如，用 n = 5 调用函数应该返回数组 [5, 4, 3, 2, 1]。 函数必需使用递归函数调用自身，不能使用任何形式的循环。

// 只修改这一行下面的代码
function countdown(n) {
    if (n < 1) {
        return [];
    }
    const resultArray = countdown(n - 1);
    resultArray.unshift(n);
    return resultArray;
}

// 只修改这一行上面的代码