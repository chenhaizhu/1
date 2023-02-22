# 使用 Switch 语句从许多选项中进行选择

如果你有非常多的选项需要选择，可以使用 _switch_ 语句。 `switch` 评估一个表达式，将表达式的值与 _case_ 子句匹配。
从第一个匹配的 `case` 值执行语句，直到遇到 `break`。

这是 `switch` 语句的示例：

```javascript
switch (lowercaseLetter) {
    case "a":
        console.log("A");
        break;
    case "b":
        console.log("B");
        break;
}
```

测试 `case` 值使用严格相等（`===`）运算符进行比较。 `break` 告诉 JavaScript 停止执行 `switch` 语句。 如果遗漏了 `break`
，下一个语句将会被执行。