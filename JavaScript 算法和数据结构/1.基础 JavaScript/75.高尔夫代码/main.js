// DO: 在高尔夫游戏中，每个洞都有自己的标准杆数par，意思是一个高尔夫球员为了把球打进洞里完成比赛，预计要挥杆的平均次数 strokes。
// 根据你把球打进洞所挥杆的次数 strokes 高于或低于 par 多少，有一个不同的昵称（代表打高尔夫球的水平）。
// 函数将会传送两个参数，par 和 strokes。 根据下表返回正确的字符串。下表列出不同挥杆次数（从高到低）对应的字符串。
/*
挥杆次数	     返回字符串
1	         "Hole-in-one!"
<= par - 2	 "Eagle"
par - 1	     "Birdie"
par	         "Par"
par + 1	     "Bogey"
par + 2	     "Double Bogey"
>= par + 3	 "Go Home!"
*/
// par 和 strokes 必须是数字而且是正数。 题目已定义字符串的数组，便于你操作。

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // 只修改这一行下面的代码
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes <= par - 1) {
        return names[2];
    } else if (strokes <= par) {
        return names[3];
    } else if (strokes <= par + 1) {
        return names[4];
    } else if (strokes <= par + 2) {
        return names[5];
    } else {
        return names[6];
    }
    // 只修改这一行上面的代码
}

golfScore(5, 4);
