// 使用 class 关键词，写一个 constructor 来创建 Vegetable class。
// Vegetable 这个 class 可以创建 vegetable 对象，这个对象拥有一个在 constructor 中赋值的 name 属性。

/*
// 只修改这一行下面的代码

// 只修改这一行上面的代码

const carrot = new Vegetable('carrot');
console.log(carrot.name); // 应该显示 'carrot'
*/

//              ↓

// 只修改这一行下面的代码
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

// 只修改这一行上面的代码

const carrot = new Vegetable('carrot');
console.log(carrot.name); // 应该显示 'carrot'

