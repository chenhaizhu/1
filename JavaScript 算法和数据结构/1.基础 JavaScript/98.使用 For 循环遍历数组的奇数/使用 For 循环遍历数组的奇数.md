# 使用 For 循环遍历数组的奇数

对于循环，一次不必递增一个。 通过更改我们的 `final-expression`，我们可以用偶数来计数。

初始化 `i = 0`，当 `i < 10` 的时候继续循环。 `i += 2` 让 `i` 每次循环之后增加 2。

```javascript
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
```

`ourArray` 现在将包含 `[0, 2, 4, 6, 8]`。 改变计数器（`initialization`） ，这样我们可以用奇数来递增。

