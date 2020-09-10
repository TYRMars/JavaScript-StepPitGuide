# 事件对象

## 事件对象

```javascript
var elem = document.getElementById('div1');
var clickHandler = function(event){
  // TO DO
}
elem.addEventListener('click',clickHandler,false);
```

## `event对象包含很多信息`

```javascript
var elem = document.getElementById('div1');
var clickHandler = function event() {
  event = event || window.event;
}
addEvent(elem,'click',clickHandler,false);
```

## 事件对象

* 属性
  * type
  * target\(`srcElement`IE\)`事件触发节点`
  * currentTarget`父节点事件` \| `事件代理`
* 方法
  * stopPropagation `阻止冒泡`
  * preventDefault `阻止默认事件`
  * stopImmediatePropagation `阻止冒泡`

### 阻止事件传播

* `event.stopPropagation()` \(W3C\)
  * 阻止事件传播到父节点
  * `event.cancelBubble=true` \(IE\)
  * `stopImmediatePropagation (W3C)` 并且阻止当前节点的后续事件

### 阻止默认行为

* `event.preventDefault() (W3C)`
  * 阻止默认行为
  * `Event.returnValue = false`\(IE\)

