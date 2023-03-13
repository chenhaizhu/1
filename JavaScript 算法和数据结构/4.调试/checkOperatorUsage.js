// 修复条件语句，以便程序运行正确的分支，并给 result 赋正确的值。


/*
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
*/

//               ↓

let x = 7;
let y = 9;
let result = "to come";

if (x === y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);