// 创建另一个 Dog 构造函数。 这一次，给它设置两个参数：name 和 color，同时给 numLegs 赋值为 4。
// 然后创建一个新 Dog 实例保存为变量名：terrier。 再将两个字符串通过参数的形式传入name 和 color 属性。

/*
function Dog() {

}
*/

//               ↓

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Jack", "Blue");