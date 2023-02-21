// DO: 编辑器有两个 console.log 来帮助您了解正在发生的事情。 检查控制台的代码输出以查看它是如何改变的。
// 在 myLocalScope 中声明一个本地变量 myVar 并运行测试。

function myLocalScope() {
    // 只修改这一行下面的代码
    let myVar = 10;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// 运行并检查控制台
// 在 myLocalScope 之外，未定义 myVar
console.log('outside myLocalScope', myVar);