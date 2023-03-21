/*
function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/

//               ↓

function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        let newArr = arr.slice(i, i + size);
        result.push(newArr);
    }
    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);