# AMD

* require.js `requirejs.org/`
* 全局define函数
* 全局require函数
* 依赖JS会自动、异步加载

```javascript
//util.js
define(function () {
  return{
    getFormatDate: function (date,type) {
      if (type === 1) {
        return '2017-06-15'
      }
      if (type === 2) {
        return '2017年6月15日'
      }
    }
  }
});

//a-util.js
define(['./util.js'],function (util) {
  return{
    aGetFormatDate: function (date) {
      return util.getFormatDate(date,2);
    }
  }
});

// a.js
define('[./a-util.js]',function (aUtil) {
  return{
    printDate:function (date) {
      console.log(aUtil.aGetFormatDate);
    }
  }
});

//main.js
require('[./a.js]',function (a) {
  var date = new Date();
  a.printDate(date);
});
```

* 使用

```markup
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Document</title>
</head>
<body>
  <p>AMD test</p>
  <script src="/require.min.js" data-main="./main.js"></script>
</body>
</html>
```

