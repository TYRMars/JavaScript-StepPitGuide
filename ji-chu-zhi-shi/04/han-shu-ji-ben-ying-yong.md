# 函数基本应用

* 函数声明与函数表达式、对象实例化的区别

```javascript
 add1(1,1);
 add2(1,2);
 add3(1,3);
 function add1(i, j){
   console.log(i+j);
 }
 var add2 = function(i, j){
   console.log(i+j);
 }
 var add3 = new Function("i", "j", "console.log(i+j);");
```

* 对象实例化与函数声明与函数表达式的区别

```javascript
 (function(){
   var i = 10;
   function add(j) {
     console.log(i+j);
     debugger;
   }
   add(1);
 })();

 (function(){
   var i = 10;
   var add = new Function("j", "console.log(i+j);debugger;");
   add(1);
 })();
```

* bind的使用

```javascript
 function Point(x, y){
     this.x = x;
     this.y = y;
 }
 Point.prototype.move = function(x, y) {
     this.x += x;
     this.y += y;
 }
 var p = new Point(0,0);
 var circle = {x:1, y:1, r:1};
 var circleMove = p.move.bind(circle, 2, 1);
 circleMove();
```

* 构造函数

```javascript
 function Car(type,color){
   this.type = type;
   this.color = color;
   this.status = "stop";
   this.light = "off";
 }
 Car.prototype.start = function(){
   this.status = "driving";
   this.light = "on";
   console.log(this.type + " is " + this.status);
 }
 Car.prototype.stop = function(){
   this.status = "stop";
   this.light = "off";
   console.log(this.type + " is " + this.status);
 }
 var audi = new Car("audi", "silver");
 var benz = new Car("benz", "black");
 var ferrari = new Car("ferrari", "yellow");
```

* 函数调用模式

```javascript
 function add(i, j){
   return i+j;
 }
 var myNumber = {
   value: 1,
   double: function(){
     var helper = function(){
       this.value = add(this.value,this.value);
     }
     helper();
   }
 }
```

* arguments转数组

```javascript
 function add(i, j) {
   var args = Array.prototype.slice.apply(arguments);
   args.forEach(function(item){
     console.log(item);
   })
 }
 add(1,2,3);
```

* arguments.callee使用

```javascript
 console.log(
   (function(i){
     if (i==0) {
       return 1;
     }
     return i * arguments.callee(i-1);
   })(5)
 );
```

* 递归

```javascript
 function factorial(i){
   if (i==0) {
     return 1;
   }
   return i*factorial(i-1);
 }
```

* 普通递归函数跟记忆函数调用次数对比

```javascript
 var factorial = (function(){
   var count = 0;
   var fac = function(i){
     count++;
     if (i==0) {
       console.log('调用次数：' + count); 
       return 1;
     }
     return i*factorial(i-1);
   }
   return fac;
 })();
 for(var i=0;i<=10;i++){
   console.log(factorial(i)); 
 }

//记忆函数
 var factorial = (function(){
   var memo = [1];
   var count = 0;
   var fac = function(i){
     count++;
     var result = memo[i];
     if(typeof result === 'number'){
       console.log('调用次数：' + count); 
       return result;
     } 
     result = i*fac(i-1);
     memo[i] = result;
     return result;
   }
   return fac;
 })();
 for(var i=0;i<=10;i++){
   console.log(factorial(i)); 
 }
```

* curry 函数柯里化
  * 把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术

```javascript
 function add(value){
    var helper = function(next){
       value = typeof(value)==="undefined"?next:value+next;
       return helper;
    }
    helper.valueOf = function(){
      return value;
    }
    return helper
 }
```

* 定时器

```javascript
function set_loop() {
  var i =1;
  setTimeout(function () {
    i = i + 1;
    console.log(i);
    set_loop()
  },5000);
}
```

