# 使用 For 循环遍历数组

JavaScript 中的一个常见任务是遍历数组的内容。 一种方法是使用 `for` 循环。 下面的代码将输出数组 `arr` 的每个元素到控制台：

```javascript
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

记住数组的索引从零开始的，这意味着数组的最后一个元素的下标是：`length - 1`（数组的长度 -1）。
我们这个循环的条件是 `i < arr.length`，当 `i` 的值为 `length` 的时候循环就停止了。 在这个例子中，最后一个循环是 `i === 4`
，也就是说，当 `i` 的值等于 `arr.length - 1` 时，结果输出 `6`。 然后 `i` 增加到 `5`，循环会终止，因为 `i < arr.length`
是 `false`。