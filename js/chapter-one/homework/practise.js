//问题1
const removeRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    const a = array.filter((v, i, arr) => arr.indexOf(v) === i);
    console.log(a);
    // 输出[1, 2, 3, "a", "b"]
}
removeRepeat();

//问题2
const findRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b']
    const a = array.filter((v, i, arr) => arr.indexOf(v) !== i);
    console.log(new Set(a));
    // 输出[2, 3, "a"]
}
findRepeat();


//问题3
const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}
const obj = {
    arr: [{a: 1, f: {q: 1}}, 2, 3],
    obj: {key: 'value'},
    string: 'hello world',
};
const obj1 = clone(obj);
console.log(obj1.string === obj.string);


//问题4
const question4 = () => {
    for (var i = 0; i < 5; i++) {
        setTimeout(function (a) {
            console.log(a);
        }, 1000);
    }
    console.log(i)
    //修改代码输出 5,0,1,2,3,4
}
question4();