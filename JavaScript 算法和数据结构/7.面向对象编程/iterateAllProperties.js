// 将 beagle 的自身属性都添加到 ownProps 数组里面去。 将 Dog 中所有的 prototype 属性都添加到 prototypeProps 数组中。

/*
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// 只修改这一行下面的代码
*/

//               ↓

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// 只修改这一行下面的代码
for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}