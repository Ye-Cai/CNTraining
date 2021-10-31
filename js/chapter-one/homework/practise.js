//问题1
const removeRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    // todo
    // 输出[1, 2, 3, "a", "b"]
}
removeRepeat();

//问题2
const findRepeat= () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    // todo
    // 输出[2, 3, "a"]
}
findRepeat();


//问题3
const clone= () => {
    //todo
}
const obj = {
    arr: [{a: 1, f: {q: 1}}, 2, 3],
    obj: {key: 'value'},
    string: 'hello world',
};
const obj1 = clone(obj);
console.log(obj1.string === obj.string);


//问题4
const question4= () => {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
    console.log(i)
    // todo
    //修改代码输出 5,0,1,2,3,4
}
question4();