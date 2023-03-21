/*
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/

//               ↓

function findLongestWordLength(str) {
    let maxLengthWord = "";
    const arrWords = str.split(" ");
    for (let i = 0; i < arrWords.length; i++) {
        if (arrWords[i].length > maxLengthWord.length) {
            maxLengthWord = arrWords[i];
        }
    }
    return maxLengthWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");