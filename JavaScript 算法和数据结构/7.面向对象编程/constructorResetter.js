// 修改你的代码，使得 duck.constructor 和 beagle.constructor 返回各自的构造函数。

/*
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// 只修改这一行下面的代码



let duck = new Bird();
let beagle = new Dog();
*/

//               ↓

function Animal() {
}

function Bird() {
}

function Dog() {
}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// 只修改这一行下面的代码
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();