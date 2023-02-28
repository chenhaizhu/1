# ES6

## 1. 比较 var 和 let 关键字的作用域

使用 `var` 关键字声明变量时，它是全局声明的，如果在函数内部声明则是局部声明的。

`let` 关键字的行为类似，但有一些额外的功能。 在代码块、语句或表达式中使用 `let` 关键字声明变量时，其作用域仅限于该代码块、语句或表达式。

例如：

```javascript
var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);
```

此处控制台将显示值 `[0, 1, 2]` 和 `3`。

使用 `var` 关键字，`i` 是全局声明的。 所以当 `i++` 被执行时，它会更新全局变量。 此代码类似于以下内容：

```javascript
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);
```

此处控制台将显示值 `[0, 1, 2]` 和 `3`。

如果你创建一个函数，将它存储起来，稍后在使用 `i` 变量的 `for` 循环中使用。这么做可能会出现问题。
这是因为存储的函数将始终引用更新后的全局 `i` 变量的值。

```javascript
var printNumTwo;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo());
```

此处控制台将显示值 `3`。

可以看到，`printNumTwo()` 打印了 3 而不是 2。 这是因为赋值给 `i` 的值已经更新，`printNumTwo()` 返回全局的 `i`
，而不是在 `for` 循环中创建函数时 `i` 的值。 `let` 关键字就不会出现这种现象：

```javascript
let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function () {
            return i;
        };
    }
}
console.log(printNumTwo());
console.log(i);
```

在这里控制台将显示值 `2` 和一个错误提示 `i is not defined`。

`i` 未定义，因为它没有在全局范围内声明。 它只在 `for` 循环语句中被声明。

`printNumTwo()` 返回了正确的值，因为 `let` 关键字创建了三个具有唯一值（0、1 和 2）的不同 `i` 变量在循环语句中。

[练习](./scopeOfVarAndLet.js)

## 2. 改变一个用 const 声明的数组

`const` 声明在现代 JavaScript 中有很多用例。

默认情况下，一些开发人员更喜欢使用 `const` 分配所有变量，除非他们知道需要重新分配值。 只有在这种情况下，他们才使用 `let`。

但是，重要的是要了解使用 `const` 分配给变量的对象（包括数组和函数）仍然是可变的。使用 `const` 声明只能防止变量标识符的重新分配。

```javascript
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` 将导致错误。 注释掉该行后，`console.log` 将显示值 `[5, 6, 45]`。

如你所见，你可以改变对象 `[5, 6, 7]` 本身，变量 `s` 仍将指向更改后的数组 `[5, 6, 45]`。像所有数组一样，`s`
中的数组元素是可变的，但是因为使用了 `const`，所以不能使用变量标识符 `s` 来指向一个使用赋值运算符的不同数组。

[练习](./changeArrayOfConst.js)

## 3. 防止对象改变

通过之前的章节可以看出，`const` 声明并不会真的保护数据不被改变。为了确保数据不被改变，JavaScript
提供了一个函数 `Object.freeze`。

任何更改对象的尝试都将被拒绝，如果脚本在严格模式下运行，将抛出错误。

```javascript
let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

`obj.review` 和 `obj.newProp`
赋值将导致错误，因为我们的编辑器默认在严格模式下运行，控制台将显示值 `{ name: "FreeCodeCamp", review: "Awesome" }`。

[练习](./preventObjectChange.js)

## 4. 使用箭头函数编写简洁的匿名函数

在 JavaScript 里，我们会经常遇到不需要给函数命名的情况，尤其是在需要将一个函数作为参数传给另外一个函数的时候。这时，我们会创建匿名函数。
因为这些函数不会在其他地方复用，所以我们不需要给它们命名。

这种情况下，我们通常会使用以下语法：

```javascript
const myFunc = function () {
    const myVar = "value";
    return myVar;
}
```

ES6 提供了其他写匿名函数的方式的语法糖。 你可以使用**箭头函数**：

```javascript
const myFunc = () => {
    const myVar = "value";
    return myVar;
}
```

当不需要函数体，只返回一个值的时候，箭头函数允许你省略 `return` 关键字和外面的大括号。 这样就可以将一个简单的函数简化成一个单行语句。

```javascript
const myFunc = () => "value";
```

这段代码默认会返回字符串 `value`。

[练习](./arrowFunction.js)

## 5. 编写带参数的箭头函数

和一般的函数一样，你也可以给箭头函数传递参数。

```javascript
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` 将返回 `8`。

如果箭头函数只有一个参数，则可以省略参数外面的括号。

```javascript
const doubler = item => item * 2;
```

可以给箭头函数传递多个参数。

```javascript
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` 将返回 `8`。

[练习](./arrowFunctionWithArgs.js)

## 6. 设置函数的默认参数

ES6 里允许给函数传入*默认参数*，来构建更加灵活的函数。

请看以下代码：

```javascript
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

