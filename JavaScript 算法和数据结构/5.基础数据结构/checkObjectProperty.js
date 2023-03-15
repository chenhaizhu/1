// 请完善这个函数，如果传递给它的对象包含四个名字 Alan、Jeff、Sarah 和 Ryan，函数返回 true，否则返回 false。

/*
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // 只修改这一行下面的代码

  // 只修改这一行上面的代码
}

console.log(isEveryoneHere(users));
*/

//               ↓

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // 只修改这一行下面的代码
    return 'Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj;
    // 只修改这一行上面的代码
}

console.log(isEveryoneHere(users));