// 修改这段代码，使 if 语句中声明的 i 变量与在函数的第一行声明的 i 变量是彼此独立的。 请注意不要在你的代码的任何地方使用 var 关键字。
// 这个练习旨在表明使用 var 与 let 关键字声明变量时作用域之间的区别。 当编写类似这个练习中的函数的时候，通常来说最好使用不同的变量名，以避免混淆。

/*
function checkScope() {
    var i = 'function scope';
    if (true) {
        i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
*/

//              ↓

function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
