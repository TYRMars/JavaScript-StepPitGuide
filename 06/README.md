# 06 JavaScrpit-模块化

* [06-01](https://github.com/TYRMars/JSLearn/tree/master/06#06-01) `模块化`
* [06-02](https://github.com/TYRMars/JSLearn/tree/master/06#06-02) `模块化-AMD`
* [06-03](https://github.com/TYRMars/JSLearn/tree/master/06#06-03) `模块化-CommonJS`


## 06-01
### 模块化

* 不使用模块化
* 使用模块化
* AMD
* CommonJS

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

## 06-02
### AMD

* require.js `requirejs.org/`
* 全局define函数
* 全局require函数
* 依赖JS会自动、异步加载

```JavaScript
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

```html
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

## 06-03
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

## 06-04
### Git
#### 常用命令

* `git init`git初始化
* `git add .`文件新增
* `git checkout XXX`出错还原
* `git commit -m "XXX"`commit提交到本地仓库 后面为注释
* `git push origin master` 代码上传
* `git pull origin master` 代码下载

##### 多人开发

* `git branch`看当前分支
* `git checkout -b xxx/git checkout xxx`创建一个分支/切换分支
* `git merge xxx`分支更改的东西提交到master或者分支
