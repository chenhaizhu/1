// 使用箭头函数的语法重写赋给 magic 变量的函数，使其返回一个新的 Date() new Date()。 同时不要用 var 关键字来定义任何变量。

/*
var magic = function() {
    return new Date();
};
*/

//          ↓

const magic = () => new Date();
