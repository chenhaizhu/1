// 编辑框中有两个字符串相关的函数。 选用一种方法导出两个函数。

/*
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
*/

//            ↓

const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export {uppercaseString, lowercaseString};

