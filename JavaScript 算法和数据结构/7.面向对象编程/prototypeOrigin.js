// 使用 isPrototypeOf 方法验证 beagle 的 prototype。

/*
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// 只修改这一行下面的代码
*/

//               ↓

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// 只修改这一行下面的代码
Dog.prototype.isPrototypeOf(beagle);