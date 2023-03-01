// 使 promise 可以处理成功和失败情况。 如果 responseFromServer 是 true，调用 resolve 方法使 promise 成功。给 resolve 传递值为 We got the data 的字符串。
// 如果 responseFromServer 是 false， 使用 reject 方法并传入值为 Data not received 的字符串。

/*
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer 表示从服务器获得一个响应
    let responseFromServer;

    if(responseFromServer) {
        // 修改这一行
        resolve("We got the data");
    } else {
        // 修改这一行
        reject("Data not received");
    }
});
*/

//                   ↓

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer 表示从服务器获得一个响应
    let responseFromServer;

    if (responseFromServer) {
        // 修改这一行
        resolve("We got the data");
    } else {
        // 修改这一行
        reject("Data not received");
    }
});