控制台将显示字符串 `Hello John` 和 `Hello Anonymous`。

默认参数会在参数没有被指定（值为 undefined）的时候起作用。 在上面的例子中，参数 `name` 会在没有得到新的值的时候，默认使用值
`Anonymous`。 你还可以给多个参数赋予默认值。

[练习](./defaultParam.js)

## 7. 将 rest 操作符与函数参数一起使用

ES6 推出了用于函数参数的 *rest 操作符*帮助我们创建更加灵活的函数。 rest 操作符可以用于创建有一个变量来接受多个参数的函数。
这些参数被储存在一个可以在函数内部读取的数组中。

请看以下代码：

```javascript
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}

console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));
```

控制台将显示字符串 `You have passed 3 arguments.` 和 `You have passed 4 arguments.`。

使用 rest 参数，就不需要查看 `args` 数组，并且允许我们在参数数组上使用 `map()`、`filter()` 和 `reduce()`。

[练习](./restOperatpr.js)

## 8. 使用 spread 运算符展开数组项

ES6 引入了*展开操作符*，可以展开数组以及需要多个参数或元素的表达式。

下面的 ES5 代码使用了 `apply()` 来计算数组的最大值：

```javascript
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` 的值为 `89`。

我们必须使用 `Math.max.apply(null, arr)`，因为 `Math.max(arr)` 返回 `NaN`。`Math.max()`
函数中需要传入的是一系列由逗号分隔的参数，而不是一个数组。展开操作符可以提升代码的可读性，使代码易于维护。

```javascript
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` 的值应该是 `89`。

`...arr` 返回一个解压的数组。 也就是说，它*展开*数组。 然而，展开操作符只能够在函数的参数中或者数组中使用。 下面的代码将会报错：

```
const spreaded = ...arr;
```

[练习](./spreadOperator.js)

## 9. 使用解构赋值来获取对象的值

*解构赋值*是 ES6 引入的新语法，用来从数组和对象中提取值，并优雅地对变量进行赋值。

有如下 ES5 代码：

```javascript
const user = {name: 'John Doe', age: 34};

const name = user.name;
const age = user.age;
```

`name` 的值应该是字符串 `John Doe`， `age` 的值应该是数字 `34`。

下面是使用 ES6 解构赋值语句，实现相同效果：

```javascript
const {name, age} = user;
```

同样，`name` 的值应该是字符串 `John Doe`， `age` 的值应该是数字 `34`。

在这里，自动创建 `name` 和 `age` 变量，并将 `user` 对象相应属性的值赋值给它们。 这个方法简洁多了。

你可以从对象中提取尽可能多或很少的值。

[练习](./deconstructedAssignment1.js)

## 10. 使用解构赋值从对象中分配变量

可以给解构的值赋予一个新的变量名， 通过在赋值的时候将新的变量名放在冒号后面来实现。

还是以上个例子的对象来举例：

```javascript
const user = {name: 'John Doe', age: 34};
```

这是指定新的变量名的例子：

```javascript
const {name: userName, age: userAge} = user;
```

你可以这么理解这段代码：获取 `user.name` 的值，将它赋给一个新的变量 `userName`，等等。 `userName` 的值将是字符串 `John Doe`
，`userAge` 的值将是数字 `34`。

[练习](./deconstructedAssignment2.js)

## 11. 使用解构赋值从嵌套对象中分配变量

你可以使用前两节课程中相同的原则来解构嵌套对象中的值。

使用与前面的例子中类似的对象：

```javascript
const user = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};
```

这是解构对象的属性值赋值给具有相同名字的变量：

```javascript
const {johnDoe: {age, email}} = user;
```

这是将对象的属性值赋值给具有不同名字的变量：

```javascript
const {johnDoe: {age: userAge, email: userEmail}} = user;
```

