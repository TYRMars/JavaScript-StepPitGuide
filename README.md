<h1 align="center">JavaScript学习</h1>
<p align="center"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498542774866&di=ed28b6b90c4be001acda441377113f2e&imgtype=0&src=http%3A%2F%2F7xkvof.com2.z0.glb.qiniucdn.com%2Farticle%2F79tvzE5PHyLClhki4Gbv.jpg" /></p>

## JavaScript基础知识剖析
#### 01
* [01-01](https://github.com/TYRMars/JSlearn#01-01) `变量类型和计算（1）`
* [01-02](https://github.com/TYRMars/JSlearn#01-02) `变量类型和计算（2）`
* [01-03](https://github.com/TYRMars/JSlearn#01-03) `变量类型和计算（3）-JSON的理解`
* [01-04](https://github.com/TYRMars/JSlearn#01-04) `原型与原型链-构造函数`
* [01-05](https://github.com/TYRMars/JSlearn#01-05) `原型规则和示例`
* [01-06](https://github.com/TYRMars/JSlearn#01-06) `原型链`
* [01-07](https://github.com/TYRMars/JSlearn#01-07) `instanceof`
* [01-08](https://github.com/TYRMars/JSlearn#01-08) `知识点小结 & 解决问题`
#### 02
* [02-01](https://github.com/TYRMars/JSlearn#02-01) `作用域和闭包-执行上下文`
* [02-02](https://github.com/TYRMars/JSlearn#02-02) `作用域和闭包-this`
* [02-03](https://github.com/TYRMars/JSlearn#02-03) `作用域和闭包-作用域`
* [02-04](https://github.com/TYRMars/JSlearn#02-04) `作用域和闭包-闭包`
* [02-05](https://github.com/TYRMars/JSlearn#02-05) `知识点小结 & 解决问题`
#### 03
* [03-01](https://github.com/TYRMars/JSlearn#03-01) `异步和单线程-什么是异步`
* [03-02](https://github.com/TYRMars/JSlearn#03-02) `异步和单线程-单线程`
* [03-03](https://github.com/TYRMars/JSlearn#03-03) `其他知识点-日期和Math`
* [03-04](https://github.com/TYRMars/JSlearn#03-04) `其他知识点-数组和对象的API`
#### 04
* [04-01](https://github.com/TYRMars/JSlearn#04-01) `从基础知识到JS-Web-API`
* [04-02](https://github.com/TYRMars/JSlearn#04-02) `DOM本质`
* [04-03](https://github.com/TYRMars/JSlearn#04-03) `DOM节点操作`
* [04-04](https://github.com/TYRMars/JSlearn#04-04) `DOM结构操作`
* [04-05](https://github.com/TYRMars/JSlearn#04-05) `DOM知识总结`
* [04-06](https://github.com/TYRMars/JSlearn#04-06) `BOM知识点`
#### 05
* [05-01](https://github.com/TYRMars/JSlearn#05-01) `事件-知识点`

---

## JS小练习
* JSDemo JS小程序
* JDMenu 京东无延迟菜单
* DatePicker组件开发
* 手风琴效果开发

## 知识点学习
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
var c = ''；
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
console.log(!!a);
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
* 尤其是`typeof null //object`它是一个引用类型
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

## 01-04
### 原型与原型链-构造函数
* 如何准确判断一个变量数组类型
* 写一个原型链继承的例子
* 描述new一个对象的过程
* zepto(或其他框架)源码中如何使用原型链
#### 知识点
* 构造函数
* 构造函数-扩展
* 原型规则和示例
* 原型链
* instanceof
#### 构造函数
* 自己的想法
* `普通的函数就像是按步骤执行的动作，而构造函数更像是可更改零件的木偶，普通函数可以直接调用，但是构造函数需要new`
* `因为构造函数也是函数，所以可以直接被调用，但是它的返回值为undefine，此时构造函数里面的this对象等于全局this对象`
* 扩展`实例和对象的区别，从定义上来讲：1、实例是类的具象化产品，2、而对象是一个具有多种属性的内容结构。`

```JavaScript
funciton Foo(name,age){
  this.name = name;
  this.age = age;
  this.class = 'class-1';
  // return this //默认有这一行
}
var f = new Foo('zhangsan',20); //实例化对象
// var f1 = new Foo('lisi',22) //创建多个对象
```

#### 构造函数-扩展
* `var a = {}` 其实是 `var a = new Object()`的语法糖
* `var a = []` 其实是 `var a = new Array()`的语法糖
* `function Foo(){...}`其实是 `var Foo = new Function(...)`
* 使用 `instanceof` 判断一个函数是否是一个变量的构造函数
  * 如果想判断一个变量是否为“数组”：变量 `instanceof Array`

## 01-05
### 原型规则和示例
* 5条原型规则
* 原型规则是学习原型链的基础
#### 第1条
* 所有的引用类型(数组、对象、函数)，都具有对象特质、即可自由扩展属性(除了“NULL”以外)
```JavaScript
var obj = {}; obj.a = 100;
var arr = []; arr.a = 100;
function fn(){
  fn.a=100;
}
```
#### 第2条
* 所有的引用类型(数组、对象、函数)，都有一个`__proto__`(隐式原型)属性，属性值是一个普通的对象
```JavaScript
console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);
```
#### 第3条
* `prototype`解释为JavaScript开发函式库及框架
* 所有的函数，都有一个`prototype`（显示原型）属性，属性值也是一个普通对象。
```JavaScript
console.log(fn.prototype);
```
#### 第4条
* 所有引用类型（数组、对象、函数），`__proto__`属性值指向它的构造函数的`prototype`属性值
```JavaScript
console.log(obj.__proto__ === Object.prototype);
```
#### 第5条
* 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的`__proto__`(即它的构造函数`prototype`)中寻找
```JavaScript
//构造函数
function Foo(name,age){
  this.name = name;
}
Foo.prototype.alertName = function () {
  alert(this.name);
}
//创建示例
var f = new Foo('zhangsan')
f.printName = function () {
  console.log(this.name);
}
//测试
f.printName();
f.alertName();
```
* this
#### 循环对象自身属性
```JavaScript
var item;
for (item in f) {
  //高级浏览器已经在for in 中屏蔽了来自原型的属性
  //但是这里建议大家还是加上这个判断，保证程序的健壮性
  if(f.hasOwnProperty(item)) {
    console.log(item);
  }
}
```
## 01-06
### 原型链
```JavaScript
//构造函数
function Foo(name,age){
  this.name = name;
}
Foo.prototype.alertName = function (){
  alert(this.name);
}
//创建示例
var f = new Foo('zhangsan');
f.printName = function () {
  console.log(this.name);
}
//测试
f.printName();
f.alertName();
f.toString(); // 要去f.__proto__.__proto__中查找
```
#### 原型链视图
![原型链图](http://www.kejiganhuo.tech/wp-content/uploads/2017/06/屏幕快照-2017-06-29-上午9.00.57.png)

## 01-07
### instanceof
* 用于判断`引用类型`属于哪个`构造函数`的方法
* `f instanceof Foo` 的判断逻辑是：
* `f`的`__proto__`一层一层往上走，是否能对应到`Foo.prototype`
* 再试着判断f instanceof Object

## 01-08
### 知识点小结 & 解决问题
#### 如何准确判断一个变量是数组类型
```JavaScript
var arr = [];
arr instanceof Array; //true
typeof arr //object  typeof是无法判断是否是数组
```
#### 写一个原型链继承的例子
```JavaScript
//动物
function Animal(){
  this.eat = function () {
    console.log('animal eat');
  }
}
//狗🐶
function Dog(){
  this.bark = function () {
    console.log('dog bark');
  }
}
Dog.prototype = new Animal();
//哈士奇
var hashiqi = new Dog();
//如果要真正写，就要写更贴近实战的原型链
```
  * 推荐 阮一峰老师👨‍🏫的两篇文章：[Javascript 面向对象编程（一）：封装](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)、[Javascript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)

#### 描述new一个对象的过程
* 创建一个新对象
* this指向这个新对象
* 执行代码，即对this赋值
* 返回this 🔙
```JavaScript
function Foo(name,age){
  this.name = name ;
  this.age = age ;
  //return this //默认有这一行
}
var f = new Foo('zhangsan',20);
//var f1 = new Foo('list',22) //创建多个对象
```

#### zepto(或其他框架)源码中如何使用原型链
* 。。。。。。

#### 贴近实际开发原型链继承的例子
```JavaScript
function Elem(id) {
  this.elem = document.getElementById(id);
}

Elem.prototype.html = function (val) {
  var elem = this.elem;
  if (val) {
    elem.innerHTML = val;
    return this; // 链式操作
  }else {
    return elem.innerHTML;
  }
}

Elem.prototype.on = function (type, fn) {
  var elem = this.elem ;
  elem.addEventListener(type, fn) ;
}

var div1 = new Elem('div1');
//console.log(div1.html());
div1.html('<p>hello imooc</p>')
div1.on('click',function () {
  alert('click')
})
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
* XML
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
  var p = document.createElement('p');
  p.innerHTML = '';
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
#### 对于一个无线下拉加载图片的页面，如何给每个图片绑定事件
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
---

### JSDemo JS小程序
####
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
