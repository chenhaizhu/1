// 我们已经定义了一个返回 sentence 变量的 spreadOut 函数。
// 请修改这个函数，利用 spread 使该函数返回数组 ['learning', 'to', 'code', 'is', 'fun']。

/*
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // 修改这一行
  return sentence;
}

console.log(spreadOut());
*/

//               ↓

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // 修改这一行
    return sentence;
}

console.log(spreadOut());