[练习](./deconstructedAssignment3.js)

## 12. 使用解构赋值从数组中分配变量

在 ES6 里面，解构数组可以如同解构对象一样简单。

与数组解构不同，数组的扩展运算会将数组里的所有内容分解成一个由逗号分隔的列表。 所以，你不能选择哪个元素来给变量赋值。

而对数组进行解构却可以让我们做到这一点：

```javascript
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

控制台将显示 `a` 和 `b` 的值为 `1, 2`。

数组的第一个值被赋值给变量 `a`，数组的第二个值被赋值给变量 `b`。 我们甚至能在数组解构中使用逗号分隔符，来获取任意一个想要的值：

```javascript
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

控制台将显示 `a`、`b` 和 `c` 的值为 `1, 2, 5`。

[练习](./deconstructedAssignment4.js)

## 13. 通过 rest 参数解构

在解构数组的某些情况下，我们可能希望将剩下的元素放进另一个数组里面。

以下代码的结果与使用 `Array.prototype.slice()` 类似：

```javascript
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

控制台将显示 `1, 2` 和 `[3, 4, 5, 7]`。

变量 `a` 和 `b` 分别接收数组的第一个和第二个值。 之后，因为 rest 语法，`arr` 以数组形式接收了剩余的值。 rest
参数只能对数组列表最后的元素起作用。
这意味着你不能使用 rest 语法来省略原数组最后一个元素、截取中间的元素作为子数组。

[练习](./deconstructedAssignment5.js)

## 14. 使用解构赋值将对象作为函数的参数传递

在某些情况下，你可以在函数的参数里直接解构对象。

请看以下代码：

```javascript
const profileUpdate = (profileData) => {
    const {name, age, nationality, location} = profileData;

}
```

上面的操作解构了传给函数的对象。 这样的操作也可以直接在参数里完成：

```javascript
const profileUpdate = ({name, age, nationality, location}) => {

}
```

当 `profileData` 被传递到上面的函数时，从函数参数中解构出值以在函数内使用。

[练习](./deconstructedAssignment6.js)

## 15. 使用模板字面量创建字符串

模板字符串是 ES6 的另外一项新的功能。 这是一种可以轻松构建复杂字符串的方法。

模板字符串可以使用多行字符串和字符串插值功能。

请看以下代码：

```javascript
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

控制台将显示字符串 `Hello, my name is Zodiac Hasbro!` 和 `I am 56 years old.`。

这里发生了许多事情。 首先，这个例子使用反引号（\`），而不是引号（`'` 或者 `"`）将字符串括起来。其次，注意代码和输出中的字符串都是多行的。
不需要在字符串中插入 `\n`。 上面使用的 `${variable}` 语法是一个占位符。 这样一来，你将不再需要使用 `+`
运算符来连接字符串。当需要在字符串里增加变量的时候，你只需要在变量的外面括上 `${` 和 `}`，并将其放在模板字符串里就可以了。
同样，你可以在字符串中包含其他表达式，例如 `${a + b}`。 这个新的方式使你可以更灵活地创建复杂的字符串。

[练习](./templateLiterals.js)

## 16. 使用简单字段编写简洁的对象字面量声明

ES6 添加了一些很棒的功能，用于更方便地定义对象。

请看以下代码：

```javascript
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
```

`getMousePosition` 简单的函数，返回拥有两个属性的对象。ES6 提供了一个语法糖，消除了类似 `x: x` 这种冗余的写法。 你可以只写一次
`x`，解释器会自动将其转换成 `x: x`（或效果相同的内容）。 下面是使用这种语法重写的同样的函数：

```javascript
const getMousePosition = (x, y) => ({x, y});
```

[练习](./simpleObjectLiteralDeclaration.js)

## 17. 用 ES6 编写简洁的函数声明

在 ES5 中，当我们需要在对象中定义一个函数的时候，必须像这样使用 `function` 关键字：

```javascript
const person = {
    name: "Taylor",
    sayHello: function () {
        return `Hello! My name is ${this.name}.`;
    }
};
```

用 ES6 的语法在对象中定义函数的时候，可以删除 `function` 关键词和冒号。 请看以下例子：

```javascript
const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};
```

[练习](./conciseFunctionDeclarations.js)

## 18. 使用 class 语法定义构造函数

ES6 提供了一个新的创建对象的语法，使用关键字 _class_。

