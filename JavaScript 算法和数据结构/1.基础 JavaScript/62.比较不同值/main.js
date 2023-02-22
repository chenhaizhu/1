// DO: 编辑器中的 compareEquality 函数使用相等运算符比较两个值。 修改函数，使其仅在值严格相等时返回 Equal 。

// 设置
function compareEquality(a, b) {
    if (a === b) { // 修改这一行
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");