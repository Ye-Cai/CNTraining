1.编码题：数组去重
```js
//举例
const arr = [1,2,2,3,3,3,'a','a','b'];
const a = [...new Set(arr)]
console.log(a);
```
2.编码题：查找重复元素

3.编码题：对象的深复制

4.编码题：闭包
```js
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); 
        }, 1000); 
}
console.log(i);
```
理解上述代码并进行修改，使输出变成：5,0,1,2,3,4


5.分析题：变量提升
```js
function fn(a) {
    console.log(a);
    var a = 666;
    console.log(a);
    function a() {}
    console.log(a);

    var b = function() {};
    console.log(b);
    function c() {}
}
fn(1);
```

6.学习类型转换，自行输出代码进行理解
```
!{}
12 == '12'
'false' == false
null == undefined
['1'] == 1
{} == !{}
-0 === +0
NaN === NaN

String(null) 
String(undefined) 
String(true) 
String(10) 
String([]) 
String([1,2,3]) 
String([null]) 
String([1, undefined, 3]) 
String({})

Number(null) 
Number(undefined) 
Number('10') 
Number('10a')
Number('') 
Number(true)
Number(false)
Number([])
Number(['1'])
Number({})

parseInt(168.34)
parseInt("2021_hello")
0 == true
1 == true
true + 1
true + false
1 + null
100 - '1'
'2'+1-1
true+true
