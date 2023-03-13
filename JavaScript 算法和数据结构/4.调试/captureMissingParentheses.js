// 修复代码，将变量 result 设置为调用函数 getNine 返回的值。


/*
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
*/

//               ↓

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result = getNine();
console.log(result);