// 使用 class 关键字创建一个 Thermostat class。 constructor 接收一个华氏温度。
// 在 class 中，创建一个 getter 来获取摄氏温度和一个 setter 来设置温度值。
// 记得在 C = 5/9 * (F - 32) 和 F = C * 9.0 / 5 + 32 中，F 是华氏温度值，C 是摄氏温度值。

/*
// 只修改这一行下面的代码

// 只修改这一行上面的代码

const thermos = new Thermostat(76); // 设置为华氏刻度
let temp = thermos.temperature; // 24.44 摄氏度
thermos.temperature = 26;
temp = thermos.temperature; // 26 摄氏度
*/

//                 ↓

// 只修改这一行下面的代码
class Thermostat {
    constructor(temperature) {
        this._temperature = temperature;
    }

    get temperature() {
        return 5 / 9 * (this._temperature - 32);
    }

    set temperature(value) {
        this._temperature = value * 9.0 / 5 + 32;
    }
}

// 只修改这一行上面的代码

const thermos = new Thermostat(76); // 设置为华氏刻度
let temp = thermos.temperature; // 24.44 摄氏度
thermos.temperature = 26;
temp = thermos.temperature; // 26 摄氏度