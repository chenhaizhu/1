// 使用模板字符串的反引号的语法创建一个包含条目（li）字符串的数组。
// 每个条目应该是 result 对象 failure 属性的数组内的元素，并具有 class 属性，值为 text-warning。
// makeList 函数应该返回列表项字符串的数组。

// 使用遍历方法（可以是任意形式的循环）输出指定值（如下）。
// [
//     '<li class="text-warning">no-var</li>',
//     '<li class="text-warning">var-on-top</li>',
//     '<li class="text-warning">linebreak</li>'
// ]

/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // 只修改这一行下面的代码
  const failureItems = [];
  // 只修改这一行上面的代码

  return failureItems;
}

const failuresList = makeList(result.failure);
*/

//            ↓

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    // 只修改这一行下面的代码
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // 只修改这一行上面的代码

    return failureItems;
}

const failuresList = makeList(result.failure);

