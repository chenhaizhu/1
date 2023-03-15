// 我们已经为你创建了包含三个项目的 foods 对象。
//  请使用上述任意语法，来为 foods 对象添加如下三个键值对：bananas 属性，值为 13；grapes 属性，值为 35；strawberries 属性，值为 27。

/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// 只修改这一行下面的代码

// 只修改这一行上面的代码

console.log(foods);
*/

//               ↓

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// 只修改这一行下面的代码
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// 只修改这一行上面的代码

console.log(foods);