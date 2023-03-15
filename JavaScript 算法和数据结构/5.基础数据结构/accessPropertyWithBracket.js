// 我们已经定义了 checkInventory 函数，它接受一个被扫描到的商品名作为输入参数。
// 请让这个函数返回 foods 对象中，以 scannedItem 的值所命名的属性对应的属性值。
// 在本挑战中，只有合理有效的属性名会作为参数传入 checkInventory，因此你不需要处理参数无效的情况。

/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // 只修改这一行下面的代码

  // 只修改这一行上面的代码
}

console.log(checkInventory("apples"));
*/

//               ↓

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    // 只修改这一行下面的代码
    return foods[scannedItem];
    // 只修改这一行上面的代码
}

console.log(checkInventory("apples"));