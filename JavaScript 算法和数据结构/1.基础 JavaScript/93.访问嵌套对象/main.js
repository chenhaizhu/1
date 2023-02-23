// DO: 访问 myStorage 对象并将 glove box 属性的内容赋值给 gloveBoxContents 变量。 在可能的情况下，对所有的属性使用点号，否则使用方括号。

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];