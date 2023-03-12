// 修复代码中的两个符号配对错误。


/*
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
*/

//               ↓

let myArray = [1, 2, 3];
let arraySum = myArray.reduce(((previous, current) => previous + current));
console.log(`Sum of array values is: ${arraySum}`);