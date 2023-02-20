# 使用方括号查找字符串中的倒数第 N 个字符

我们既可以获取字符串的最后一个字符，也可以用获取字符串的倒数第 N 个字符。

例如，你可以使用 `firstName[firstName.length - 3]` 获取 `const firstName = "Augusta"` 字符串的倒数第三个字母的值

例如：

```javascript
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` 的值应该为字符串 s。