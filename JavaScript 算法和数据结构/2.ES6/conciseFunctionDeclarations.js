// 使用以上这种简短的语法，重构在 bicycle 对象中的 setGear 函数。

/*
// 只修改这一行下面的代码
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// 只修改这一行上面的代码
bicycle.setGear(3);
console.log(bicycle.gear);
*/

//              ↓

// 只修改这一行下面的代码
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// 只修改这一行上面的代码
bicycle.setGear(3);
console.log(bicycle.gear);

