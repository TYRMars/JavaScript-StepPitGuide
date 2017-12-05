# 11-JavaScrpit-模块化

### 模块化

* 不使用模块化
* 使用模块化
* AMD
* CommonJS
* ES6

#### 不使用模块化

* `util getFormatDate函数`
* `a-util.js aGetFormatDate函数 使用getFormatDate`
* `a.js aGetFormatDate`
* 定义

```JavaScript
//util.js
function getFormatDate(date,type) {
  //type === 1返回 2017-06-15
  //type === 2返回 2017年6月15日 格式
  //...
}
//a-util.js
function aGetFormatDate(data) {
  //返回
  return getFormatDate(date,2);
}
// a.js
var dt = new Date()
console.log(aGetFormatDate(dt));
```

* 使用

```html
<script src="util.js"></script>
<script src="a-util.js"></script>
<script src="a.js"></script>
<!-- 1.这些代码中的函数必须是全局变量，才能暴露给使用方。全局变量污染 -->
<!-- 2. a.js 知道要引用 a-util.js ,但是他知道还需要依赖于util.js吗？ -->
```

#### 使用模块化

```JavaScript
//util.js
export{
  getFormatDate:function (data,type) {
    //type === 1 返回 2017-06-15
    //type === 2 返回 2017年6月15日 格式
  }
}
//a-util.js
var getFormatDate = require('util.js');
export{
  aGetFormatDate:function (date) {
    //要求返回 2017年6月15日 格式
    return getFormatDate(date,2);
  }
}
// a.js
var aGetFormatDate = require('a-util.js')
var dt = new Date();
console.log(aGetFormatDate(dt));

//直接‘<script src="a.js"></script>’,其他的根据依赖关系自动引用
//那两个函数，没必要做成全局变量，不会带来污染和覆盖
```

## 



