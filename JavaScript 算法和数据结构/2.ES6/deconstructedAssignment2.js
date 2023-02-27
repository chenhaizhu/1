// 使用解构赋值语句替换两个赋值语句。 将 HIGH_TEMPERATURES 的 today 和 tomorrow 的值赋值给 highToday 和 highTomorrow。

/*
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// 只修改这一行下面的代码

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow;

// 只修改这一行上面的代码
*/

//            ↓

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// 只修改这一行下面的代码

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// 只修改这一行上面的代码

