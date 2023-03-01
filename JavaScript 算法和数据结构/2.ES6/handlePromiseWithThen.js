// 给 promise 添加 then 方法。 用 result 做为回调函数的参数并将 result 打印在控制台。

/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer 设置为 true，表示从服务器获得有效响应
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
*/

//                   ↓

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer 设置为 true，表示从服务器获得有效响应
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
}).then(result => {
    console.log(result);
});
