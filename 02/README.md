# 02 JavaScrpit-作用域与闭包

* [02-01](https://github.com/TYRMars/JSLearn/tree/master/02#02-01) `作用域和闭包-执行上下文`
* [02-02](https://github.com/TYRMars/JSLearn/tree/master/02#02-02) `作用域和闭包-this`
* [02-03](https://github.com/TYRMars/JSLearn/tree/master/02#02-03) `作用域和闭包-作用域`
* [02-04](https://github.com/TYRMars/JSLearn/tree/master/02#02-04) `作用域和闭包-闭包`
* [02-05](https://github.com/TYRMars/JSLearn/tree/master/02#02-05) `知识点小结 & 解决问题`

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

---

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
