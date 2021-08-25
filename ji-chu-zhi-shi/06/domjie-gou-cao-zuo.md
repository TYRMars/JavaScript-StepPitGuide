# DOM结构操作

* 新增节点

```javascript
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

```javascript
var div1 = document.getElementById('div1');
var parent = div1.parentElement;
```

* 删除节点

```javascript
var div1 = document.getElementById('div1');
var child = div1.childNodes;
div1.removeChild(child[0]);
```

## 举个栗子\(例子：example\)！！！

```markup
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

