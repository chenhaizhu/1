// 给 House 构造函数创建一个新实例，取名为 myHouse 并且传递一个数字给 bedrooms 参数。
// 然后使用 instanceof 操作符验证这个对象是否为 House 的实例。

/*
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// 只修改这一行下面的代码
*/

//               ↓

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// 只修改这一行下面的代码
let myHouse = new House(4);
myHouse instanceof House;