// 修改你的代码，实现一个继承自 Animal 的 Dog 实例。

/*
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// 只修改这一行下面的代码


let beagle = new Dog();
*/

//               ↓

function Animal() {
}

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() {
}

// 只修改这一行下面的代码
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();