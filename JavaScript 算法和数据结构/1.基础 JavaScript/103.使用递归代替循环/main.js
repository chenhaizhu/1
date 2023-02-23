// DO: 写一个递归函数，sum(arr, n)，返回递归调用数组 arr 从前 n 个元素和。

function sum(arr, n) {
    // 只修改这一行下面的代码
    if (n <= 0) {
        return 1;
    }
    return sum(arr, n - 1) + arr[n - 1];
    // 只修改这一行上面的代码
}