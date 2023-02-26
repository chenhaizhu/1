// 使用展开操作符将 arr1 中的内容都复制到 arr2 中去。

/*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // 修改这一行

console.log(arr2);
*/

//               ↓

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // 修改这一行

console.log(arr2);