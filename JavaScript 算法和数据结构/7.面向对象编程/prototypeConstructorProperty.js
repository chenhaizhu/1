// 给 Dog 的 prototype 对象定义一个 constructor 属性。

/*
function Dog(name) {
  this.name = name;
}

// 只修改这一行下面的代码
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/

//               ↓

function Dog(name) {
    this.name = name;
}

// 只修改这一行下面的代码
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};