# 事件注册与触发

## 事件注册与触发

* 事件注册
* 取消事件注册
* 事件触发

#### eventTarget

## 事件注册

`eventTarget.addEventListener(type,listener,[useCapture])`

```javascript
var elem = document.getElementById('div1');
var clickHandler = function(event){
  // TO DO
}
elem.addEventListener('click',clickHandler,false);
```

## 取消事件注册

`eventTarget.removeEventListener(type,listener,[useCapture])`

```javascript
elem.removeEventListener('click',clickHandler,false);
elem.onclick=null;
```

## 事件触发

`eventTarget.dispatchEvent(type)`

### 浏览器兼容

* 关于IE低版本的兼容性
  * IE低版本使用attachEvent绑定事件，和W3C标准不一样
* 事件注册与取消
  * attachEvent/detachEvent
* 事件触发
  * fireEvent\(e\)
* no capture

#### 事件兼容处理\(W3C和IE低版本\)

```javascript
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

