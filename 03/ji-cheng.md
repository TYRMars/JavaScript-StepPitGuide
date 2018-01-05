## 原型继承

* 类与实例
  * 类的声明
  * 生成实例
* 类与继承
  * 如何实现继承
  * 继承的几种方式

### 类的声明

* 类声明 构造函数

```js
function Animal1() {
  this.name = 'animal';
}
```

* ES6中class的声明

```js
class Animal2 {
  constructor() {
    this.name = 'animal';
  }
}
```

#### 1.构造函数方式进行继承

```js
function Parent1() {
  this.name = 'parent1';
}
function Child1() {
  Parent1.call(this);
  this.type = 'child1';
}
console.log(new Child1());
```

* 但是如果要继承原型对象上的方法是没办法继承的

```js
// 借助构造函数
function Parent1() {
  this.name = 'parent1';
}
//
Parent1.prototype.say = function () {
  console.log('say');
}
//但是如果要继承原型对象上的方法是没办法继承的
function Child1() {
  Parent1.call(this);
  this.type = 'Child1';
}
console.log(new Child1());
```

#### 2.借助原型链实现继承

```js
function Parent2() {
  this.name = 'parent2';
}
function Child2() {
  this.type = 'child2';
}
Child2.prototype = new Parent2();//让child2的原型赋值为Parent2的实例
console.log(new Child2());
```

* s1与s2之间不相互隔离
* 原型链中共用

```js
function Parent2() {
  this.name = 'parent2';
  this.num = [1,2,3];
}
function Child2() {
  this.type = 'child2';
}
Child2.prototype = new Parent2();//让child2的原型赋值为Parent2的实例
var s1 = new Child2();
var s2 = new Child2();
console.log(s1.play,s2.play);
```

#### 3.组合方式

```js
function Parent3() {
  this.name = 'Parent3';
  this.play = [1,2,3];
}
function Child3() {
  Parent3.call(this);
  this.type = 'child3';
}
Child3.prototype = new Parent3();//Child3的原型对象指向Parent3的实例
console.log(new child3);
```

* 父类构造函数执行了多次，没有必要的重复执行

#### 4.组合方式改进1

```js
function Parent4() {
  this.name = 'parent4';
}
function Child4() {
  Parent4.call(this);
  this.type = 'child4';
}
Child4.prototype = Parent4.prototype;
var s5 = new Child4();
var s6 = new Child4();
console.log(s5,s6);
```

* `instanceof`和`constructor`

```
console.log(s5 instanceof Child4,s5 instanceof Parent4);
```

* 如何区分是子类实例化的还是父类实例化的

#### 5.组合方式改进2

* 主要是在继承的时候让 子类的原型对象 =
  `Object.Create(父类构造函数的原型对象)`
* 再通过改变子类的原型对象的constructor，因为此时的constructor的指向是父类原型对象的构造函数

```js
function Parent5() {
  this.name = 'Parent5';
  this.play = [1,2,3];
}
function Child5() {
  Parent5.call(this);
  this.type = 'Child5'
}
Child5.prototype = Object.create(Parent5.prototype);
//通过Object.create()创建一个新的对象，传入的原型对象是Parent.prototype
console.log('组合继承改进2',new Child5);
//改变constructor的指向
function Parent6() {
  this.name = 'Parent6';
  this.play = [1,2,3];
}
function Child6() {
  Parent6.call(this);
  this.type = 'Child6'
}
Child6.prototype = Object.create(Parent6.prototype);
Child6.prototype.constructor = Child6;
console.log('组合继承改进2-constructor',new Child6);
```

#### 6.原型式继承

```js
//原型式继承
function object_oop(o) {
  function F() {
  }
  F.prototype = o;
  return new F();
}
var person = {
  name:"zhangjianan",
  friends:["yueyue","red"]
};
var OnePerson = object_oop(person);
console.log('原型式继承',OnePerson);
OnePerson.name = "Goge";
console.log('原型式继承',OnePerson);
var TwoPerson = object_oop(person);
TwoPerson.friends.push("red");
console.log('原型式继承',OnePerson,TwoPerson);
//ES5原型式继承
var ThreePerson = Object.create(person,{
  name: {
    value:"XIXI"
  }
})
console.log(ThreePerson);
var FourPerson = Object.create(ThreePerson,{
  name:{
    value:[1,2,3,4]
  }
})
console.log('原型式继承',FourPerson);
```

* ** ES5中主要使用Object.create\(\)去创建对象**

#### 贴近实际开发原型链继承的例子

```js
function Elem(id) {
  this.elem = document.getElementById(id);
}

Elem.prototype.html = function (val) {
  var elem = this.elem;
  if (val) {
    elem.innerHTML = val;
    return this; // 链式操作
  }else {
    return elem.innerHTML;
  }
}

Elem.prototype.on = function (type, fn) {
  var elem = this.elem ;
  elem.addEventListener(type, fn) ;
}

var div1 = new Elem('div1');
//console.log(div1.html());
div1.html('<p>tyrmars</p>
')
div1.on('click',function () {
  alert('click')
})
```

#### 写一个原型链继承的例子

```js
//动物
function Animal(){
  this.eat = function () {
    console.log('animal eat');
  }
}
//狗🐶
function Dog(){
  this.bark = function () {
    console.log('dog bark');
  }
}
Dog.prototype = new Animal();
//哈士奇
var hashiqi = new Dog();
//如果要真正写，就要写更贴近实战的原型链
```

* 推荐 阮一峰老师👨‍🏫的两篇文章：

[Javascript 面向对象编程（一）：封装](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)

[Javascript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)

