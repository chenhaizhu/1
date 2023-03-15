// 我们已经定义了一个 userActivity 对象，它包含了另一个对象。 请将 online 的属性值改为 45。

/*
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// 只修改这一行下面的代码

// 只修改这一行上面的代码

console.log(userActivity);
*/

//               ↓

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// 只修改这一行下面的代码
userActivity.data.online = 45;
// 只修改这一行上面的代码

console.log(userActivity);