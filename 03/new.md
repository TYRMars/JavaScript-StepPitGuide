# New

创建一个新对象

* this指向这个新对象
* 执行代码，即对this赋值
* 返回this 🔙

* new运算符使用

```
function Foo(name,age){
  this.name = name ;
  this.age = age ;
  //return this //默认有这一行
}
var f = new Foo('zhangsan',20);
//var f1 = new Foo('list',22) //创建多个对象
```

* 自制new运算符

```
var new2 = function (func) {
  var o = Object.create(func.prototype);
  var k = func.call(o);
  if (typeof k === 'object') {
    return k
  }else{
    return o
  }
}

function new_todo() {
  this.name = 'zhang';
}

var o6 =new2(new_todo);
console.log(o6)
```



