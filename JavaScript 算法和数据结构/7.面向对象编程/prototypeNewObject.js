// 通过给 prototype 设置一个对象，在 Dog 构造函数的 prototype 上添加一个属性 numLegs 以及两个方法：eat() 和 describe()。

/*
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // 只修改这一行下面的代码

};
*/

//               ↓

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // 只修改这一行下面的代码
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};