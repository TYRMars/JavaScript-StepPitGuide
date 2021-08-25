# 原型链

```javascript
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

## 原型链视图

![](../../.gitbook/assets/727989-20161118220935607-577282845.jpg)

