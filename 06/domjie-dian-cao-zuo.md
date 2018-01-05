### DOM节点操作

* 获取DOM节点
* prototype,获取JS对象上的属性
* Attribute,获取DOM标签上的属性

### 获取DOM节点

```js
var div1 = document.getElementById('div1'); //元素
var divList = document.getElementByTagName('div'); //集合
console.log(divList.length);
console.log(divList[0]);
var containerList = document.getElementByClassName('.container'); //集合
var pList = document.querySelectorAll('p'); //集合
```

#### property

```js
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

```js
var pList = document.querySelectorAll('p');
var p = pList[0];
p.getAttribute('data-name');
p.getAttribute('data-name','imooc');
p.getAttribute('style');
p.setAttribute('style','font-size:30px;');
```



