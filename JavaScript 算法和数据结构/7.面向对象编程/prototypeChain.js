// 修改以下代码使其展示出正确的原型链。

/*
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // 输出 true

// 修改下方代码，使其结果为 true
???.isPrototypeOf(Dog.prototype);
*/

//               ↓

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // 输出 true

// 修改下方代码，使其结果为 true
Object.prototype.isPrototypeOf(Dog.prototype);