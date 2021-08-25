# JSONP

我理解的JSONP的方式就是，通过JS代码，动态创建一个Script标签，通过标签的src的网址里面包含一个JSONP属性，后端接收到后返回一个url中jsonp=参数，这样一个参数\(包含一个json\)，通过执行这个参数命名的函数来实现跨域。

以下是JS中的代码

```javascript
var util = {};

/*[function 在页面注入脚本]*/
util.createScript = function(url,charset){
  var script = document.createElement('script');
  script.setAttribute('type','text/javascript');
  charset && script.setAttribute('charset',charset);
  script.async = true;
  return script;
}

/*[function jsonp]*/
util.jsonp =function(url,onsuccess,onerror,charset){
  var callbackName = util.getName('tt_player');
  window[callbackName] = function () {
    if(onsuccess && util.isFunction(onsuccess)){
      onsuccess(arguments[0]);
    }
  };
  var script = util.createScript(url + '&callback=' + callbackName,charset);
  script.onload = script.onreadystatechange = function () {
    if(!script.readyState || /loaded|complete/.test(script.readyState)){
      script.onload = script.onreadystatechange = null;
      //移除该script 的DOM 对象
      if(script.parentNode){
        script.parentNode.removeChild(script);
      }
      //删除函数或变量
      window[callbackName] = null;
    }
  };
  script.onerror = function(){
    if(onerror && util.isFunction(onerror)){
      onerror();
    }
  };
  document.getElementsByTagName('head')[0].appendChild(script);
}
```

通过它可以创建如下

```markup
<script src="http://www.abc.com/?data=name&callback=jsonp" charset="utf-8"></script>
<script>
jsonp({
  data:{
      <!-- 全局函数接受回掉信息 -->
  }
})
</script>
```

