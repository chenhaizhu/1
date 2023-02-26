// 在这个挑战中，你将使用 Object.freeze 来防止数学常量被改变。 你需要冻结 MATH_CONSTANTS 对象，使得没有人可以改变 PI 的值，或增加或删除属性。

/*
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // 只修改这一行下面的代码


    // 只修改这一行上面的代码
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
*/

//         ↓

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // 只修改这一行下面的代码

    Object.freeze(MATH_CONSTANTS);

    // 只修改这一行上面的代码
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
