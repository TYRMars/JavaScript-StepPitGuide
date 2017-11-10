# 03 JavaScrpit-异步与单线程

* [03-01](https://github.com/TYRMars/JSLearn/tree/master/03#03-01) `异步和单线程-什么是异步`
* [03-02](https://github.com/TYRMars/JSLearn/tree/master/03#03-02) `异步和单线程-单线程`
* [03-03](https://github.com/TYRMars/JSLearn/tree/master/03#03-03) `其他知识点-日期和Math`
* [03-04](https://github.com/TYRMars/JSLearn/tree/master/03#03-04) `其他知识点-数组和对象的API`

## 03-01
### 异步和单线程-什么是异步

* 同步和异步的区别是什么？分别举一个同步和异步的例子
* 一个关于setTimeout的笔试题
* 前端使用异步的场景有哪些

#### 异步知识点

* 什么是异步（对比同步）
* 前端使用异步的场景
* 异步与单线程

#### 什么是异步

```JavaScript
console.log(100); // step1
setTimeout(function () {
  console.log(200); // step3
},1000);
console.log(300); // step2
```

#### 对比同步

```JavaScript
console.log(100);
alert(200) // 1秒钟后点击确认
console.log(300);
```

#### 何时需要异步

* 在可能发生等待的情况
* 等待过程中不能像alert一样阻塞程序运行
* 因此，所有的`所有的等待情况`都需要异步

#### 前端使用异步的场景

* 定时任务：`setTimeout,setInverval`
* 网络请求：`ajax请求`,`动态<img>加载`

```JavaScript
//ajax请求
console.log('start');
$.get('./data1.json',function (data1) {
  console.log(data1);
})
console.log('end');
//<img>加载示例
console.log('start');
var img = document.createElement('img');
img.onload = function () {
  console.log('loaded');
}
img.src = '/xxx.png';
console.log('end');
```

* 事件绑定

## 03-02
### 异步和单线程-单线程

```JavaScript
console.log(100); // step1
setTimeout(function () {
  console.log(200); // step3
});
console.log(300); // step2
```

* 从上面代码中理解单线程
    * 执行第一行，打印100
    * 执行setTimeout后，传入setTimeout的函数会被暂存起来，不会立即执行（单线程的特点，不能同时干两件事）
    * 执行最后一行打印300
    * 待所有程序执行完，处于空闲状态时，会立马看有没有暂存起来的要执行
    * 发现暂存起来的`setTimeout`中的函数无需等待时间，就立即来过来执行


#### 解答：异步与单线程

* 同步和异步的区别是什么？分别举一个同步和异步的例子
    * 同步会阻塞代码执行，而异步不会
    * `alert`是同步，`setTimeout`是异步
* 一个关于setTimeout的笔试题
* 可以说`setTimeout`是等待页面加载完毕后，在进行加载


```JavaScript
console.log(1);
setTimeout(function () {
  console.log(2);
},0)
console.log(3);
setTimeout(function () {
  console.log(4);
},1000)
console.log(5);
```
* 前端使用异步的场景有哪些
    * 定时任务:`setTimeout,setInverval`
    * 网络任务:`ajax`请求，动态`<img>`加载
    * 事件绑定

## 03-03
### 其他知识点-日期和Math
#### 获取 2017-06-10 格式的日期

```JavaScript
Date.now(); // 获取当前时间毫秒数
var dt = new Date();
dt.getTime() // 获取毫秒数
dt.getFullYear() // 年
dt.getMonth() // 月（0-11）
dt.getDate() // 日（0-31）
dt.getHours() // 小时（0-23）
dt.getMinutes() // 分钟（0-59）
dt.getSeconds() // 秒 （0-59）
```

#### 获取随机数，要求时长度一致的字符串格式
* `Math` 获取随机数 `Math.random()`

## 03-04
### 其他知识点-数组和对象的API
#### 写一个能遍历对象和数组的通用forEach函数
##### 数组API
* `forEach` 便利所有元素

```JavaScript
var arr = [1,2,3];
arr.forEach(function (item,index) {
  //遍历数组所有元素
  console.log(index,item);
})
```

* `every` 判断所有元素是否都符合条件

```JavaScript
var arr = [1,2,3];
var result = arr.every(function (item,index) {
  if (item<4) {
    //用于判断所有的数组元素，都满足一个条件
    return true;
  }
})
console.log(result);
```

* `some` 判断是否有至少一个元素符合条件

```JavaScript
var arr = [1,2,3];
var result = arr.some(function (item,index) {
  // 用来判断所有的数组元素，只要有一个满足条件即可
  if (item<2) {
    return true;
  }
})
console.log(result);
```

* `sort` 排序

```JavaScript
var arr = [1,4,2,3,5]
var arr2 = arr.sort(function (a,b) {
  //从小到大排序
  return a - b;
  //从大到小排序
  //return b - a
})
console.log(arr2);
```

* `map` 对元素重新组装，生成新数组

```JavaScript
var arr = [1,2,3,4]
var arr2 = arr.map(function functionName(item,index) {
  //将元素重新组装，并返回
  return '<b>' + item + '</b>';
})
console.log(arr2);
```

* `filter` 过滤符合条件的元素

```JavaScript
var arr = [1,2,3];
var arr2 = arr.filter(function (item,index) {
  //通过某一个条件过滤数组
  if(item >= 2){
    return true;
  }
})
console.log(arr2);
```

##### 对象API

```JavaScript
var obj = {
  x: 100,
  y: 200,
  z: 300
}
var key
for (key in obj) {
  // 注意这里的hasOwnProperty，请查看原型链
  if (obj.hasOwnProperty(key)) {
    console.log(key,obj[key]);
  }
}
```

* 举个例子

```html
<!DOCTYPE html>
<html>
	<head>
    <meta charset="utf-8" />
		<title>Register</title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  </head>
<body>
  <script type="text/javascript">
    console.log(Date.now());
    var dt = new Date();
    console.log(dt);
    console.log(dt.getTime());
    console.log(dt.getFullYear());
    console.log(dt.getDate());

    var arr = [1,2,3,4]

    arr.forEach(function (item,index) {
      console.log(index,item);
    })
  </script>
</body>
</html>
```

#### 问题解答
* 获取2017-06-10格式的日期

```JavaScript
function formatDate(dt) {
  if (!dt) {
    dt = new Date();
  }
  var year = dt.getFullYear();
  var month = dt.getMonth() + 1;
  var date = dt.getDate();
  if (month < 10) {
    //强制转换类型
    month = '0' + month;
  }
  if (date < 10) {
    //强制转换类型
    date = '0' + date;
  }
  //强制转换类型
  return year + '-' + month + '-' + date;
}
var dt = new Date();
var formatDate = formatDate(dt);
console.log(formatDate);
```

* 获取随机数，要求是长度一致的字符串格式

```JavaScript
var random = Math.random();
var random = random + '0000000000'; //后面加上10个0
var random = random.slice(0,10);
console.log(random);
```

* 写一个能遍历对象和数组的通用forEach函数

```JavaScript
//do
var arr = [1,2,3];
//注意，这里的参数的顺序换了，为了和对象的遍历格式一致
forEach(arr,function (index,item) {
  console.log(index.item);
})

var obj = {x:100,y:200};
forEach(obj,function (key,value) {
  console.log(key,value);
})

//init
function forEach(obj,fn) {
  var key;
  if (obj instanceof Array) {
    //准确判断是不是一个数组
    obj.forEach(function (index.item) {
      fn(index,item);
    })
  }else {
    //不是数组就是对象
    for (key in obj){
      fn(key,obj[key]);
    }
  }
}
```
