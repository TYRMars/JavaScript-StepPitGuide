# 01 JavaScrpit-变量与原型

* [01-01](https://github.com/TYRMars/JSLearn/tree/master/01#01-01) `变量类型和计算（1）`
* [01-02](https://github.com/TYRMars/JSLearn/tree/master/01#01-02) `变量类型和计算（2）`
* [01-03](https://github.com/TYRMars/JSLearn/tree/master/01#01-03) `变量类型和计算（3）-JSON的理解`
* [01-04](https://github.com/TYRMars/JSLearn/tree/master/01#01-04) `原型与原型链-构造函数`
* [01-05](https://github.com/TYRMars/JSLearn/tree/master/01#01-05) `原型规则和示例`
* [01-06](https://github.com/TYRMars/JSLearn/tree/master/01#01-06) `原型链`
* [01-07](https://github.com/TYRMars/JSLearn/tree/master/01#01-07) `instanceof`
* [01-08](https://github.com/TYRMars/JSLearn/tree/master/01#01-08) `知识点小结 & 解决问题`

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
var c = '';
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
console.log(!!a);//true
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
* 尤其是`typeof null object`它是一个引用类型

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
