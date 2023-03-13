// 修复以下函数中的两个索引错误，将 1 到 5 之间（包含 1 和 5）的所有数字打印到控制台。


/*
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // 只修改这一行下面的代码
  for (let i = 1; i <= len; i++) {
  // 只修改这一行上面的代码
    console.log(firstFive[i]);
  }
}

countToFive();
*/

//               ↓

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // 只修改这一行下面的代码
    for (let i = 0; i <= len - 1; i++) {
        // 只修改这一行上面的代码
        console.log(firstFive[i]);
    }
}

countToFive();