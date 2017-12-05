# 06 JavaScrpit-模块化

* [06-01](https://github.com/TYRMars/JSLearn/tree/master/06#06-01) `模块化`
* [06-02](https://github.com/TYRMars/JSLearn/tree/master/06#06-02) `模块化-AMD`
* [06-03](https://github.com/TYRMars/JSLearn/tree/master/06#06-03) `模块化-CommonJS`

## 06-01

### 06-02

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

### 

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

  \`\`\`JavaScript  
  var div1 = document.getElementById\('div1'\); //元素  
  var divList = document.getElementByTagName\('div'\); //集合  
  console.log\(divList.length\);  
  console.log\(divList\[0\]\);

var containerList = document.getElementByClassName\('.container'\); //集合  
var pList = document.querySelectorAll\('p'\); //集合

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

#### 举个栗子\(例子：example\)！！！

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



