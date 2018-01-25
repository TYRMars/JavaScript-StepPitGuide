# axios

简洁好用的发送请求库，`npm install axios --save`安装

* axios.interceptors设置拦截器，比如全局的loading
* axios.get,post发送请求，返回promise对象

### 发送请求

```js
//get请求
```

### 拦截请求

```js
//拦截请求
import axios from 'axios'
axios.interceptors.request.use(
  function(config){
    //doing
  }
)

//拦截响应
axios.interceptors.request.use(
  function(config){
    //doing
  }
)
```



