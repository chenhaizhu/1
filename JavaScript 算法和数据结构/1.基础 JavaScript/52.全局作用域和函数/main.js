// DO: 使用 let 或 const，在任何函数之外声明一个名为 myGlobal 的全局变量。 并给它一个初始值 10。
// 在函数 fun1中，赋值 5 给 oopsGlobal，不使用 var、let 或 const 关键字。

// 在这行下面声明 myGlobal 变量
let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;
}

// 只修改这一行上面的代码

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}