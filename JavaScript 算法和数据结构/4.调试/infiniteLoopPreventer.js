// myFunc()函数包含一个无限循环，因为终止条件i != 4永远不会为false(并中断循环) -i将每次递增 2，然后跳过 4，因为i是从奇数开始递增。
// 在终端条件中输入比较运算符，使循环仅在 i 小于或等于 4 的情况下运行。


/*
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
*/

//               ↓

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}
