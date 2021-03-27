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

## Promise原型

{% code title="hello.sh" %}
```bash
# Ain't no code for that yet, sorry
echo 'You got to trust me on this, I saved the world'
```
{% endcode %}



