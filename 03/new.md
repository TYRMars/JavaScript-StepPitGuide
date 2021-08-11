# New

创建一个新对象

* this指向这个新对象
* 执行代码，即对this赋值
* 返回this 🔙
* new运算符使用

```javascript
function Foo(name,age){
  this.name = name ;
  this.age = age ;
  //return this //默认有这一行
}
var f = new Foo('zhangsan',20);
//var f1 = new Foo('list',22) //创建多个对象
```

* 自制new运算符

```javascript
var new2 = function (func) {
  var o = Object.create(func.prototype);
  var k = func.call(o);
  if (typeof k === 'object') {
    return k
  }else{
    return o
  }
}

// 加强版
function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  // 判断参数是否是一个函数
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function");
  // 判断返回结果
  return flag ? result : newObject;
}

function new_todo() {
  this.name = 'zhang';
}

var o6 =new2(new_todo);
console.log(o6)
```

