// 给 dog 对象设置一个名为 sayLegs 的方法。 并让它返回 This dog has 4 legs. 这句话。
/*
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
*/

//               ↓

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + dog.numLegs + " legs.";
    }
};

dog.sayLegs();