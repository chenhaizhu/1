// DO: 把 switch 语句转化为对象 lookup 调用。 使用它来查找 val 属性的值，并赋值给 result 变量。

// 设置
function phoneticLookup(val) {
    let result = "";

    // 只修改这一行下面的代码
    const object = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = object[val];
    // 只修改这一行上面的代码
    return result;
}

phoneticLookup("charlie");