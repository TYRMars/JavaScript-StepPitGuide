---
description: Promise 使用
---

# Promise

## Promise简介

Promise 对象用于表示一个异步操作的最终完成（或失败）及其结果值

```javascript
const myFirstPromise = new Promise((resolve, reject) => {
  // ?做一些异步操作，最终会调用下面两者之一:
  //
  //   resolve(someValue); // fulfilled
  // ?或
  //   reject("failure reason"); // rejected
});
```

{% hint style="info" %}
 promise.finally\(\) 要注意浏览器兼容性
{% endhint %}

## Promise实现

{% code title="promise" %}
```javascript
// 基本状态


class MyPromise(fn) {
    static PENGDING = 'pending';
    static RESOLVED = 'resolved'; // fulfilled
    static REJECTED = 'rejected';
    
    constructor(callBackFun) {
        this.
    }
}
```
{% endcode %}

