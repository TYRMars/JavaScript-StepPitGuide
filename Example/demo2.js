var Fn = (function(){
  var arrachFunctionList = {};
  //事件通知
  var notify = function (notifyName){
    var args = Array.prototype.slice.call(arguments,1);
    attachFunctionList[notifyName].fun.apply(attachFunctionList[notifyName].scope,args);
    return this;
  }
  //事件监听
  var attach = function(notifyName,callback){
    if(typeof notifyName === "string" && typeof callback === "function"){
      attachFunctionList[notifyName] = {
        fun : callback
      };
    }
    return{
      attach:attach,
      notify:notify
    }
  }
}
)();
document.onkeydown = function(e){
  var name = "张佳楠";
  var number = window.event ? e.keyCode : e.which;
  if(number === 9){
    //Tab事件后通知该事件已经发生了，并把当前参数传递过去
    fn.notify("keydown",name);
  }
}
//监听到按钮被点击后进行其他操作
Fn.attach("keydown",function(name){
  alert("Tab切换成功！姓名是：" + name)
})
