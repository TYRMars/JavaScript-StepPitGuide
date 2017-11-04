# 05 JavaScrpit-WebAPI扩展

* [05-01](https://github.com/TYRMars/JSLearn/tree/master/05#05-01) `事件-知识点`
* [05-02](https://github.com/TYRMars/JSLearn/tree/master/05#05-02) `Ajax-XMLHttpRequest`
* [05-03](https://github.com/TYRMars/JSLearn/tree/master/05#05-03) `存储`


## 05-01
#### 编写一个通用的事件监听函数
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

* 关于IE低版本的兼容性
    * IE低版本使用attachEvent绑定事件，和W3C标准不一样
    * IE低版本使用量非常少，很多网站早已不支持
    * 建议对IE低版本的兼容性：了解即可，无需深究
    * 如果遇到对IE低版本要求苛刻的面试，果断放弃

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

## 05-02
### Ajax-XMLHttpRequest

* 手动编写一个ajax，不依赖第三方库
* 跨域的几种实现方式

#### 知识点
##### XMLHttpRequest

```JavaScript
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

##### 状态码
```JavaScript
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
    * 0-(未初始化)还没有调用send()方法
    * 1-(载入)已调用send()方法，正在发送请求
    * 2-(载入完成)send()方法执行完成，已经接收到全部响应内容
    * 3-(交互)正在解析响应内容
    * 4-(完成)响应内容解析完成，可以在客户端调用
* status
    * 2XX-表示成功处理请求。如200
    * 3XX-需要重定向，浏览器直接跳转
    * 4XX-客户端请求错误，如404
    * 5XX-服务端错误

##### 跨域
* 什么时跨域
    * 浏览器有同源策略，不允许ajax访问其他域接口
    * http://www.yourname.com/page1.html
    * http://m.imooc.com/course/ajaxcourserecom?cid=459
    * 跨域条件：协议、域名、端口、有一个不同就算跨域
        * 但是有三个标签允许跨域加载资源
        * `<img src=XXX>`
        * `<link href=XXXX>`
        * `<script src=XXX>`
    * 三个标签的场景
        * <img>用于打点统计，统计网站可能是其他域
        * <link><script>可以使用CDN，CDN的也是其他域
        * <script>可以用于JSONP
    * 跨域注意事项
        * 所有的跨域请求都必须经过信息提供方允许
        * 如果未经允许即可获得，那是浏览器同源策略出现漏洞

* JSONP
    * 加载 http://coding.m.imooc.com/classindex.html
    * 不一定服务器端真正有一个`classindex.html`文件
    * 服务器可以根据请求，动态生成一个文件，返回
    * 同理与<script src="http://coding.kejiganhuo.com/api.js">

    * 假如你的网站要跨域访问网站的一个接口
    * 给你一个地址http://coding.kejiganhuo.com/api.js
    * 返回内容格式如callback({x:100,y:200})(可动态生成)

```html
<script>
window.callback = function (data) {
  //这是我们跨域的到信息
  console.log(data);
}
</script>
<script src="http://coding.kejiganhuo.com/api.js"></script>
<!-- 以上将返回 callback({x:100,y:200}) -->
```

* 服务器端设置http header
    * 另外一个解决跨域的简洁方法，需要服务器来做
    * 但是作为交互方，我们必须知道这个方法
    * 是将来解决跨域问题的一个趋势

```JavaScript
//注意：不同后端语言的写法可能不一样

//第二个参数填写允许跨域的域名称，不建议直接写 “*”
response.setHeader("Access-Control-Allow-Origin","http://a.com, http://b.com");
response.setHeader("Access-Control-Allow-Header","X-Requested-With");
response.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

//接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials","true");
```

## 05-03
### 存储

* 请描述一下`cookie`,`sessionStorage`和`localStorage`的区别？

#### cookie

* 本身用于客户端和服务端通信
* 但是它有本地存储的功能，于是就被`借用`
* 使用document.cookie = ... 获取和修改即可

##### cookie用于存储的缺点

* 存储量小，只有4kb
* 所有http请求都带着，会影响获取资源的效率
* API简单，需要封装才能用document.cookie = ...

#### localStorage和sessionStorage

* HTML5专门为存储设计，最大容量5M
* API简答易用：
* localStorage.setItem(key,value);localStorage.getItem(key);
* sessionStorage关闭浏览器会清理
* iOS safari 隐藏模式下，localStorage.getItem会报错
* 建议统一使用try-catch封装

#### cookie sessionStorage localStorage 的区别

* 容量
* 是否会携带到ajax中
* API易用性
