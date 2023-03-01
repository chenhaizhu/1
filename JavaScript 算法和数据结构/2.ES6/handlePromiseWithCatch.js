// 给 promise 添加 catch 方法。 用 error 作为回调函数的参数，并把 error 打印到控制台。

/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer 设置为 false，表示从服务器获得无效响应
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
*/

//                 ↓

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer 设置为 false，表示从服务器获得无效响应
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
})