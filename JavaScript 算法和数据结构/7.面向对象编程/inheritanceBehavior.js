// 使用 Object.create 方法给 Animal 创建两个实例：duck 和 beagle。

/*
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// 只修改这一行下面的代码

let duck; // 修改这一行
let beagle; // 修改这一行
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

// 只修改这一行下面的代码

let duck = Object.create(Animal.prototype); // 修改这一行
let beagle = Object.create(Animal.prototype); // 修改这一行