在 ES5 里面，我们通过定义一个函数 `constructor` 来创建一个对象，然后使用 `new` 关键字来实例化对象。

在 ES6 里，`class` 声明有一个 `constructor` 方法，与 `new` 关键字一起被调用。如果 `constructor` 方法没有明确定义，那么它就被含蓄地定义为没有参数。

```javascript
// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }

    takeOff() {
        console.log("To " + this.targetPlanet + "!");
    }
}

// Implicit constructor 
class Rocket {
    launch() {
        console.log("To the moon!");
    }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
```

应该注意 `class` 关键字声明了一个新的函数，里面添加了一个构造函数。 当用 `new` 创建一个新的对象时，构造函数会被调用。

**注意：** 首字母大写驼峰命名法 UpperCamelCase 是 ES6 class 命名的惯例，就像上面的 `SpaceShuttle`。

`constructor` 方法是一个特殊方法，用于创建和初始化 class 创建的对象。

[练习](./classSyntaxConstructor.js)

## 19. 使用 getter 和 setter 来控制对象的访问

你可以从对象中获得一个值，也可以给对象的属性赋值。

这些操作通常被称为 _getters_ 以及 _setters_。

Getter 函数的作用是可以让对象返回一个私有变量，而不需要直接去访问私有变量。

Setter 函数的作用是可以基于传进的参数来修改对象中私有变量。 这些修改可以是计算，或者是直接替换之前的值。

```javascript
class Book {
    constructor(author) {
        this._author = author;
    }

    // getter
    get writer() {
        return this._author;
    }

    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

控制台将显示字符串 `anonymous` 和 `newAuthor`。

请注意用于调用 getter 和 setter 的语法。 它们甚至看起来不像是函数。 getter 和 setter 非常重要，因为它们隐藏了内部的实现细节。

**注意：** 通常会在私有变量前添加下划线（`_`）。 然而，这种做法本身并不是将变量变成私有的。

[练习](./objectAccessControl.js)

## 20. 创建一个模块脚本

起初，JavaScript 几乎只在 HTML web 扮演一个很小的角色。今天，一切不同了，很多网站几乎全是用 JavaScript 所写。 为了让
JavaScript 更模块化、更整洁以及更易于维护，ES6 引入了在多个 JavaScript 文件之间共享代码的机制。
它可以导出文件的一部分供其它文件使用，然后在需要它的地方按需导入。 为了使用这一功能， 需要在 HTML 文档里创建一个 `type`
为 `module` 的脚本。 例子如下：

```javascript
<script type="module" src="filename.js"></script>
```

使用了 `module` 类型的脚本可以使用 `import` 和 `export` 特性。

[练习](./moduleScript.html)

## 21. 用 export 来重用代码块

假设有一个文件 `math_functions.js`，该文件包含了数学运算相关的一些函数。 其中一个存储在变量 `add`
里，该函数接受两个数字作为参数返回它们的和。你想在几个不同的 JavaScript 文件中使用这个函数。 要实现这个目的，就需要 `export`
它。

```javascript
export const add = (x, y) => {
    return x + y;
}
```

上面是导出单个函数常用方法，还可以这样导出：

```javascript
const add = (x, y) => {
    return x + y;
}

export {add};
```

导出变量和函数后，就可以在其它文件里导入使用从而避免了代码冗余。 重复第一个例子的代码可以导出多个对象或函数，在第二个例子里面的导出语句中添加更多值也可以导出多项，例子如下：

```javascript
export {add, subtract};
```

[练习](./string_functions.js)

## 22. 通过 import 复用 JavaScript 代码

`import` 可以导入文件或模块的一部分。 在之前的课程里，例子从 `math_functions.js` 文件里导出了 `add`。 下面看一下如何在其它文件导入它：

```javascript
import {add} from './math_functions.js';
```

在这里，`import` 会在 `math_functions.js` 里找到 `add`，只导入这个函数，忽略剩余的部分。 `./`
告诉程序在当前文件的相同目录寻找 `math_functions.js` 文件。 用这种方式导入时，相对路径（`./`）和文件扩展名（`.js`）都是必需的。

通过在 `import` 语句里添加项目，可以从文件里导入多个项目，如下：

```javascript
import {add, subtract} from './math_functions.js';
```

[练习](./importReusableCode.js)