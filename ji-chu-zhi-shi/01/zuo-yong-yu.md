# 作用域

## 作用域 <a id="&#x4F5C;&#x7528;&#x57DF;"></a>

**执行上下文**

```javascript
console.log(a);  // undefined
var a = 100;

fn('zhangsan')  // 'zhangsan' 20
function fn(name) {
  age = 20;
  console.log(name, age);
  var age;
}
```

* 范围：一段&lt;script&gt;或者一个函数
* 全局：变量定义、函数声明
* 函数：变量定义、函数声明、this、arguments
* 注意⚠️“函数声明”和“函数表达式”的区别

```javascript
fn()
function fn() {
  //声明
}

fn1()
var fn1 = function () {
  //表示
}
var a = 100; //类似于这个

//全局声明

console.log(a);
var a = 100;

fn('zhangsan')
function fn(name) {
  console.log(this);
  age = 20;
  console.log(name,age);
  var age;

  bar(100);

  function bar(num) {
    console.log(num);
  }
}
```

**作用域**

* 没有块级作用域
* 只有函数和全局作用域

```javascript
//无块级作用域
if(true){
  var name = 'zhangsan';
}
console.log(name);

//函数和全局作用域
var a = 100;
function fn() {
  var a = 200;
  console.log('fn',a);
}
console.log('global',a);
fn();
```

**如何理解作用域**

* 自由变量
* 作用域链，即自由变量的查找
* 闭包的两个场景

```javascript
var x=10;
function foo() {
  alert(x);
}
function bar() {
  var x=20;
  foo();
}
bar();
```

* 生命周期
* 作用范围

### 变量作用域

* 静态作用域
* 动态作用域

#### 静态作用域

* 被称为词法作用域
* 由程序定义位置决定

```javascript
var x=10;
function foo() {
  alert(x);
}
function bar() {
  var x=20;
  foo();
}
bar();
```

|  | 全局作用域 |
| :--- | :--- |
| x | 10 |
| foo |  |
| bar |  |

|  | foo作用域 |
| :--- | :--- |
| - | - |

|  | bar作用域 |
| :--- | :--- |
| x | 20 |

#### 动态作用域

* 程序运行时刻
* 栈操作

| x:20 |
| :--- |
| bar: |
| foo: |

## JS变量作用域

* JS使用**静态作用域**
* JS没有**块级作用域\(全局作用域、函数作用域\)\(ES5\)**
* ES5中使用词法环境管理静态作用域

```javascript
var x = 10;
function foo() {
  var z = 30;
  function bar(q) {
    return x + y + q;
  }
  return bar;
}
var bar = foo(20);
bar(40);
```

* 环境记录
  * 形式参数
  * 函数声明
  * 变量
* 对外部词法环境的引用（outer）
* 初始化

[![](https://github.com/TYRMars/JSLearn/raw/master/02/img/chushihua01.png)](https://github.com/TYRMars/JSLearn/blob/master/02/img/chushihua01.png)

* 执行

[![](https://github.com/TYRMars/JSLearn/raw/master/02/img/environment_02.png)](https://github.com/TYRMars/JSLearn/blob/master/02/img/environment_02.png)

### 作用域链

```javascript
var a = 100;
function fn() {
  var b = 200;

  //作用域没有定义变量，即“自由变量”
  console.log(a);
  console.log(b);
}
fn();

var a = 100;
function F1() {
  var b = 200;
  function F2() {
    var c = 300;
    console.log(a);//a是自由变量。形成一个链式结构，向父级去查找
    console.log(b);//b是自由变量
    console.log(c);//
  }
}
```

**对变量提升的理解**

* 变量定义
* 函数声明（注意和函数表达式的区别）

**创建10个&lt;a&gt;标签 点击的时候弹出来对应的序号**

* 错误写法

```javascript
//这是一个错误的写法！！！
var i,a;
for (var i = 0; i < 10; i++) {
  a = document.createElement('a');
  a.innerHTML = i + '<br>';
  a.addEventListener('click',function (e) {
    e.preventDefault();
    alert(i)
  })
  document.body.appendChild(a);
}
//输出为如下： <a>"9"<br></a>
```

* 正确写法

```javascript
//这是一个正确写法！！！
var i;
for (i = 0; i < 10; i++) {
  (function(i){
    var a = document.createElement('a');
    a.innerHTML = i + '<br>';
    a.addEventListener('click',function (e) {
      e.preventDefault();
      alert(i);
    })
    document.body.appendChild(a);
  })(i)
}
```

