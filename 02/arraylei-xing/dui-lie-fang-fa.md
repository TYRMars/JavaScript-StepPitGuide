# 队列方法

队列采用的先进先出的策略

从队尾推入元素采用`pop()`，从队列首部推出采用`shift()`。

```javascript
{
  let arrays = [1,2,3,4,5];
  arrays.push(5,6);
  arrays.shift();
}
```

