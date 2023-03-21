/*
function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);
*/

//               ↓

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function (a, b) {
        return a - b;
    })
    return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);