// 完成正则表达式 petRegex 以匹配 dog、cat、bird 或者 fish。

/*
let petString = "James has a pet cat.";
let petRegex = /change/; // 修改这一行
let result = petRegex.test(petString);
*/

//           ↓

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // 修改这一行
let result = petRegex.test(petString);

