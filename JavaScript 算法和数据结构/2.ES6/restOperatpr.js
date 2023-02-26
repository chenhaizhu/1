// 修改 sum 函数，使用 rest 参数，使 sum 函数可以接收任意数量的参数，并返回它们的总和。

/*
const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}
*/

//               ↓

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
