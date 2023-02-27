// 对 half 的参数进行解构赋值，仅将 max 与 min 的值传进函数。

/*
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// 只修改这一行下面的代码
const half = (stats) => (stats.max + stats.min) / 2.0;
// 只修改这一行上面的代码
*/

//            ↓

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// 只修改这一行下面的代码
const half = ({max, min}) => (max + min) / 2.0;
// 只修改这一行上面的代码

