# 01 JavaScrpit-变量与原型

## 01-01
### 变量类型和计算（1）

* JS中使用typeof能得到的哪些类型
* 何时使用`===`何时使用 `==`
* JS中有哪些内置函数
* JS变量按照`存储方式`区分为哪些类型，并描述其特点
* 如何理解`JSON`

#### 值类型

* 从内存来说值类型是把每一个值存储在变量类型的每一个位置
```JavaScript
var a = 100;
var b = a;
a = 200
console.log(b);//100
```

#### 引用类型

* 把a赋值*-成一个对象，a的位置是通过指针指向一个位置
* 把b赋值成a，其实是定义一个b，b的指针指向了那个对象位置
* 也就是有两份 `age：20`的对象
* 对象的引用，就相当于复写一个对象，这两个对象之间相互独立
* 引用类型：对象、数组、函数

```JavaScript
var a ={age:20};
var b = a;
b.age = 21;
console.log(a.age); //21
```

* typeof运算符

```JavaScript
typeof undefined //undefined
typeof 'abc' // String
typeof 123 //number
typeof true //boolean
typeof {} //object
typeof [] //object
typeof null //object
typeof console.log //funciton
```

#### 变量计算-强制类型转换

* 字符串拼接

```JavaScript
var a = 100 + 10;//110
var b = 100 + '10';//10010
```

* == 运算符

```JavaScript
100 == '100' //true
0 == '' //true
null == undefined //true
```

* if语句

```JavaScript
var a = true;
if(a){
  //....
}
var b = 100;
if (b) {
  //....
}
var c = '';
if (c) {
  //...
}
```

* 逻辑运算

```JavaScript
console.log(10 && 0); //0
console.log('' || 'abc'); //abc
console.log(!window.acb); //true

//判断一个变量会被当做true还是false
var a = 100;
console.log(!!a);//true
```
## 01-02
### 变量类型和计算（2）
#### JS中使用typeof能得到的类型

```JavaScript
//问题：JS中使用typeof能得到哪些类型
typeof undefined //undefined
typeof 'abc' // String
typeof 123 //number
typeof true //boolean
typeof {} //object
typeof [] //object
typeof null //object
typeof console.log //funciton
```

* 总结来说typeof可以得到`undefined、String、number、boolean`可以区分值类型，但对于引用类型无法很细的区分，只能区分函数。
* 尤其是`typeof null object`它是一个引用类型

#### 何时使用 === 和 ==

```JavaScript
//问题：何时使用===何时使用==

if (obj.a == null) {
  //这里相当于 obj.a === null || obj.a === undefined,简写形式
  //这是jquery源码中推荐的写法
}
```

#### JS中的内置函数

```JavaScript
//问题：JS中有哪些内置函数----数据封装类对象
//作为构造函数的作用
Object
Array
Boolean
Number
String
Function
Date
RegExp
Error
```

#### JS按照存储方式区分变量类型

```JavaScript
//JS 变量按照存储方式区分为哪些类型，并描述其特点

//值类型
var a = 10;
var b = a;
a = 11;
console.log(b);  // 10

//引用类型
var obj1 = {x:100}
var obj2 = obj1;
obj1.x = 200;
console.log(obj2.x); // 200
```

* ES中，引用类型是一种数据结构，用于将数据和功能组织在一起

## 01-03
### 变量类型和计算（3）-理解JSON

```JavaScript
//问题：如何理解JSON
//JSON只不过是一个JS对象
//JSON也是一个数据格式
JSON.stringify({a:10,b:20});
JSON.parse('{"a":10."b":20}')
```


## 02-01
### 作用域和闭包-执行上下文

* 说一下对变量提升的理解
* 说明`this`几种不同的使用场景
* 创建10个`<a>`标签，点击的时候弹出来对应的序号
* 如何理解作用域
* 实际开发中闭包的应用

#### 知识点梳理

* 执行上下文
* this
* 作用域
* 作用域链
* 闭包

#### 执行上下文

```JavaScript
console.log(a);  // undefined
var a = 100;

fn('zhangsan')  // 'zhangsan' 20
function fn(name) {
  age = 20;
  console.log(name, age);
  var age;
}
```

* 范围：一段<script>或者一个函数
* 全局：变量定义、函数声明
* 函数：变量定义、函数声明、this、arguments
* 注意⚠️“函数声明”和“函数表达式”的区别

```JavaScript
fn()
function fn() {
  //声明
}

fn1()
var fn1 = function () {
  //表示
}
var a = 100; //类似于这个

//全局声明

console.log(a);
var a = 100;

fn('zhangsan')
function fn(name) {
  console.log(this);
  age = 20;
  console.log(name,age);
  var age;

  bar(100);

  function bar(num) {
    console.log(num);
  }
}
```

## 02-02
### 作用域和闭包-this

* this 要在执行时才能确认值，定义时无法确认值

```JavaScript
var a = {
  name:'A',
  fn:function(){
    console.log(this.name);
  }
}
a.fn() //this === A
a.fn.call({name:'B'}) //this === {name:'B'}
var fn1 = a.fn;
fn1() //this === window
```
* 作为构造函数执行
* 作为对象属性执行
* 作为普通函数执行
* call apply bind

```JavaScript
function Foo(name){
  this.name = name;
}
var f = new Foo('zhangsan');

var obj = {
  name:'A',
  printName:function(){
    console.log(this.name);
  }
}
obj.printName()

function fn(){
  console.log(this);
}
fn()

// call apply bind
function fn1(name) {
  alert(name);
  console.log(this);
}
fn1.call({x:100},'zhangsan',20);
// bind
var fn2 = function fn2(name) {
  alert(name);
  console.log(this);
}.bind({y:200});
fn2('zhangsan',20);
```

