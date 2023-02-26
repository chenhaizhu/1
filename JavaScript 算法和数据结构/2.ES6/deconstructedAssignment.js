// 把两个赋值语句替换成效果相同的解构赋值语句。 today 和 tomorrow 的值应该还是 HIGH_TEMPERATURES 对象中 today 和 tomorrow 属性的值。

/*
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// 只修改这一行下面的代码

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// 只修改这一行上面的代码
*/

//            ↓

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// 只修改这一行下面的代码

const {today} = HIGH_TEMPERATURES;
const {tomorrow} = HIGH_TEMPERATURES;

// 只修改这一行上面的代码
