// 给 Dog 的 prototype 添加一个 numLegs 属性。

/*
function Dog(name) {
  this.name = name;
}



// 只修改这一行上面的代码
let beagle = new Dog("Snoopy");
*/

//               ↓

function Dog(name) {
    this.name = name;
}


Dog.prototype.numLegs = 2;
// 只修改这一行上面的代码
let beagle = new Dog("Snoopy");