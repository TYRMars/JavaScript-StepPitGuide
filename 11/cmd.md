### CommonJS

* nodejs模块化规范，现在被大量用于前端，原因：
  * 前端开发依赖的插件和库，都可以从npm中获取
  * 构建工具的高度自动化，是的使用npm的成本非常低
  * CommonJS不会异步加载JS，而是同步一次性加载出来

```JavaScript
module.exports = {
  getFormatDate:function (data,type) {
    if (type === 1) {
      return '2017-06-15';
    }
    if (type === 2) {
      return '2017年6月15日';
    }
  }
}

// a-util.js
var util = require('util.js')
module.exports = {
  aGetFormatDate:function (data) {
    return util.getFormatDate(data,2);
  }
}
```

#### AMD和CommonJS的使用场景

* 需要异步加载JS，使用AMD
* 使用了npm之后建议使用CommonJS



