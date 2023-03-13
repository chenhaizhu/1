// 以下函数应该创建一个具有m行和n列“零”的二维数组。
// 不幸的是，它没有产生预期的输出，因为row变量没有在外部循环中重新初始化（设置回空数组）。
// 修改代码，使其正确地返回包含 3 行 2 列“零”的二维数组，即[[0, 0], [0, 0], [0, 0]]。


/*
function zeroArray(m, n) {
  // 创建一个二维数组，有 m 行 n 列，元素均为 0
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // 添加第 m 行到 newArray

    for (let j = 0; j < n; j++) {
      // 将 n 个 0 推入当前行以创建列
      row.push(0);
    }
    // 将当前行（已有 n 个 0）推送到数组
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

*/

//               ↓

function zeroArray(m, n) {
    // 创建一个二维数组，有 m 行 n 列，元素均为 0
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // 添加第 m 行到 newArray

        for (let j = 0; j < n; j++) {
            // 将 n 个 0 推入当前行以创建列
            row.push(0);
        }
        // 将当前行（已有 n 个 0）推送到数组
        newArray.push(row);
        row = [];
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
