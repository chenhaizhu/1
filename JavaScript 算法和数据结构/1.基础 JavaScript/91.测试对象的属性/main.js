// 修改函数 checkObj 检查 obj 是否有 checkProp 属性。 如果属性存在，返回属性对应的值。 如果不存在，返回"Not Found"。

function checkObj(obj, checkProp) {
    // 只修改这一行下面的代码
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
    // 只修改这一行上面的代码
}