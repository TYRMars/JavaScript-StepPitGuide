<h1 align="center">JavaScript学习</h1>
<p align="center"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498542774866&di=ed28b6b90c4be001acda441377113f2e&imgtype=0&src=http%3A%2F%2F7xkvof.com2.z0.glb.qiniucdn.com%2Farticle%2F79tvzE5PHyLClhki4Gbv.jpg" /></p>

## JavaScript基础知识剖析
* [01-01](https://github.com/TYRMars/JSlearn#01-01) `变量类型和计算（1）`
* [01-02](https://github.com/TYRMars/JSlearn#01-02) `变量类型和计算（2）`
* [01-03](https://github.com/TYRMars/JSlearn#01-03) `变量类型和计算（3）-JSON的理解`
* [01-04](https://github.com/TYRMars/JSlearn#01-04) `原型与原型链-构造函数`
* [01-05](https://github.com/TYRMars/JSlearn#01-05) `原型规则和示例`
* [01-06](https://github.com/TYRMars/JSlearn#01-06) `原型链`
## JS小练习
* JSDemo JS小程序
* JDMenu 京东无延迟菜单
* DatePicker组件开发
* 手风琴效果开发
## 知识点学习
## 01-01
### 变量类型和计算（1）
* JS中使用typeof能得到的哪些类型
* 何时使用`===`何时使用 `==`
* JS中有哪些内置函数
* JS变量按照`存储方式`区分为哪些类型，并描述其特点
* 如何理解`JSON`
#### 值类型
* 从内存来说值类型是把每一个值存储在变量类型的每一个位置
```JavaScript
var a = 100;
var b = a;
a = 200
console.log(b);//100
```
#### 引用类型
* 把a赋值*-成一个对象，a的位置是通过指针指向一个位置
* 把b赋值成a，其实是定义一个b，b的指针指向了那个对象位置
* 也就是有两份 `age：20`的对象
* 对象的引用，就相当于复写一个对象，这两个对象之间相互独立
* 引用类型：对象、数组、函数
```JavaScript
var a ={age:20};
var b = a;
b.age = 21;
console.log(a.age); //21
```
* typeof运算符
```JavaScript
typeof undefined //undefined
typeof 'abc' // String
typeof 123 //number
typeof true //boolean
typeof {} //object
typeof [] //object
typeof null //object
typeof console.log //funciton
```
#### 变量计算-强制类型转换
* 字符串拼接
```JavaScript
var a = 100 + 10;//110
var b = 100 + '10';//10010
```
* == 运算符
```JavaScript
100 == '100' //true
0 == '' //true
null == undefined //true
```
* if语句
```JavaScript
var a = true;
if(a){
  //....
}
var b = 100;
if (b) {
  //....
}
var c = ''；
if (c) {
  //...
}
```
* 逻辑运算
```JavaScript
console.log(10 && 0); //0
console.log('' || 'abc'); //abc
console.log(!window.acb); //true

//判断一个变量会被当做true还是false
var a = 100;
console.log(!!a);
```
## 01-02
### 变量类型和计算（2）
#### JS中使用typeof能得到的类型
```JavaScript
//问题：JS中使用typeof能得到哪些类型
typeof undefined //undefined
typeof 'abc' // String
typeof 123 //number
typeof true //boolean
typeof {} //object
typeof [] //object
typeof null //object
typeof console.log //funciton
```
* 总结来说typeof可以得到`undefined、String、number、boolean`可以区分值类型，但对于引用类型无法很细的区分，只能区分函数。
* 尤其是`typeof null //object`它是一个引用类型
#### 何时使用 === 和 ==
```JavaScript
//问题：何时使用===何时使用==

if (obj.a == null) {
  //这里相当于 obj.a === null || obj.a === undefined,简写形式
  //这是jquery源码中推荐的写法
}
```
#### JS中的内置函数
```JavaScript
//问题：JS中有哪些内置函数----数据封装类对象
//作为构造函数的作用
Object
Array
Boolean
Number
String
Function
Date
RegExp
Error
```
#### JS按照存储方式区分变量类型
```JavaScript
//JS 变量按照存储方式区分为哪些类型，并描述其特点

//值类型
var a = 10;
var b = a;
a = 11;
console.log(b);  // 10

//引用类型
var obj1 = {x:100}
var obj2 = obj1;
obj1.x = 200;
console.log(obj2.x); // 200
```
* ES中，引用类型是一种数据结构，用于将数据和功能组织在一起
## 01-03
### 变量类型和计算（3）-理解JSON
```JavaScript
//问题：如何理解JSON
//JSON只不过是一个JS对象
//JSON也是一个数据格式
JSON.stringify({a:10,b:20});
JSON.parse('{"a":10."b":20}')
```

## 01-04
### 原型与原型链-构造函数
* 如何准确判断一个变量数组类型
* 写一个原型链继承的例子
* 描述new一个对象的过程
* zepto(或其他框架)源码中如何使用原型链
#### 知识点
* 构造函数
* 构造函数-扩展
* 原型规则和示例
* 原型链
* instanceof
#### 构造函数
* 自己的想法
* `普通的函数就像是按步骤执行的动作，而构造函数更像是可更改零件的木偶，普通函数可以直接调用，但是构造函数需要new`
* `因为构造函数也是函数，所以可以直接被调用，但是它的返回值为undefine，此时构造函数里面的this对象等于全局this对象`
* 扩展`实例和对象的区别，从定义上来讲：1、实例是类的具象化产品，2、而对象是一个具有多种属性的内容结构。`

```JavaScript
funciton Foo(name,age){
  this.name = name;
  this.age = age;
  this.class = 'class-1';
  // return this //默认有这一行
}
var f = new Foo('zhangsan',20); //实例化对象
// var f1 = new Foo('lisi',22) //创建多个对象
```

#### 构造函数-扩展
* `var a = {}` 其实是 `var a = new Object()`的语法糖
* `var a = []` 其实是 `var a = new Array()`的语法糖
* `function Foo(){...}`其实是 `var Foo = new Function(...)`
* 使用 `instanceof` 判断一个函数是否是一个变量的构造函数
  * 如果想判断一个变量是否为“数组”：变量 `instanceof Array`

## 01-05
### 原型规则和示例
* 5条原型规则
* 原型规则是学习原型链的基础
#### 第1条
* 所有的引用类型(数组、对象、函数)，都具有对象特质、即可自由扩展属性(除了“NULL”以外)
```JavaScript
var obj = {}; obj.a = 100;
var arr = []; arr.a = 100;
function fn(){
  fn.a=100;
}
```
#### 第2条
* 所有的引用类型(数组、对象、函数)，都有一个`__proto__`(隐式原型)属性，属性值是一个普通的对象
```JavaScript
console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);
```
#### 第3条
* `prototype`解释为JavaScript开发函式库及框架
* 所有的函数，都有一个`prototype`（显示原型）属性，属性值也是一个普通对象。
```JavaScript
console.log(fn.prototype);
```
#### 第4条
* 所有引用类型（数组、对象、函数），`__proto__`属性值指向它的构造函数的`prototype`属性值
```JavaScript
console.log(obj.__proto__ === Object.prototype);
```
#### 第5条
* 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的`__proto__`(即它的构造函数`prototype`)中寻找
```JavaScript
//构造函数
function Foo(name,age){
  this.name = name;
}
Foo.prototype.alertName = function () {
  alert(this.name);
}
//创建示例
var f = new Foo('zhangsan')
f.printName = function () {
  console.log(this.name);
}
//测试
f.printName();
f.alertName();
```
* this
#### 循环对象自身属性
```JavaScript
var item;
for (item in f) {
  //高级浏览器已经在for in 中屏蔽了来自原型的属性
  //但是这里建议大家还是加上这个判断，保证程序的健壮性
  if(f.hasOwnProperty(item)) {
    console.log(item);
  }
}
```
## 01-06
### 原型链
```JavaScript
//构造函数
function Foo(name,age){
  this.name = name;
}
Foo.prototype.alertName = function (){
  alert(this.name);
}
//创建示例
var f = new Foo('zhangsan');
f.printName = function () {
  console.log(this.name);
}
//测试
f.printName();
f.alertName();
f.toString(); // 要去f.__proto__.__proto__中查找
```
#### 原型链视图
![原型链图](http://www.kejiganhuo.tech/wp-content/uploads/2017/06/屏幕快照-2017-06-29-上午9.00.57.png)


---

### JSDemo JS小程序
####
### JDMenu 京东无延迟菜单
#### 1.开发普通二级菜单
* 事件代理方式进行绑定
* `mouseenter`和`mouseover`的区别：
* 使用`mouseover/mouseout`时候，如果鼠标移动到子元素上，即便没有离开父元素，也会触发父元素的`mouseout`事件；
* 使用`mouseenter/mouseleave`时，如果鼠标没有离开父元素，在其子元素上任意移动，也不会触发`mouseleave`事件；
#### 2.加入延迟优化
* 切换子菜单的时候，用`setTimeout`设置延迟
* `debounce`去抖o((⊙﹏⊙))o.技术：
* 在事件被频繁触发时买只执行一次
#### 3.基于用户行为预测的切换技术
* 跟踪鼠标的移动
* 用鼠标当前位置，和鼠标上一次位置与子菜单上下边缘形成的三角区域进行比较
### DatePicker组件开发
#### 1.基础页面制作
* 标头
* 身体
#### 2.数据部分
* 渲染当月日历表格
* 用于点击时取日期值
##### 日期对象
* `newDate(year,month-1,date)`
* 月份需要-1
* 越界自动进退位
* `getFullYear()/getMonth()/getDate()`
* `getDay()`获取当前日期是周几？
