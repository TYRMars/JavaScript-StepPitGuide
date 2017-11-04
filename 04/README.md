# 04 JavaScrpit-WebAPI基础

* [04-01](https://github.com/TYRMars/JSLearn/tree/master/04#04-01) `从基础知识到JS-Web-API`
* [04-02](https://github.com/TYRMars/JSLearn/tree/master/04#04-02) `DOM本质`
* [04-03](https://github.com/TYRMars/JSLearn/tree/master/04#04-03) `DOM节点操作`
* [04-04](https://github.com/TYRMars/JSLearn/tree/master/04#04-04) `DOM结构操作`
* [04-05](https://github.com/TYRMars/JSLearn/tree/master/04#04-05) `DOM知识总结`
* [04-06](https://github.com/TYRMars/JSLearn/tree/master/04#04-06) `BOM知识点`

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
