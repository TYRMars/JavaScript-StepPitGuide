<h1 align="center">JavaScript学习</h1>
<p align="center"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498542774866&di=ed28b6b90c4be001acda441377113f2e&imgtype=0&src=http%3A%2F%2F7xkvof.com2.z0.glb.qiniucdn.com%2Farticle%2F79tvzE5PHyLClhki4Gbv.jpg" /></p>

---

* [JSLearn-ES6](https://github.com/TYRMars/JSLearn-ES6) 'ES6语法学习'

---
## JavaScript基础知识剖析

#### 01 JavaScrpit-变量与原型

#### 02 JavaScrpit-作用域与闭包

* [02-01](https://github.com/TYRMars/JSlearn#02-01) `作用域和闭包-执行上下文`
* [02-02](https://github.com/TYRMars/JSlearn#02-02) `作用域和闭包-this`
* [02-03](https://github.com/TYRMars/JSlearn#02-03) `作用域和闭包-作用域`
* [02-04](https://github.com/TYRMars/JSlearn#02-04) `作用域和闭包-闭包`
* [02-05](https://github.com/TYRMars/JSlearn#02-05) `知识点小结 & 解决问题`

#### 03 JavaScrpit-异步与单线程

* [03-01](https://github.com/TYRMars/JSlearn#03-01) `异步和单线程-什么是异步`
* [03-02](https://github.com/TYRMars/JSlearn#03-02) `异步和单线程-单线程`
* [03-03](https://github.com/TYRMars/JSlearn#03-03) `其他知识点-日期和Math`
* [03-04](https://github.com/TYRMars/JSlearn#03-04) `其他知识点-数组和对象的API`

#### 04 JavaScrpit-WebAPI基础

* [04-01](https://github.com/TYRMars/JSlearn#04-01) `从基础知识到JS-Web-API`
* [04-02](https://github.com/TYRMars/JSlearn#04-02) `DOM本质`
* [04-03](https://github.com/TYRMars/JSlearn#04-03) `DOM节点操作`
* [04-04](https://github.com/TYRMars/JSlearn#04-04) `DOM结构操作`
* [04-05](https://github.com/TYRMars/JSlearn#04-05) `DOM知识总结`
* [04-06](https://github.com/TYRMars/JSlearn#04-06) `BOM知识点`

#### 05 JavaScrpit-WebAPI扩展

* [05-01](https://github.com/TYRMars/JSlearn#05-01) `事件-知识点`
* [05-02](https://github.com/TYRMars/JSlearn#05-02) `Ajax-XMLHttpRequest`
* [05-03](https://github.com/TYRMars/JSlearn#05-03) `存储`

#### 06 JavaScrpit-模块化

* [06-01](https://github.com/TYRMars/JSlearn#06-01) `模块化`
* [06-02](https://github.com/TYRMars/JSlearn#06-02) `模块化-AMD`
* [06-03](https://github.com/TYRMars/JSlearn#06-03) `模块化-CommonJS`

#### 07 JavaScrpit-工程化

* [07-01](https://github.com/TYRMars/JSlearn#07-01) `上线回滚-上线回滚流程`

#### 08 JavaScrpit-算法

* [08-01](https://github.com/TYRMars/JSlearn#08-01) `JavaScript算法测试函数`
* [08-02](https://github.com/TYRMars/JSlearn#08-02) `JavaScript算法-冒泡排序`
* [08-03](https://github.com/TYRMars/JSlearn#08-03) `JavaScript算法-选择排序`
* [08-04](https://github.com/TYRMars/JSlearn#08-04) `JavaScript算法-插入排序`
* [08-05](https://github.com/TYRMars/JSlearn#08-05) `JavaScript算法-希尔排序`
* [08-06](https://github.com/TYRMars/JSlearn#08-06) `JavaScript算法-归并排序`
* [08-07](https://github.com/TYRMars/JSlearn#08-07) `JavaScript算法-快速排序`
* [08-08](https://github.com/TYRMars/JSlearn#08-08) `JavaScript算法-高级算法-动态规划`

#### 09 JavaScrpit-函数应用

* [09-01](https://github.com/TYRMars/JSlearn#09-01) `函数应用`

#### 10 JavaScript-性能优化

* [10-01](https://github.com/TYRMars/JSlearn#09-01) `函数应用`

#### add JavaScrpit-JS插件
* JSDemo
* JDMenu 京东无延迟菜单
* DatePicker组件开发
* 手风琴效果开发

---

# 知识点学习



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

## 02-01
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
## 03-01
### 异步和单线程-什么是异步
* 同步和异步的区别是什么？分别举一个同步和异步的例子
* 一个关于setTimeout的笔试题
* 前端使用异步的场景有哪些
#### 异步知识点
* 什么是异步（对比同步）
* 前端使用异步的场景
* 异步与单线程
#### 什么是异步
```JavaScript
console.log(100); // step1
setTimeout(function () {
  console.log(200); // step3
},1000);
console.log(300); // step2
```
#### 对比同步
```JavaScript
console.log(100);
alert(200) // 1秒钟后点击确认
console.log(300);
```
#### 何时需要异步
* 在可能发生等待的情况
* 等待过程中不能像alert一样阻塞程序运行
* 因此，所有的`所有的等待情况`都需要异步
#### 前端使用异步的场景
* 定时任务：`setTimeout,setInverval`
* 网络请求：`ajax请求`,`动态<img>加载`
```JavaScript
//ajax请求
console.log('start');
$.get('./data1.json',function (data1) {
  console.log(data1);
})
console.log('end');
//<img>加载示例
console.log('start');
var img = document.createElement('img');
img.onload = function () {
  console.log('loaded');
}
img.src = '/xxx.png';
console.log('end');
```
* 事件绑定

## 03-02
### 异步和单线程-单线程
```JavaScript
console.log(100); // step1
setTimeout(function () {
  console.log(200); // step3
});
console.log(300); // step2
```
* 从上面代码中理解单线程
    * 执行第一行，打印100
    * 执行setTimeout后，传入setTimeout的函数会被暂存起来，不会立即执行（单线程的特点，不能同时干两件事）
    * 执行最后一行打印300
    * 待所有程序执行完，处于空闲状态时，会立马看有没有暂存起来的要执行
    * 发现暂存起来的`setTimeout`中的函数无需等待时间，就立即来过来执行
#### 解答：异步与单线程
* 同步和异步的区别是什么？分别举一个同步和异步的例子
    * 同步会阻塞代码执行，而异步不会
    * `alert`是同步，`setTimeout`是异步
* 一个关于setTimeout的笔试题
* 可以说`setTimeout`是等待页面加载完毕后，在进行加载
```JavaScript
console.log(1);
setTimeout(function () {
  console.log(2);
},0)
console.log(3);
setTimeout(function () {
  console.log(4);
},1000)
console.log(5);
```
* 前端使用异步的场景有哪些
    * 定时任务:`setTimeout,setInverval`
    * 网络任务:`ajax`请求，动态`<img>`加载
    * 事件绑定

## 03-03
### 其他知识点-日期和Math
#### 获取 2017-06-10 格式的日期

```JavaScript
Date.now(); // 获取当前时间毫秒数
var dt = new Date();
dt.getTime() // 获取毫秒数
dt.getFullYear() // 年
dt.getMonth() // 月（0-11）
dt.getDate() // 日（0-31）
dt.getHours() // 小时（0-23）
dt.getMinutes() // 分钟（0-59）
dt.getSeconds() // 秒 （0-59）
```

#### 获取随机数，要求时长度一致的字符串格式
* `Math` 获取随机数 `Math.random()`

## 03-04
### 其他知识点-数组和对象的API
#### 写一个能遍历对象和数组的通用forEach函数
##### 数组API
* `forEach` 便利所有元素

```JavaScript
var arr = [1,2,3];
arr.forEach(function (item,index) {
  //遍历数组所有元素
  console.log(index,item);
})
```

* `every` 判断所有元素是否都符合条件

```JavaScript
var arr = [1,2,3];
var result = arr.every(function (item,index) {
  if (item<4) {
    //用于判断所有的数组元素，都满足一个条件
    return true;
  }
})
console.log(result);
```

* `some` 判断是否有至少一个元素符合条件

```JavaScript
var arr = [1,2,3];
var result = arr.some(function (item,index) {
  // 用来判断所有的数组元素，只要有一个满足条件即可
  if (item<2) {
    return true;
  }
})
console.log(result);
```

* `sort` 排序

```JavaScript
var arr = [1,4,2,3,5]
var arr2 = arr.sort(function (a,b) {
  //从小到大排序
  return a - b;
  //从大到小排序
  //return b - a
})
console.log(arr2);
```

* `map` 对元素重新组装，生成新数组

```JavaScript
var arr = [1,2,3,4]
var arr2 = arr.map(function functionName(item,index) {
  //将元素重新组装，并返回
  return '<b>' + item + '</b>';
})
console.log(arr2);
```

* `filter` 过滤符合条件的元素

```JavaScript
var arr = [1,2,3];
var arr2 = arr.filter(function (item,index) {
  //通过某一个条件过滤数组
  if(item >= 2){
    return true;
  }
})
console.log(arr2);
```

##### 对象API

```JavaScript
var obj = {
  x: 100,
  y: 200,
  z: 300
}
var key
for (key in obj) {
  // 注意这里的hasOwnProperty，请查看原型链
  if (obj.hasOwnProperty(key)) {
    console.log(key,obj[key]);
  }
}
```

* 举个例子

```html
<!DOCTYPE html>
<html>
	<head>
    <meta charset="utf-8" />
		<title>Register</title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  </head>
<body>
  <script type="text/javascript">
    console.log(Date.now());
    var dt = new Date();
    console.log(dt);
    console.log(dt.getTime());
    console.log(dt.getFullYear());
    console.log(dt.getDate());

    var arr = [1,2,3,4]

    arr.forEach(function (item,index) {
      console.log(index,item);
    })
  </script>
</body>
</html>
```

#### 问题解答
* 获取2017-06-10格式的日期

```JavaScript
function formatDate(dt) {
  if (!dt) {
    dt = new Date();
  }
  var year = dt.getFullYear();
  var month = dt.getMonth() + 1;
  var date = dt.getDate();
  if (month < 10) {
    //强制转换类型
    month = '0' + month;
  }
  if (date < 10) {
    //强制转换类型
    date = '0' + date;
  }
  //强制转换类型
  return year + '-' + month + '-' + date;
}
var dt = new Date();
var formatDate = formatDate(dt);
console.log(formatDate);
```

* 获取随机数，要求是长度一致的字符串格式

```JavaScript
var random = Math.random();
var random = random + '0000000000'; //后面加上10个0
var random = random.slice(0,10);
console.log(random);
```

* 写一个能遍历对象和数组的通用forEach函数

```JavaScript
//do
var arr = [1,2,3];
//注意，这里的参数的顺序换了，为了和对象的遍历格式一致
forEach(arr,function (index,item) {
  console.log(index.item);
})

var obj = {x:100,y:200};
forEach(obj,function (key,value) {
  console.log(key,value);
})

//init
function forEach(obj,fn) {
  var key;
  if (obj instanceof Array) {
    //准确判断是不是一个数组
    obj.forEach(function (index.item) {
      fn(index,item);
    })
  }else {
    //不是数组就是对象
    for (key in obj){
      fn(key,obj[key]);
    }
  }
}
```

## 04-01
### 从基础知识到JS-Web-API

* 变量类型和计算
* 原型和原型链
* 闭包和作用域
* 异步和单线程
* 其他（如日期、Math、各种常用API）


#### 特点

* 特点：表面上来看不能用于工作中开发代码
* 内置函数：`Object Array Boolean String ......`
* 内置对象：`Math JSON ...`
* 我们连在网页弹出一句`Hello World`都不能实现

#### JS-Web-API

* JS基础知识：ECMA 262标准
* JS-Web-API：W3C标准
* W3C标准中关于JS的规定有：
    * DOM操作
    * BOM操作
    * 事件绑定
    * ajax请求(包含http协议)
    * 存储


#### 基本操作

* 页面弹框是`windows.alert(123)`，浏览器需要做：
    * 定义一个`windows`全局变量，对象类型；
    * 给它定义一个`alert`属性，属性值是一个函数；
* 获取元素document.getElementById(id),浏览器需要：
    * 定义一个document全局变量，对象属性；
    * 给它定义一个getElementById的属性，属性值是一个函数；
* W3C标准没有规定任何JS基础相关的东西；
* 不管什么变量类型、原型、作用域和异步
* 只管定义用于浏览器中JS操作页面的API和全局变量
* 全面考虑，JS内置的全局函数和对象有哪些？
* 之前ECMA的
* 比如 window document
* 所有未定义的全局变量，如`navigator.userAgent`
#### 总结
* 常说的JS(浏览器执行的JS)包含两个部分：
* JS基础知识(ECMA262标准)；
* JS-Web-API(W3C标准)；

## 04-02
### DOM操作
* Document Object Model
* DOM是哪种基本的数据结构
* DOM操作的常用API有哪些
* DOM节点的attr和property有和区别


#### DOM的本质
* XML
```XML
<?xml version="1.0" encoding="UTF-8"?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Dont forget me this weekend</body>
<other>
<a></a>
<b></b>
</other>
</note>
```

* HTML

```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Document</title>
</head>
<body>
  <div>
    <p>this is p</p>
  </div>
</body>
</html>
```

## 04-03
### DOM节点操作
* 获取DOM节点
* prototype,获取JS对象上的属性
* Attribute,获取DOM标签上的属性
#### 获取DOM节点
```JavaScript
var div1 = document.getElementById('div1'); //元素
var divList = document.getElementByTagName('div'); //集合
console.log(divList.length);
console.log(divList[0]);

var containerList = document.getElementByClassName('.container'); //集合
var pList = document.querySelectorAll('p'); //集合
```

#### property

```JavaScript
var pList = document.querySelectorAll('p');
var p = pList[0];
console.log(p.style.width); // 获取样式
p.style.width = '100px' // 修改样式
console.log(p.className);//获取class
p.className = 'p1' //修改class

// 获取 nodeName 和 ndoeType
console.log(p.nodeName);
console.log(p.nodeType);
```

#### Attribute

```JavaScript
var pList = document.querySelectorAll('p');
var p = pList[0];
p.getAttribute('data-name');
p.getAttribute('data-name','imooc');
p.getAttribute('style');
p.setAttribute('style','font-size:30px;');
```

## 04-04
### DOM结构操作
* 新增节点

```JavaScript
var div1 = document.getElementById('div1');
//添加新节点
var p1 = document.createElement('p');
p1.innerHTML = 'this is p1';
div1.appendChild(p1); //添加新创建的元素
//移除已有节点
var p2 = document.getElementById('p2');
div1.appendChild(p2);
```
* 获取父元素-获取子节点

```JavaScript
var div1 = document.getElementById('div1');
var parent = div1.parentElement;
```
* 删除节点

```JavaScript
var div1 = document.getElementById('div1');
var child = div1.childNodes;
div1.removeChild(child[0]);
```
#### 举个栗子(例子：example)！！！
```HTML
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <div id="div1">
    <p id="p1">this is p1</p>
    <p id="p2">this is p2</p>
  </div>
  <div id="div2">
    <p id="p3">this is p3</p>
    <p id="p4">this is p4</p>
  </div>
  <script type="text/javascript">
  // 1.
  // var p = document.createElement('p');
  // p.innerHTML = 'new p';
  // var div1 = document.getElementById('div1');
  // div1.appendChild(p);
  // 2.移动P4到div1中
  var p4 = document.getElementById('p4');
  var div1 = document.getElementById('div1');
  div1.appendChild(p4);
  console.log(p4.parentElement);
  console.log(div1.parentElement);
  console.log(div1.childNodes);
  console.log(div1.childNodes[0].nodeType); //text 3
  console.log(div1.childNodes[1].nodeType); //p    1
  </script>
</body>
</html>
```
## 04-05
### DOM知识解答

* DOM是哪种基本的数据结构?
    * 树
* DOM操作的常用API有哪些
    * 获取DOM节点，以及节点的`property`和`Attribute`
    * 获取父节点，获取子节点
    * 新增节点，删除节点
* `DOM节点`的`Attribute`和`property`有何区别
    * `property`只是一个`JS对象`的属性的修改
    * `Attribute`是对`html标签`属性的修改
* 重点总结
    * DOM本质
    * DOM节点的操作
    * DOM结构操作

## 04-06
### BOM操作
* Browser Object Model
#### 如何监测浏览器的类型
#### 拆解url的各部分
#### 知识点
* `navigator & screen`

```JavaScript
//navigator
var ua = navigator.userAgent;
var isChrome = ua.indexOf('Chrome');
console.log(isChrome);
//screen
console.log(screen.width);
console.log(screen.height);
```

* `location & history`
```JavaScript
//location
console.log(location.href);
console.log(location.protocel);
console.log(location.pathname);
console.log(location.search);
console.log(location.hash);
//history
history.back();
history.forward();
```

## 05-01
#### 编写一个通用的事件监听函数
#### 描述事件冒泡流程

* DOM树形结构
* 事件冒泡
* 阻止冒泡
* 冒泡的应用

#### 对于一个无限下拉加载图片的页面，如何给每个图片绑定事件

* 使用代理
* 知道代理的有点

##### 通用事件绑定

```JavaScript
var btn = document.getElementById('btn1');
btn.addEventListener('click',function (event) {
  console.log('clicked');
})

function bindEvent(elem,type,fn) {
  elem.addEventListener(type,fn);
}
var a = document.getElementById('link1')
bindEvent(a,'click',function(e){
  e.preventDefault(); //阻止默认行为
  alert('clicked');
});
```

* 关于IE低版本的兼容性
    * IE低版本使用attachEvent绑定事件，和W3C标准不一样
    * IE低版本使用量非常少，很多网站早已不支持
    * 建议对IE低版本的兼容性：了解即可，无需深究
    * 如果遇到对IE低版本要求苛刻的面试，果断放弃

#### 冒泡与捕获

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <style media="screen">
  #div1{
    width: 300px;
    height: 100px;
    background: red;
    color: #fff;
    text-align: center;
  }
  </style>
  <body>
    <div id="div1" >
      目标元素
    </div>
    <script type="text/javascript">
      var ev =document.getElementById('div1');
      window.addEventListener('click',function () {
        console.log("window click");
      },true);
      document.addEventListener('click',function () {
        console.log('document click');
      },true);
      document.documentElement.addEventListener('click',function () {
        console.log('html click');
      },true);
      document.body.addEventListener("click",function () {
        console.log('body click');
      },true);
      ev.addEventListener('click',function () {
        console.log('ev click');
      })
    </script>
  </body>
</html>
```

#### 事件冒泡

```html
<body>
  <div id="div1">
    <p id="p1">激活</p>
    <p id="p2">取消</p>
    <p id="p3">取消</p>
    <p id="p4">取消</p>
  </div>
  <div id="div2">
    <p id="p5">取消</p>
    <p id="p6">取消</p>
  </div>
</body>
```

```JavaScript
var p1 = document.getElementById('p1');
var body = document.body;
bindEvent(p1,'click',function (e) {
  e.stopPropatation();
  alert('激活');
});
bindEvent(body,'click',function(e){
  alert('取消');
})
```

#### 代理
```html
<div id="div1">
  <a href="#">a1</a>
  <a href="#">a2</a>
  <a href="#">a3</a>
  <a href="#">a4</a>
  <!-- 会随时新增更多a标签 -->
</div>
```
```JavaScript
var div1 = document.getElementById('div1');
div1.addEventListener('click',function (e) {
  var target = e.target;
  if (target.nodeName === 'A') {
    alert(target.innerHTML);
  }
})
```
#### 完善通用绑定事件的函数

```JavaScript
//使用代理
var div1 = document.getElementById('div1');
bindEvent(div1,'click','a',function (e) {
  console.log(this.innerHTML);
})
```

```JavaScript
function bindEvent(elem,type,selector,fn) {
  if (fn == null) {
    fn = selector;
  }
  elem.addEventListener(type,function (e) {
    var target;
    if (selector) {
      target = e.target;
      if (target.matches(selector)) {
        fn.call(target,e);
      }
    }else {
      fn(e);
    }
  })
}
```

## 05-02
### Ajax-XMLHttpRequest

* 手动编写一个ajax，不依赖第三方库
* 跨域的几种实现方式

#### 知识点
##### XMLHttpRequest

```JavaScript
var xhr = new XMLHttpRequest();
xhr.open("GET","/api",false)
xhr.onreadystatechange = function () {
  //这里的函数异步执行，可参考之前JS基础的异步模块
  if(xhr.readyState == 4){
    if (xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}
xhr.send(null);
```

* IE低版本使用ActiveXObject，和W3C标准不一样
* IE低版本使用量已经非常少，很多网站早已不支持IE低版本
* 建议对IE低版本的兼容性：了解即可，无需深究

##### 状态码
```JavaScript
xhr.onreadystatechange = function () {
  //这里的函数异步执行，可参考之前JS基础的异步模块
  if(xhr.readyState == 4){
    if (xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}
```
* readyState
    * 0-(未初始化)还没有调用send()方法
    * 1-(载入)已调用send()方法，正在发送请求
    * 2-(载入完成)send()方法执行完成，已经接收到全部响应内容
    * 3-(交互)正在解析响应内容
    * 4-(完成)响应内容解析完成，可以在客户端调用
* status
    * 2XX-表示成功处理请求。如200
    * 3XX-需要重定向，浏览器直接跳转
    * 4XX-客户端请求错误，如404
    * 5XX-服务端错误

##### 跨域
* 什么时跨域
    * 浏览器有同源策略，不允许ajax访问其他域接口
    * http://www.yourname.com/page1.html
    * http://m.imooc.com/course/ajaxcourserecom?cid=459
    * 跨域条件：协议、域名、端口、有一个不同就算跨域
        * 但是有三个标签允许跨域加载资源
        * `<img src=XXX>`
        * `<link href=XXXX>`
        * `<script src=XXX>`
    * 三个标签的场景
        * <img>用于打点统计，统计网站可能是其他域
        * <link><script>可以使用CDN，CDN的也是其他域
        * <script>可以用于JSONP
    * 跨域注意事项
        * 所有的跨域请求都必须经过信息提供方允许
        * 如果未经允许即可获得，那是浏览器同源策略出现漏洞

* JSONP
    * 加载 http://coding.m.imooc.com/classindex.html
    * 不一定服务器端真正有一个`classindex.html`文件
    * 服务器可以根据请求，动态生成一个文件，返回
    * 同理与<script src="http://coding.kejiganhuo.com/api.js">

    * 假如你的网站要跨域访问网站的一个接口
    * 给你一个地址http://coding.kejiganhuo.com/api.js
    * 返回内容格式如callback({x:100,y:200})(可动态生成)

```html
<script>
window.callback = function (data) {
  //这是我们跨域的到信息
  console.log(data);
}
</script>
<script src="http://coding.kejiganhuo.com/api.js"></script>
<!-- 以上将返回 callback({x:100,y:200}) -->
```

* 服务器端设置http header
    * 另外一个解决跨域的简洁方法，需要服务器来做
    * 但是作为交互方，我们必须知道这个方法
    * 是将来解决跨域问题的一个趋势

```JavaScript
//注意：不同后端语言的写法可能不一样

//第二个参数填写允许跨域的域名称，不建议直接写 “*”
response.setHeader("Access-Control-Allow-Origin","http://a.com, http://b.com");
response.setHeader("Access-Control-Allow-Header","X-Requested-With");
response.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

//接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials","true");
```

## 05-03
### 存储

* 请描述一下`cookie`,`sessionStorage`和`localStorage`的区别？

#### cookie

* 本身用于客户端和服务端通信
* 但是它有本地存储的功能，于是就被`借用`
* 使用document.cookie = ... 获取和修改即可

##### cookie用于存储的缺点

* 存储量小，只有4kb
* 所有http请求都带着，会影响获取资源的效率
* API简单，需要封装才能用document.cookie = ...

#### localStorage和sessionStorage

* HTML5专门为存储设计，最大容量5M
* API简答易用：
* localStorage.setItem(key,value);localStorage.getItem(key);
* sessionStorage关闭浏览器会清理
* iOS safari 隐藏模式下，localStorage.getItem会报错
* 建议统一使用try-catch封装

#### cookie sessionStorage localStorage 的区别

* 容量
* 是否会携带到ajax中
* API易用性

## 06-01
### 模块化

* 不使用模块化
* 使用模块化
* AMD
* CommonJS

#### 不使用模块化

* `util getFormatDate函数`
* `a-util.js aGetFormatDate函数 使用getFormatDate`
* `a.js aGetFormatDate`
* 定义

```JavaScript
//util.js
function getFormatDate(date,type) {
  //type === 1返回 2017-06-15
  //type === 2返回 2017年6月15日 格式
  //...
}
//a-util.js
function aGetFormatDate(data) {
  //返回
  return getFormatDate(date,2);
}
// a.js
var dt = new Date()
console.log(aGetFormatDate(dt));
```

* 使用

```html
<script src="util.js"></script>
<script src="a-util.js"></script>
<script src="a.js"></script>
<!-- 1.这些代码中的函数必须是全局变量，才能暴露给使用方。全局变量污染 -->
<!-- 2. a.js 知道要引用 a-util.js ,但是他知道还需要依赖于util.js吗？ -->
```
#### 使用模块化

```JavaScript
//util.js
export{
  getFormatDate:function (data,type) {
    //type === 1 返回 2017-06-15
    //type === 2 返回 2017年6月15日 格式
  }
}
//a-util.js
var getFormatDate = require('util.js');
export{
  aGetFormatDate:function (date) {
    //要求返回 2017年6月15日 格式
    return getFormatDate(date,2);
  }
}
// a.js
var aGetFormatDate = require('a-util.js')
var dt = new Date();
console.log(aGetFormatDate(dt));

//直接‘<script src="a.js"></script>’,其他的根据依赖关系自动引用
//那两个函数，没必要做成全局变量，不会带来污染和覆盖
```

## 06-02
### AMD

* require.js `requirejs.org/`
* 全局define函数
* 全局require函数
* 依赖JS会自动、异步加载

```JavaScript
//util.js
define(function () {
  return{
    getFormatDate: function (date,type) {
      if (type === 1) {
        return '2017-06-15'
      }
      if (type === 2) {
        return '2017年6月15日'
      }
    }
  }
});

//a-util.js
define(['./util.js'],function (util) {
  return{
    aGetFormatDate: function (date) {
      return util.getFormatDate(date,2);
    }
  }
});

// a.js
define('[./a-util.js]',function (aUtil) {
  return{
    printDate:function (date) {
      console.log(aUtil.aGetFormatDate);
    }
  }
});

//main.js
require('[./a.js]',function (a) {
  var date = new Date();
  a.printDate(date);
});
```

* 使用

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Document</title>
</head>
<body>
  <p>AMD test</p>
  <script src="/require.min.js" data-main="./main.js"></script>
</body>
</html>
```

## 06-03
### CommonJS
* nodejs模块化规范，现在被大量用于前端，原因：
    * 前端开发依赖的插件和库，都可以从npm中获取
    * 构建工具的高度自动化，是的使用npm的成本非常低
    * CommonJS不会异步加载JS，而是同步一次性加载出来

```JavaScript
module.exports = {
  getFormatDate:function (data,type) {
    if (type === 1) {
      return '2017-06-15';
    }
    if (type === 2) {
      return '2017年6月15日';
    }
  }
}

// a-util.js
var util = require('util.js')
module.exports = {
  aGetFormatDate:function (data) {
    return util.getFormatDate(data,2);
  }
}
```

#### AMD和CommonJS的使用场景

* 需要异步加载JS，使用AMD
* 使用了npm之后建议使用CommonJS

## 06-04
### Git
#### 常用命令

* `git init`git初始化
* `git add .`文件新增
* `git checkout XXX`出错还原
* `git commit -m "XXX"`commit提交到本地仓库 后面为注释
* `git push origin master` 代码上传
* `git pull origin master` 代码下载

##### 多人开发

* `git branch`看当前分支
* `git checkout -b xxx/git checkout xxx`创建一个分支/切换分支
* `git merge xxx`分支更改的东西提交到master或者分支

## 07-01
### 上线回滚-上线回滚流程

* 上线和回滚的基本流程
* linux基本命令

#### 上线回滚流程

* 重要的开发环节

#### 上线流程要点

* 将测试完的代码提交到git版本库的master分支
* 将当前服务器的代码全部打包并记录版本号，备份
* 将master分支的代码提交覆盖到线上服务器，生成新的版本号

#### 回滚流程要点

* 将当前服务器的代码打包并记录版本号，备份
* 将备份的上一个版本号解压，覆盖到线上服务器，并生成新的版本号

#### Linux基本命令

* 服务器使用Linux居多，server版，只有命令行
* 测试环境要匹配线上环境，因此也是Linux
* 经常需要登陆测试机来自己配置、获取数据

## 08-01
### JavaScript算法测试函数

* SetData()函数生成了存储在数组中的随机数字。Math类的random()函数会生成[0,1)区间内的随机数字。换句话说，random()函数生成的随机数字大于等于0，但不会等于1。最后在用Math类的floor()函数确定最终结果。
* 如下这个公式可以成功生成1~100的随机数字集合。

```JavaScript

function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  }
}
//数据输出
function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));//生成随机数组
  }
}

function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var restr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    restr += this.dataStore[i] + " ";
    if (i > 0 & i % 10 == 0) {
      restr += "\n";
    }
  }
  return restr;
}

function swap(arr,index1,index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

//测试
var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
```

<p align="center"><img src="http://oe51jhwvd.bkt.clouddn.com/1.png" /></p>

#### 名词解释：

* n: 数据规模
* k:“桶”的个数
* In-place: 占用常数内存，不占用额外内存
* Out-place: 占用额外内存
* 稳定性：排序后2个相等键值的顺序和排序之前它们的顺序相同

##### 用一个`for`遍历数组排序

```JavaScript
var a = [12,13,65,54,86,21,37,1,95,4];
var l = a.length;
console.log(a);
for (var i = 0; i < l; i++) {
  if (a[i] > a[i + 1]) {
    var temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
  }
  if (i == l-1) {
    i = -1;
    l--;
  }
}
console.log(a);
```

## 08-02
### JavaScript算法-冒泡排序

* 冒泡排序
* 最慢的排序算法之一
* 冒泡排序，之所以这么叫是因为使用这种排序算法排序时，数据值就会像气泡一样从数组的一端漂浮到另一端。假设正在将一组数字按照升序排列，较大的值会浮动到数组的右侧，而较小的值会浮动到数组的左侧。之所以会产生这种现象是因为算法会多次在数组中移动，比较相邻的数据，当左侧值大于右侧值时将它们进行互换。

<p align="center"><img src="http://oe51jhwvd.bkt.clouddn.com/2.gif" /></p>

```JavaScript
function bubbleSort() {
  var numElements = this.dataStore.length; //获取数组长度
  var temp;// 定义临时对象
  for (var outer = numElements; outer >= 2; --outer) {//对元素遍历，直到最后剩2个数字
    for (var inner = 0; inner <= outer - 1; ++inner ) {//从第零个开始，直到不满足
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {//如果,前一个大于后一个，
        swap(this.dataStore,inner,inner + 1);//进行交换
      }
    }
  }
}//通过比较把最大的放到最右面
```

* 使用bubbleSort()对10个数字排序

```JavaScript
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.bubbleSort();
console.log(mynums.toString);
```

## 08-03
### JavaScript算法-选择排序

* 选择排序
* 选择排序从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便完成了排序。
* 选择排序会用到嵌套循环。外循环从数组的第一个元素一定到倒数第二个元素；内循环从第二个数组元素移动到最后一个元素，查找比当前外循环

<p align="center"><img src="http://www.2cto.com/uploadfile/Collfiles/20160918/20160918092144584.gif" /></p>

```JavaScript
function selectionSort() {
  var min,temp;
  for (var outer = 0; outer <= this.dataStore.length-2; ++outer)//循环
    min = outer;//定义第一个为最小
    for (var inner = outer + 1; i < this.dataStore.length-1; ++inner) {//查找下一个中
      if (this.dataStore[inner]<this.dataStore[min]) {//如果数组内的第inner项小于最小项
        min = inner;//最小项设置为inner
      }
      swap(this.dataStore,outer,min);//交换最小值和outer
    }
  }  
}
//找到数组中剩余的最小值，如果更小outer进行交换
```

## 08-04
### JavaScript算法-插入排序

* 插入排序
* 插入排序有两个循环，外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组会向右移动，为内循环中的这个元素腾出位置。

<p align="center"><img src="http://www.2cto.com/uploadfile/Collfiles/20160918/20160918092144589.gif" /></p>

```JavaScript
function insertionSort() {
  var temp,inner;
  for (var outer = 1; outer <= this.dataStore.length - 1 ; ++outer) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner>0 && (this.dataStore[inner-1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      --inner;
    }
    this.dataStore[inner] = temp;
  }
}
```

## 08-05
### JavaScript算法-希尔排序

* 希尔排序
* 这个算法在插入排序的基础上作出了很大的改善。希尔排序的核心理念与插入排序不同，它会首先比较距离较远的元素，而非相邻的元素。和简单的比较相邻元素相比，使用这种方案可以使离正确位置很远的元素更快回到适合的位置。当开始用这个算法遍历数据集时，所有元素之间的距离会不断减小，直到处理到数据集的末尾，这时算法比较的就是相邻元素了。
* 主要是通过遍历数组中相隔相同位置的元素去比较大小进行排列

```JavaScript
function shellsort() {
  for (var g = 0; i < this.gaps.length; ++g) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      var temp = this.dataStore[i];
      for (var j = i; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j-this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }
  }
}
```

* CArray构造函数中添加

```JavaScript
this.gaps = [5,3,1];
//并添加一个函数
function setGap(arr) {
  this.gaps = arr ;
}
```

## 08-06
### JavaScript算法-归并排序

<p align="center"><img src="http://www.2cto.com/uploadfile/Collfiles/20160918/20160918092144591.gif" /></p>

* 归并排序
* 归并排序是建立在归并操作上的一种有效的排序算法。该算法是分治法的一个非常典型的应用。归并排是一种稳定的排序方法。将已有序列的子序列合并
* <1>.把长度为n的输入序列分成两个长度为n/2的子序列；
* <2>.对这两个子序列分别采用归并排序；
* <3>.将两个排序好的子序列合并成一个最终的排序序列。

```JavaScript
function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
    console.time('归并排序耗时');
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
    console.timeEnd('归并排序耗时');
    return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));
// 归并排序耗时: 0.009033203125ms
// 归并排序耗时: 0.0048828125ms
// 归并排序耗时: 0.004150390625ms
// 归并排序耗时: 0.002197265625ms
// 归并排序耗时: 0.0048828125ms
// 归并排序耗时: 0.0029296875ms
// 归并排序耗时: 0.0009765625ms
// 归并排序耗时: 0.000732421875ms
// 归并排序耗时: 0.003173828125ms
// 归并排序耗时: 0.003173828125ms
// 归并排序耗时: 0.001220703125ms
// 归并排序耗时: 0.002197265625ms
// 归并排序耗时: 0.0029296875ms
// 归并排序耗时: 0.002685546875ms
//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

## 08-07
### JavaScript算法-快速排序

* 快速排序是处理大数据集最快的排序算法之一。它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。该算法不断重复这个步骤直到所有数据都是有序的。
* 这个算法首先要在列表中选择一个元素作为基准值(pivot)。数据排序围绕基准值进行，将列表中小于基准值的元素移到数组的底部，将大于基准值的元素移到数组的顶部。

#### 快速排序的算法和伪代码
* 算法：
    * （1）选择一个基准元素，将列表分隔成两个子序列；
    * （2）对列表重新排序，将所有小于基准值的元素放在基准值的前面，所有大于基准值的元素放在基准值的后面
    * （3）分别对较小元素的子序列和较大元素的子序列重复步骤1和2。
* 代码如下

```JavaScript
function qSort(list) {
  if (list.length == 0) {
    return [];
  }
  var lesser = [];
  var greater = [];
  var pivot = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i]<pivot) {
      lesser.push(list[i]);
    }else {
      greater.push(list[i]);
    }
  }
  return qSort(lesser).concat(pivot,qSort(greater));
}
```

## 08-08
### JavaScript算法-高级算法-动态规划

## 09-01
### JS基本应用-函数

1. 函数声明与函数表达式、对象实例化的区别

```JavaScript
 add1(1,1);
 add2(1,2);
 add3(1,3);
 function add1(i, j){
   console.log(i+j);
 }
 var add2 = function(i, j){
   console.log(i+j);
 }
 var add3 = new Function("i", "j", "console.log(i+j);");
```
 
2. 对象实例化与函数声明与函数表达式的区别

```JavaScript
 (function(){
   var i = 10;
   function add(j) {
     console.log(i+j);
     debugger;
   }
   add(1);
 })();

 (function(){
   var i = 10;
   var add = new Function("j", "console.log(i+j);debugger;");
   add(1);
 })();
```
 
3. bind的使用

```JavaScript
 function Point(x, y){
     this.x = x;
     this.y = y;
 }
 Point.prototype.move = function(x, y) {
     this.x += x;
     this.y += y;
 }
 var p = new Point(0,0);
 var circle = {x:1, y:1, r:1};
 var circleMove = p.move.bind(circle, 2, 1);
 circleMove();
```

4. 构造函数

```JavaScript
 function Car(type,color){
   this.type = type;
   this.color = color;
   this.status = "stop";
   this.light = "off";
 }
 Car.prototype.start = function(){
   this.status = "driving";
   this.light = "on";
   console.log(this.type + " is " + this.status);
 }
 Car.prototype.stop = function(){
   this.status = "stop";
   this.light = "off";
   console.log(this.type + " is " + this.status);
 }
 var audi = new Car("audi", "silver");
 var benz = new Car("benz", "black");
 var ferrari = new Car("ferrari", "yellow");
```
 
5. 函数调用模式

```JavaScript
 function add(i, j){
   return i+j;
 }
 var myNumber = {
   value: 1,
   double: function(){
     var helper = function(){
       this.value = add(this.value,this.value);
     }
     helper();
   }
 }
```

6. arguments转数组

```JavaScript
 function add(i, j) {
   var args = Array.prototype.slice.apply(arguments);
   args.forEach(function(item){
     console.log(item);
   })
 }
 add(1,2,3);
```
 
7. arguments.callee使用

```JavaScript
 console.log(
   (function(i){
     if (i==0) {
       return 1;
     }
     return i * arguments.callee(i-1);
   })(5)
 );
```
 
8. 递归

```JavaScript
 function factorial(i){
   if (i==0) {
     return 1;
   }
   return i*factorial(i-1);
 }
```

9. 普通递归函数跟记忆函数调用次数对比

```JavaScript
 var factorial = (function(){
   var count = 0;
   var fac = function(i){
     count++;
     if (i==0) {
       console.log('调用次数：' + count); 
       return 1;
     }
     return i*factorial(i-1);
   }
   return fac;
 })();
 for(var i=0;i<=10;i++){
   console.log(factorial(i)); 
 }

//记忆函数
 var factorial = (function(){
   var memo = [1];
   var count = 0;
   var fac = function(i){
     count++;
     var result = memo[i];
     if(typeof result === 'number'){
       console.log('调用次数：' + count); 
       return result;
     } 
     result = i*fac(i-1);
     memo[i] = result;
     return result;
   }
   return fac;
 })();
 for(var i=0;i<=10;i++){
   console.log(factorial(i)); 
 }
```
 
10. curry 函数柯里化
  * 把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术

```JavaScript
 function add(value){
    var helper = function(next){
       value = typeof(value)==="undefined"?next:value+next;
       return helper;
    }
    helper.valueOf = function(){
      return value;
    }
    return helper
 }
```

11. 定时器

```JavaScript
function set_loop() {
  var i =1;
  setTimeout(function () {
    i = i + 1;
    console.log(i);
    set_loop()
  },5000);
}
```

##
### JS性能优化
*
---

## add-01
### JSDemo JS小插件
####


## add-02
### JDMenu 京东无延迟菜单
#### 1.开发普通二级菜单

* 事件代理方式进行绑定
* `mouseenter`和`mouseover`的区别：
* 使用`mouseover/mouseout`时候，如果鼠标移动到子元素上，即便没有离开父元素，也会触发父元素的`mouseout`事件；
* 使用`mouseenter/mouseleave`时，如果鼠标没有离开父元素，在其子元素上任意移动，也不会触发`mouseleave`事件；

#### 2.加入延迟优化
* 切换子菜单的时候，用`setTimeout`设置延迟
* `debounce`去抖o((⊙﹏⊙))o.技术：
* 在事件被频繁触发时买只执行一次

#### 3.基于用户行为预测的切换技术

* 跟踪鼠标的移动
* 用鼠标当前位置，和鼠标上一次位置与子菜单上下边缘形成的三角区域进行比较

## add-03
### DatePicker组件开发
#### 1.基础页面制作

* 标头
* 身体

#### 2.数据部分

* 渲染当月日历表格
* 用于点击时取日期值

##### 日期对象

* `newDate(year,month-1,date)`
* 月份需要-1
* 越界自动进退位
* `getFullYear()/getMonth()/getDate()`
* `getDay()`获取当前日期是周几？
