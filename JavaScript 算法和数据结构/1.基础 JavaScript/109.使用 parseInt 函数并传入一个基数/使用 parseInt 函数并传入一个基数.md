# 使用 parseInt 函数并传入一个基数

`parseInt()` 函数解析一个字符串并返回一个整数。 它还可以传入第二个参数，指定了字符串中数字的基数。 基数可以是 2 到 36
之间的整数。

函数调用如下所示：

```javascript
parseInt(string, radix);
```

这是一个示例：

```javascript
const a = parseInt("11", 2);
```

变量 radix 表示 `11` 是在二进制系统中。 这个示例将字符串 `11` 转换为整数 `3`。