# Socket.io库

## Socket.io是什么？ <a id="socketio&#x662F;&#x4EC0;&#x4E48;&#xFF1F;"></a>

### 基于事件的实时双向通信库

* 基于websocket协议
* 前后端通过事件进行双向通信
* 配合express，快速开发实时应用

## Socket.io和Ajax区别 <a id="socketio&#x548C;ajax&#x533A;&#x522B;"></a>

### 基于不同的网络协议

* Ajax基于http协议，单向，实时获取数据只能轮询
* socket.io基于websocket双向通信协议，后端可以主动推送数据
* 现代浏览器均可以支持websocket

![](../.gitbook/assets/桌面%20宽屏.png)

## Socket.io后端API

### 配合express

* IO = require\('socket.io'\)\(http\)
* io.on 监听事件
* io.emit 触发事件

## Socket.io前端API

### 配合 express

* import io from 'socket.io-client'
* io.on 监听事件
* io.emit 触发事件

## Socket.io合并HTTP

```javascript
const express = require('express')
const app = express()
//work with express
const server = require('http').Server(app)
const io = require('socket.io')(server)
```

