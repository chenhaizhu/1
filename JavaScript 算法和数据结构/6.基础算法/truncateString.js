/*
function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
*/

//               ↓

function truncateString(str, num) {
    if (str.length > num) {
        str = str.substring(0, num) + "...";
        return str;
    }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);