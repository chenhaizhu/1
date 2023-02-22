# 用一个 Switch 语句来替代多个 if else 语句

如果你有多个选项需要选择，`switch` 语句写起来会比多个串联的 `if/else if` 语句容易些。 譬如:

```javascript
if (val === 1) {
    answer = "a";
} else if (val === 2) {
    answer = "b";
} else {
    answer = "c";
}
```

可以被下面替代：

```javascript
switch (val) {
    case 1:
        answer = "a";
        break;
    case 2:
        answer = "b";
        break;
    default:
        answer = "c";
}
```