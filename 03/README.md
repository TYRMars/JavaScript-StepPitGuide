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
