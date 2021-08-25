# JavaScrpit-BOM

## 从基础知识到JS-Web-API

* 变量类型和计算
* 原型和原型链
* 闭包和作用域
* 异步和单线程
* 其他（如日期、Math、各种常用API）

### 特点

* 特点：表面上来看不能用于工作中开发代码
* 内置函数：`Object Array Boolean String ......`
* 内置对象：`Math JSON ...`
* 我们连在网页弹出一句`Hello World`都不能实现

### JS-Web-API

* JS基础知识：ECMA 262标准
* JS-Web-API：W3C标准
* W3C标准中关于JS的规定有：
  * DOM操作
  * BOM操作
  * 事件绑定
  * ajax请求\(包含http协议\)
  * 存储

### 基本操作

* 页面弹框是`windows.alert(123)`，浏览器需要做：
  * 定义一个`windows`全局变量，对象类型；
  * 给它定义一个`alert`属性，属性值是一个函数；
* 获取元素document.getElementById\(id\),浏览器需要：
  * 定义一个document全局变量，对象属性；
  * 给它定义一个getElementById的属性，属性值是一个函数；
* W3C标准没有规定任何JS基础相关的东西；
* 不管什么变量类型、原型、作用域和异步
* 只管定义用于浏览器中JS操作页面的API和全局变量
* 全面考虑，JS内置的全局函数和对象有哪些？
* 之前ECMA的
* 比如 window document
* 所有未定义的全局变量，如`navigator.userAgent`

### 总结

* 常说的JS\(浏览器执行的JS\)包含两个部分：
* JS基础知识\(ECMA262标准\)；
* JS-Web-API\(W3C标准\)；

## BOM操作

* Browser Object Model

  **如何监测浏览器的类型**

  **拆解url的各部分**

  **知识点**

* `navigator & screen`

```javascript
//navigator
var ua = navigator.userAgent;
var isChrome = ua.indexOf('Chrome');
console.log(isChrome);
//screen
console.log(screen.width);
console.log(screen.height);
```

* `location & history`

```javascript
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

