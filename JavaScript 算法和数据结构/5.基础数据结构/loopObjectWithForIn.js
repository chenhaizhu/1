// 我们已经定义了一个 countOnline 函数，它接收一个 users 对象参数。
// 请在其中使用 for...in 语句来遍历传入函数的 users 对象中的用户，并返回 online 属性为 true 的用户数量。
// 以下是一个传入 countOnline 函数的对象示例， 注意每个用户都有 online 属性，其属性值为 true 或 false：

/*
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // 只修改这一行下面的代码

  // 只修改这一行上面的代码
}

console.log(countOnline(users));
*/

//               ↓

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    // 只修改这一行下面的代码
    let count = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            count++;
        }
    }
    return count;
    // 只修改这一行上面的代码
}

console.log(countOnline(users));