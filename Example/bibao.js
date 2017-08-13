//函数作为返回值
function F1() {
  var a = 100;
  return function () {
    console.log(a); //自由变量 回去父作用域寻找
  }
}
var f1 = F1();
var a = 200;
f1() // 100

//2.函数作为参数来传递
function F1() {
  var a = 100;
  return function () {
    console.log(a); // 自由变量，父作用域寻找
  }
}

var f1 = F1();

function F2(fn) {
  var a = 200;
  fn();
}

F2(f1);

//从以上可以看出闭包应用的时候可以收敛作用域
//实际应用中使用闭包封装变量，收敛权限
function isFirstLoad() {
  var _list = [];
  return function (id) {
    if (_list.indexOf(id) >= 0) {
      return false;
    }else {
      _list.push(id);
      return true;
    }
  }
}
