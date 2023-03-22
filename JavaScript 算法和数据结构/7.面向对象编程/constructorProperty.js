// 写一个 joinDogFraternity 函数，传入一个 candidate 参数并使用 constructor 属性来判断传入的 candidate 是不是 Dog 创建的对象实例，如果是，就返回 true，否则返回 false。

/*
function Dog(name) {
  this.name = name;
}

// 只修改这一行下面的代码
function joinDogFraternity(candidate) {

}
*/

//               ↓

function Dog(name) {
    this.name = name;
}

// 只修改这一行下面的代码
function joinDogFraternity(candidate) {
    return candidate.constructor === Dog;
}