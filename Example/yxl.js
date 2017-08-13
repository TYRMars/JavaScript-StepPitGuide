function Elem(id) {
  this.elem =document.getElementById(id);
}

//获取html原型
Elem.prototype.html = function (val) {
  var elem = this.elem;
  if (val) {
    elem.innerHTML = val;
    return this //链式操作 后部可以继续操作，因为对象还是通过id
  }else {
    return elem.innerHTML;
  }
}

Elem.prototype.on = function (type,fn,bool) {
  var elem = this.elem;
  elem.addEventListener(type,fn,bool);
}

var div1 = new Elem('div1');

console.log(div1.html());

var i,a;
for (var i = 0; i < 10; i++) {
  (function (i) {
    var a = document.createElement('a');
    a.innerHTML = i + '<br>';
    a.addEventListener('click',function (e) {
      e.preventDefault();
      alert(i);
    })
    document.body.appendChild(a);
  })(i)
}
