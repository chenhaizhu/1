// 使用箭头函数的语法重写 myConcat 函数，将 arr2 的内容添加到 arr1。

/*
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
*/

//                 ↓

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));