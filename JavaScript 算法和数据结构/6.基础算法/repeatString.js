/*
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);
*/

//               ↓

function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return "";
    } else {
        let newStr = str;
        for (let i = 1; i < num; i++) {
            newStr += str;
        }
        return newStr;
    }
}

repeatStringNumTimes("abc", 3);