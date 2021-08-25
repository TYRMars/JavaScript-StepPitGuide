# Ajax

* 手动编写一个ajax，不依赖第三方库
* 跨域的几种实现方式

## 知识点

### XMLHttpRequest

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET","/api",false)
xhr.onreadystatechange = function () {
  //这里的函数异步执行，可参考之前JS基础的异步模块
  if(xhr.readyState == 4){
    if (xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}
xhr.send(null);
```

* IE低版本使用ActiveXObject，和W3C标准不一样
* IE低版本使用量已经非常少，很多网站早已不支持IE低版本
* 建议对IE低版本的兼容性：了解即可，无需深究

### 状态码

```javascript
xhr.onreadystatechange = function () {
  //这里的函数异步执行，可参考之前JS基础的异步模块
  if(xhr.readyState == 4){
    if (xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}
```

* readyState
  * 0-\(未初始化\)还没有调用send\(\)方法
  * 1-\(载入\)已调用send\(\)方法，正在发送请求
  * 2-\(载入完成\)send\(\)方法执行完成，已经接收到全部响应内容
  * 3-\(交互\)正在解析响应内容
  * 4-\(完成\)响应内容解析完成，可以在客户端调用
* status
  * 2XX-表示成功处理请求。如200
  * 3XX-需要重定向，浏览器直接跳转
  * 4XX-客户端请求错误，如404
  * 5XX-服务端错误

