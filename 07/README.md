# 事件

### DOM事件介绍

* 点击一个DOM元素
* 键盘按一下一个键
* 输入框输入内容
* 页面加载完成

### 事件流

* 三个过程:
  - 从window对象向下到触发元素的父级元素是捕获过程;
  - 然后触发相应事件
  - 从当前触发事件的节点的父节点开始向上冒泡，冒泡到顶层的window对象

![Graphical representation of an event dispatched in a DOM tree using the DOM event flow](https://www.w3.org/TR/uievents/images/eventflow.svg)

1. capture phase 捕获过程
2. target phase 触发过程
3. bubble phase 冒泡过程

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

# 05-02
## 事件注册与触发

* 事件注册
* 取消事件注册
* 事件触发

#### eventTarget

## 事件注册

`eventTarget.addEventListener(type,listener,[useCapture])`

```JavaScript
var elem = document.getElementById('div1');
var clickHandler = function(event){
  // TO DO
}
elem.addEventListener('click',clickHandler,false);
```

## 取消事件注册

`eventTarget.removeEventListener(type,listener,[useCapture])`

```JavaScript
elem.removeEventListener('click',clickHandler,false);
elem.onclick=null;
```

## 事件触发

`eventTarget.dispatchEvent(type)`

### 浏览器兼容

* 关于IE低版本的兼容性
  - IE低版本使用attachEvent绑定事件，和W3C标准不一样

* 事件注册与取消
  - attachEvent/detachEvent
* 事件触发
  - fireEvent(e)
* no capture

---

#### 事件兼容处理(W3C和IE低版本)

```JavaScript
var addEvent = document.addEventListener ?
    function functionName(elem,type,listener,useCapture) {
      elem.addEventListener(type,listener,useCapture);
    }:
    function functionName(elem,type,listener,useCapture) {
      elem.attachEvent('on' + type, listener);
    };
var delEvent = document.removeEventListener ?
    function functionName(elem,type,listener,useCapture) {
      elem.removeEventListener(type,listener,useCapture);
    }:
    function functionName() {
      elem.detachEvent('on' + type, listener);
    };
```

---

# 05-03
## 事件对象

```JavaScript
var elem = document.getElementById('div1');
var clickHandler = function(event){
  // TO DO
}
elem.addEventListener('click',clickHandler,false);
```

# `event对象包含很多信息`

```JavaScript
var elem = document.getElementById('div1');
var clickHandler = function event() {
  event = event || window.event;
}
addEvent(elem,'click',clickHandler,false);
```

# 事件对象

* 属性
  - type
  - target(`srcElement`IE)`事件触发节点`
  - currentTarget`父节点事件` | `事件代理`
* 方法
  - stopPropagation `阻止冒泡`
  - preventDefault `阻止默认事件`
  - stopImmediatePropagation `阻止冒泡`

## 阻止事件传播

* `event.stopPropagation()` (W3C)
  - 阻止事件传播到父节点
  - `event.cancelBubble=true` (IE)
  - `stopImmediatePropagation (W3C)` 并且阻止当前节点的后续事件

## 阻止默认行为

* `event.preventDefault() (W3C)`
  - 阻止默认行为
  - `Event.returnValue = false`(IE)

# 05-04
## 事件分类

* Event : load|unload|error|select|abort
* UIEvent : resize|scroll
* FoucusEvent : blur|focus|focusin|focusout
* InputEvent : beforeinput|input
* KeyboardEvent : keydown|keyup
* MouseEvent : click|dbclick|mousedown|mouseenter|mouseleave|mousemove|mouseout|mouseover|mouseup
* WheelEvent : wheel

![](event)

### Event

| 事件类型 | 是否冒泡 | 元素 | 默认事件 | 元素例子 |
| :------------- | :------------- | :------------- | :------------- | :------------- |
| load   | NO | Window,Document,Element  | None  | window,image,iframe  |
| unload   | NO | Window,Document,Element | None  | window  |
| error   | NO  | Window,Document | None  | window,image  |
| select   | NO | Element |  None |  input,textarea |
| abort   | NO | Window,Element  | None  | window,image  |

### 编写一个通用的事件监听函数
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
