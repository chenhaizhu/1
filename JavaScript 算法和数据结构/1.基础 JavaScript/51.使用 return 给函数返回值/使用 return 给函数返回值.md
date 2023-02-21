# 使用 return 给函数返回值

我们可以通过函数的参数（_arguments_）把值传入函数， 也可以使用 `return` 语句把数据从一个函数中传出来。

**示例**

```javascript
function plusThree(num) {
    return num + 3;
}

const answer = plusThree(5);
```

`answer` 的值为 8。

`plusThree` 带有一个参数（_argument_）`num`，并返回（return）一个等于 `num + 3` 的值。