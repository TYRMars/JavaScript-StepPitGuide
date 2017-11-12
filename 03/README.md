# 03
## 面向对象程序设计

<p align="center"><img src="http://img.tvmao.com/stills/movie/190/310/b/L7KsW7OtLR=.jpg" /></p>



## 目录

* [03-01](https://github.com/TYRMars/JSLearn/tree/master/03#03-01)`理解对象`
* [03-02](https://github.com/TYRMars/JSLearn/tree/master/03#03-02)`创建对象`
* [03-03](https://github.com/TYRMars/JSLearn/tree/master/03#03-03)`原型链`
* [03-04](https://github.com/TYRMars/JSLearn/tree/master/03#03-04)`继承`

# 03-01
## 理解对象

<p align="center">ECMAScript对于对象的定义：无序属性的集合，其属性可以包含基本值、对象或者函数</p>

* JavaScript每个对象都是基于一个引用类型创建的。
* 引用类型可以是原生类型也可以是自己定义的类型

# 03-02
## 创建对象

* 字面量方式创建

```JavaScript
var o1 = {name:'o1'};
var o11 = new Object({name:'o11'});
```

* 构造函数创建

```JavaScript
var M = function () {this.name='o2'};
var o2 = new M();
```

* Object.create()

```JavaScript
var p = {name:'o3'};
var o3 = Object.Create(P);
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
function Foo(name,age){
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
  - 如果想判断一个变量是否为“数组”：变量 `instanceof Array`

## 01-05
### 原型规则和示例

* 5条原型规则
* 原型规则是学习原型链的基础

---

#### 第1条
* 所有的引用类型(数组、对象、函数)，都具有对象特质、即可自由扩展属性(除了“NULL”以外)

```JavaScript
var obj = {}; obj.a = 100;
var arr = []; arr.a = 100;
function fn(){
  fn.a=100;
}
```

---

#### 第2条
* 所有的引用类型(数组、对象、函数)，都有一个`__proto__`(隐式原型)属性，属性值是一个普通的对象

```JavaScript
console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);
```

---

#### 第3条
* `prototype`解释为JavaScript开发函式库及框架
* 所有的函数，都有一个`prototype`（显示原型）属性，属性值也是一个普通对象。

```JavaScript
console.log(fn.prototype);
```

---

#### 第4条
* 所有引用类型（数组、对象、函数），`__proto__`属性值指向它的构造函数的`prototype`属性值

```JavaScript
console.log(obj.__proto__ === Object.prototype);
```

---

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

---

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

# 继承
