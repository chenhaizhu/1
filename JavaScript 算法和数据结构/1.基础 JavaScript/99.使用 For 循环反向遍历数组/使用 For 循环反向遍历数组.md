# 使用 For 循环反向遍历数组

只要我们定义好合适的条件，for 循环也可以反向遍历。

为了让每次递减 2，我们需要改变 initialization、condition 和 final-expression。

设置 `i = 10`，并且当 `i > 0` 的时候才继续循环。 我们使用 `i -= 2` 来让 `i` 每次循环递减 2。

```javascript
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}
```

`ourArray` 现在将包含 `[10, 8, 6, 4, 2]`。 让我们改变初始值和最后的表达式，这样我们就可以按照奇数从后往前两两倒着数。