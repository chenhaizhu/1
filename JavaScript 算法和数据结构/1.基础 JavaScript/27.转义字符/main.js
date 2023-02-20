// DO: 以下是使用转义序列将下面三行文本分配给单个变量 myStr 的方法：
/*
FirstLine
    \SecondLine
ThirdLine
*/
// 您需要使用转义序列正确插入特殊字符。您还需要按照上面的间距进行操作，转义序列或单词之间不要有空格。
// 注意：SecondLine的缩进是通过制表符转义字符来实现的，而不是空格。

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // 修改这一行