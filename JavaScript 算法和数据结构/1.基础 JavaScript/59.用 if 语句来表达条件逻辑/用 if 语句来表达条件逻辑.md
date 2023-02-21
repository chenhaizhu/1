# 用 if 语句来表达条件逻辑
`if` 语句用于在代码中做出决定。 关键字 `if` 告诉 JavaScript 在小括号中的条件为真的情况下去执行定义在大括号里面的代码。 这种条件被称为 `Boolean` 条件，因为他们只可能是 `true`（真）或 `false`（假）。

当条件的计算结果为 `true`，程序执行大括号内的语句。 当布尔条件的计算结果为 `false`，大括号内的代码将不会执行。

**伪代码**
```
if（条件为真）{
语句被执行
}
```
**示例**
```javascript
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```
`test(true)` 返回字符串 `It was true`，`test(false)` 返回字符串 `It was false`。

当 `test` 被调用，并且传递进来的参数值为 `true` 时，`if` 语句会计算 `myCondition` 的结果，看它是否为 `true`。 如果条件为 `true`，函数会返回 `It was true`。 当 `test` 被调用，并且传递进来的参数值为 `false` 时，`myCondition` 不为 `true`，并且不执行大括号后面的语句，函数返回 `It was false`。