// 请看一下代码编辑器中我们为你写好的对象。
// user 对象包含 3 个属性； data 对象包含 5 个属性，其中包含一个叫做 friends 的数组。这就是对象作为数据结构所展现出的灵活性。
// 我们已经写好了 addFriend 函数的一部分， 请你完成这个函数，使其接受一个 user 对象，将 friend 参数中的名字添加到 user.data.friends 数组中并返回该数组。

/*
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // 只修改这一行下面的代码

  // 只修改这一行上面的代码
}

console.log(addFriend(user, 'Pete'));
*/

//               ↓

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // 只修改这一行下面的代码
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // 只修改这一行上面的代码
}

console.log(addFriend(user, 'Pete'));