// 添加必要的代码，使得 Dog 对象继承 Animal，并且把 Dog 的 prototype上的 constructor 属性设置为 Dog。
// 然后给 Dog 对象添加一个 bark() 方法，这样的话，beagle 将同时拥有 eat() 和 bark() 这两个方法。 bark() 方法中应该输出 Woof! 到控制台。

/*
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// 只修改这一行下面的代码




// 只修改这一行上面的代码

let beagle = new Dog();
*/

//               ↓

function Animal() {
}

Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Dog() {
}

// 只修改这一行下面的代码
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
}
// 只修改这一行上面的代码

let beagle = new Dog();