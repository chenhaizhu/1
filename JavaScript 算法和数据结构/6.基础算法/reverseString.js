/*
function reverseString(str) {
  return str;
}

reverseString("hello");
*/

//               ↓

function reverseString(str) {
    if (str === "") {
        return str;
    } else {
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}

reverseString("hello");