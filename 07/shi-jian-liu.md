### 事件流

* 三个过程:
  * 从window对象向下到触发元素的父级元素是捕获过程;
  * 然后触发相应事件
  * 从当前触发事件的节点的父节点开始向上冒泡，冒泡到顶层的window对象

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



