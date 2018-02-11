### 构造函数

* 如何准确判断一个变量数组类型
* 写一个原型链继承的例子
* 描述new一个对象的过程
* zepto\(或其他框架\)源码中如何使用原型链

#### 知识点

* 构造函数
* 构造函数-扩展
* 原型规则和示例
* 原型链
* instanceof

#### 构造函数

* 自己的想法
* `普通的函数就像是按步骤执行的动作，而构造函数更像是可更改零件的木偶，普通函数可以直接调用，但是构造函数需要new`
* `因为构造函数也是函数，所以可以直接被调用，但是它的返回值为undefined，此时构造函数里面的this对象等于全局this对象`
* 扩展
  `实例和对象的区别，从定义上来讲：1、实例是类的具象化产品，2、而对象是一个具有多种属性的内容结构。`

```js
function Foo(name,age){
  this.name = name;
  this.age = age;
  this.class = 'class-1';
  // return this //默认有这一行
}
var f = new Foo('zhangsan',20); //实例化对象
// var f1 = new Foo('lisi',22) //创建多个对象
```

#### 构造函数-扩展

* `var a = {}`
  其实是
  `var a = new Object()`
  的语法糖
* `var a = []`
  其实是
  `var a = new Array()`
  的语法糖
* `function Foo(){...}`
  其实是
  `var Foo = new Function(...)`
* 使用
  `instanceof`
  判断一个函数是否是一个变量的构造函数
  * 如果想判断一个变量是否为“数组”：变量
    `instanceof Array`

#### 如何准确判断一个变量是数组类型

```
var arr = [];
arr instanceof Array; //true
typeof arr //object  typeof是无法判断是否是数组
```



