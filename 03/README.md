# 03-JavaScript-面向对象程序设计

![](http://img.tvmao.com/stills/movie/190/310/b/L7KsW7OtLR=.jpg)

# 理解对象

* ECMAScript对于对象的定义：无序属性的集合，其属性可以包含基本值、对象或者函数
* JavaScript每个对象都是基于一个引用类型创建的。
* 引用类型可以是原生类型也可以是自己定义的类型。

# 原型规则和示例

* 5条原型规则
* 原型规则是学习原型链的基础

---

#### 第1条

* 所有的引用类型\(数组、对象、函数\)，都具有对象特质、即可自由扩展属性\(除了“NULL”以外\)

```js
var obj = {}; obj.a = 100;
var arr = []; arr.a = 100;
function fn(){
  fn.a=100;
}
```

---

#### 第2条

* 所有的引用类型\(数组、对象、函数\)，都有一个`__proto__`\(隐式原型\)属性，属性值是一个普通的对象

```js
console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);
```

---

#### 第3条

* `prototype`解释为JavaScript开发函式库及框架
* 所有的函数，都有一个`prototype`（显示原型）属性，属性值也是一个普通对象。

```js
console.log(fn.prototype);
```

---

#### 第4条

* 所有引用类型（数组、对象、函数），`__proto__`属性值指向它的构造函数的`prototype`属性值

```js
console.log(obj.__proto__ === Object.prototype);
```

---

#### 第5条

* 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的`__proto__`\(即它的构造函数`prototype`\)中寻找

```js
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



#### 循环对象自身属性

```js
var item;
for (item in f) {
  //高级浏览器已经在for in 中屏蔽了来自原型的属性
  //但是这里建议大家还是加上这个判断，保证程序的健壮性
  if(f.hasOwnProperty(item)) {
    console.log(item);
  }
}
```

### instanceof

* 用于判断`引用类型`属于哪个`构造函数`的方法
* `f instanceof Foo` 的判断逻辑是：
* `f`的`__proto__`一层一层往上走，是否能对应到`Foo.prototype`
* 再试着判断f instanceof Object



