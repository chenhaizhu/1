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