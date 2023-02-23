// DO: 在 checkSign 函数中使用多个三元运算符来检查数字是正数 ("positive")、负数 ("negative") 或零 ("zero")，使用 findGreaterOrEqual 里面的建议缩进格式。
// 函数应返回 positive、negative 或 zero。

function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);