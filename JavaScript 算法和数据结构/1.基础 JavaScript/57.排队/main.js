// DO: 写一个函数 nextInLine，用一个数组（arr）和一个数字（item）作为参数。
// 把数字添加到数组的结尾，然后移出数组的第一个元素。
// 最后 nextInLine 函数应该返回被删除的元素。

function nextInLine(arr, item) {
    // 只修改这一行下面的代码
    arr.push(item);
    item = arr.shift()
    return item;
    // 只修改这一行上面的代码
}

// 设置
let testArr = [1, 2, 3, 4, 5];

// 显示代码
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));