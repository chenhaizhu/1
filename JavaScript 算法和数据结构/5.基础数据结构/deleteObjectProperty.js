// 请使用 delete 关键字来移除 foods 中的 oranges、plums 和 strawberries 属性。

/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// 只修改这一行下面的代码

// 只修改这一行上面的代码

console.log(foods);
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

// 只修改这一行下面的代码
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// 只修改这一行上面的代码

console.log(foods);