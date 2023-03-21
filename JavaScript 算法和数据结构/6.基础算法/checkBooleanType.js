/*
function booWho(bool) {
  return bool;
}

booWho(null);
*/

//               ↓

function booWho(bool) {
    return (typeof bool === "boolean");
}

booWho(null);