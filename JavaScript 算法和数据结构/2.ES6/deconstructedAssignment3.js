// 将两个赋值语句替换成等价的解构赋值。 lowToday 和 highToday 应该为 LOCAL_FORECAST 中 today.low 和 today.high 的值。

/*
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// 只修改这一行下面的代码

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// 只修改这一行上面的代码
*/

//            ↓

const LOCAL_FORECAST = {
    yesterday: {low: 61, high: 75},
    today: {low: 64, high: 77},
    tomorrow: {low: 68, high: 80}
};

// 只修改这一行下面的代码

const {today: {low: lowToday}} = LOCAL_FORECAST;
const {today: {high: highToday}} = LOCAL_FORECAST;

// 只修改这一行上面的代码