## 02-03
### 作用域和闭包-作用域
#### 作用域

* 没有块级作用域
* 只有函数和全局作用域

```JavaScript
//无块级作用域
if(true){
  var name = 'zhangsan';
}
console.log(name);

//函数和全局作用域
var a = 100;
function fn() {
  var a = 200;
  console.log('fn',a);
}
console.log('global',a);
fn();
```

#### 如何理解作用域

* 自由变量
* 作用域链，即自由变量的查找
* 闭包的两个场景


```JavaScript
var x=10;
function foo() {
  alert(x);
}
function bar() {
  var x=20;
  foo();
}
bar();
```

* 生命周期
* 作用范围

## 变量作用域

* 静态作用域
* 动态作用域

### 静态作用域

* 被称为词法作用域
* 由程序定义位置决定

```JavaScript
var x=10;
function foo() {
  alert(x);
}
function bar() {
  var x=20;
  foo();
}
bar();
```

---

| 全局作用域 | |
| :------------- | :------------- |
| x   | 10   |
| foo   | <funciton> |
| bar   | <funciton> |

---

| foo作用域 | |
| :------------- | :------------- |
| - | -  |

---

| bar作用域 | |
| :------------- | :------------- |
| x | 20 |

---

### 动态作用域

* 程序运行时刻
* 栈操作

---

| x:20 |
| :------------- |
| bar:<funciton> |
| foo:<funciton> |

---

# JS变量作用域

* JS使用静态作用域
* JS没有块级作用域(全局作用域、函数作用域)
* ES5中使用词法环境管理静态作用域

```JavaScript
var x = 10;
function foo() {
  var z = 30;
  function bar(q) {
    return x + y + q;
  }
  return bar;
}
var bar = foo(20);
bar(40);
```

* 环境记录
  - 形式参数
  - 函数声明
  - 变量
* 对外部词法环境的引用（outer）

---

* 初始化

<p align="center"><img src="https://github.com/TYRMars/JSLearn/blob/master/02/img/chushihua01.png" /></p>

---

* 执行

<p align="center"><img src="https://github.com/TYRMars/JSLearn/blob/master/02/img/environment_02.png" /></p>

---

* 作用域链

```JavaScript
var a = 100;
function fn() {
  var b = 200;

  //但钱作用域没有定义变量，即“自由变量”
  console.log(a);
  console.log(b);
}
fn();

var a = 100;
function F1() {
  var b = 200;
  function F2() {
    var c = 300;
    console.log(a);//a是自由变量。形成一个链式结构，向父级去查找
    console.log(b);//b是自由变量
    console.log(c);//
  }
}
```

## 02-04
### 作用域和闭包-闭包

* 函数作为返回值

```JavaScript
function F1() {
  var a = 100;
  //返回一个函数（函数作为返回值）
  return function () {
    console.log(a);//自由变量，父作用域中查找
  }
}
//f1得到一个函数
var f1 = F1();
var a = 200;
f1();
```

* 函数作为参数传递

```JavaScript
function F1() {
  var a = 100;
  return function () {
    console.log(a);  //自由变量，父作用域中查找
  }
}
var f1 = F1();
function F2(fn) {
  var a = 200;
  fn();
}
F2(f1);
```

#### 实际开发中闭包的应用

```JavaScript
//闭包实际应用中主要作用于封装变量，收取权限
function isFirstLoad() {
  var _list = [];
  return function (id) {
    if(_list.indexOf(id) >= 0){
      return false;
    }else {
      _list.push(id);
        return true;  
    }
  }
}

// 应用
var firstLoad = isFirstLoad()
firstLoad(10) // true
firstLoad(10) // false;
firstLoad(20) // true
```

## 02-05
### 知识点小结 & 解决问题
#### 对变量提升的理解

* 变量定义
* 函数声明（注意和函数表达式的区别）

#### this几种不停的使用场景

* 作为构造函数执行
* 作为对象属性执行
* 作为普通函数执行
* call apply bind

```JavaScript
function Foo(name){
  this.name = name;
}
var f = new Foo('zhangsan');

var obj = {
  name:'A',
  printName:function(){
    console.log(this.name);
  }
}

obj.printName()

function fn(){
  console.log(this);
}
fn()

// call apply bind
function fn1(name) {
  alert(name);
  console.log(this);
}
fn1.call({x:100},'zhangsan',20);
// bind
var fn2 = function fn2(name) {
  alert(name);
  console.log(this);
}.bind({y:200});
fn2('zhangsan',20);
```

#### 创建10个<a>标签 点击的时候弹出来对应的序号

* 错误写法

```JavaScript
//这是一个错误的写法！！！
var i,a;
for (var i = 0; i < 10; i++) {
  a = document.createElement('a');
  a.innerHTML = i + '<br>';
  a.addEventListener('click',function (e) {
    e.preventDefault();
    alert(i)
  })
  document.body.appendChild(a);
}
//输出为如下： <a>"9"<br></a>
```

* 正确写法

```JavaScript
//这是一个正确写法！！！
var i;
for (i = 0; i < 10; i++) {
  (function(i){
    var a = document.createElement('a');
    a.innerHTML = i + '<br>';
    a.addEventListener('click',function (e) {
      e.preventDefault();
      alert(i);
    })
    document.body.appendChild(a);
  })(i)
}
```
