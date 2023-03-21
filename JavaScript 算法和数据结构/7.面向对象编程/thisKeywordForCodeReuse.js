// 修改 dog.sayLegs 方法，以将所有直接对 dog 的引用删除。 可以参考上面 duck 的例子。
/*
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
*/

//               ↓

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    }
};

dog.sayLegs();