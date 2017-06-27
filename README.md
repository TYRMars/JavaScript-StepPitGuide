# JavaScript学习
## JavaScript基础知识剖析
* [01-01](https://github.com/TYRMars/JSlearn#01-01) `变量类型和计算（1）`
* [01-02](https://github.com/TYRMars/JSlearn#01-02) `变量类型和计算（2）`
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
