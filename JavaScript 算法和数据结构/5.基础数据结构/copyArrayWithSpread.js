// 我们已经定义了一个 copyMachine 函数，它接受 arr（一个数组）和 num（一个数字）作为输入参数。
// 该函数需要返回一个由 num 个 arr 组成的新的二维数组。 同时，我们写好了大致的流程，只是细节实现还没有写完。
// 请修改这个函数，使用展开语法，使该函数能正常工作（提示：我们已经学到过的一个方法很适合用在这里）！

/*
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // 只修改这一行下面的代码

    // 只修改这一行上面的代码
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
*/

//               ↓

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // 只修改这一行下面的代码
        newArr.push([...arr]);
        // 只修改这一行上面的代码
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));