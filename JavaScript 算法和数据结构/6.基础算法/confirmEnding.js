/*
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
*/

//               ↓

function confirmEnding(str, target) {
    for (let i = 0; i < str.length; i++) {
        if (str.substring(i) === target) {
            return true;
        }
    }
    return false;
}

confirmEnding("Bastian", "n");