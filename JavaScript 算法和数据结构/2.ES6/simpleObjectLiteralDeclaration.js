// 请使用简单属性对象的语法来创建并返回一个具有 name、age 和 gender 属性的对象。

/*
const createPerson = (name, age, gender) => {
  // 只修改这一行下面的代码
  return {
    name: name,
    age: age,
    gender: gender
  };
  // 只修改这一行上面的代码
};
*/

//              ↓

const createPerson = (name, age, gender) => {
    // 只修改这一行下面的代码
    return ({name, age, gender});
    // 只修改这一行上面的代码
};

