### 构造函数 
```js
function Person(){
    this.name = "zqq";
    this.age = 28;
}
var p = new Person();
```

### 当new Person()时发生了什么? 
```js
// 1.创建一个空对象
var p = {};

// 2.this变量指向对象p
Person.call(p)

// 3.p继承了构造函数Person()的原型
p.__proto__ = Person.prototype

// 4.执行构造函数Person()内的代码
```

### 高阶函数

#### 不使用高阶函数
```js
const arr1 = [1, 2, 3];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
console.log(arr2)
```

#### 使用高阶函数map
```js
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
    return item * 2;
});
console.log(arr2);
```

#### 自定义
```js
function formalGreeting() {
    console.log("How are you?");
}

function casualGreeting() {
    console.log("What's up?")
}

function greet(type, greetFormal, greetCasual) {
    if (type === 'formal') {
        greetFormal();
    } else if (type === 'casual') {
        greetCasual();
    }
}

greet('casual', formalGreeting, casualGreeting)
```

### 柯里化
```js
// 普通方法
var add = function(x, y) {
    return x + y;
}
add(3, 4)


var foo = function(x) {
    return function(y) {
        return x + y
    }
}
    
foo(3)(4)
```

## 创建自定义对象的几种方法

1 new object
```javascript
var p = new Object()
p.name = 'Tom'
p.age = 12
p.setName = function (name) {
this.name = name
}

console.log(p.name, p.age)
p.setName('Bob')
console.log(p.name, p.age)
```

2 对象字面量
```javascript
const obj2 = {
    name: "Hello World",
    age: 26,
    isBoy: true,
    test: {
        id: 123,
        tel: 180
    },
    sayName: function() {
        console.log(this.name);
    }
};
console.log(obj2);
obj2.sayName();
```

3 工厂函数
```js
function createPerson(name, age) { 
    var obj = {
        name: name,
        age: age,
        setName: function (name) {
            this.name = name
        }
    }

    return obj
}

// 创建2个人
var p1 = createPerson('Tom', 12)
var p2 = createPerson('Bob', 13)
```

4 构造函数
```javascript
// 创建一个构造函数
function Student(name) {
    this.name = name; 
    this.sayHi = function () {
        console.log(this.name + '厉害了');
    };
}
var stu1 = new Student('smyh');
console.log(stu1);
stu1.sayHi();

var stu2 = new Student('vae');
console.log(stu2);
stu2.sayHi();
```

### 对象属性
```js
const obj = {
  name: 'Hello',
  sex: 'M',
  birthday: '2000-10-10',
  grade: 99
};
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
console.log(Object.getOwnPropertyNames(obj))
Object.defineProperty(obj, 'name', {
    value: 'World',
    writable: true,
    enumerable: false,
    configurable: true
});
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
console.log(Object.getOwnPropertyNames(obj), Object.keys(obj));
```

## 原型
![img.png](prototype.png)
```js
function Person() {}
var person = new Person();

console.log(person.__proto__ == Person.prototype) 
console.log(Person.prototype.constructor == Person)
console.log(person.__proto__.constructor === Person);

console.log(Object.getPrototypeOf(person) === Person.prototype)
```

### 原型查找
```js
function Person() {
}

Person.prototype.name = 'Kevin';
var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```

### 原型对象 constructor
```js
function Foo (name) {
    this.name = name;
}
var foo = new Foo('smyhvae');
console.log(foo instanceof Foo);
console.log(foo instanceof Object);
console.log(foo.__proto__.constructor === Foo);
console.log(foo.__proto__.constructor === Object);
```

### 原型的原型
```js
function Person() {}
var person = new Person();

console.log(Person.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) 
```

##继承的几种方式

### 构造函数继承
```js
function Parent1() {
    this.name = 'parent1 的属性';
}

function Child1() {
    Parent1.call(this);         
    this.type = 'child1 的属性';
}

Parent1.prototype.say = 'hello';
    
console.log(new Child1);
//用 call 或 apply 都行：改变 this 的指向
```

### 原型链继承

```js
function Parent() {
    this.name = 'Parent 的属性';
}

function Child() {
    this.type = 'Child 的属性';
}

Child.prototype = new Parent(); 

var child = new Child();
var child1 = new Child();
console.log(child);
console.log(child1);
console.log(child1.__proto__ === child.__proto__)
```

### 组合继承
```js
function Parent3() {
    this.name = 'Parent 的属性';
    this.arr = [1, 2, 3];
}

function Child3() {
    Parent3.call(this); //执行 parent方法
    this.type = 'Child 的属性';
}
Child3.prototype = new Parent3(); //第二次执行parent方法

var child = new Child3();
```
