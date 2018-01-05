### JavaScript算法-冒泡排序

* 冒泡排序
* 最慢的排序算法之一
* 冒泡排序，之所以这么叫是因为使用这种排序算法排序时，数据值就会像气泡一样从数组的一端漂浮到另一端。假设正在将一组数字按照升序排列，较大的值会浮动到数组的右侧，而较小的值会浮动到数组的左侧。之所以会产生这种现象是因为算法会多次在数组中移动，比较相邻的数据，当左侧值大于右侧值时将它们进行互换。



```js
function bubbleSort() {
  var numElements = this.dataStore.length; //获取数组长度
  var temp;// 定义临时对象
  for (var outer = numElements; outer 
>
= 2; --outer) {//对元素遍历，直到最后剩2个数字
    for (var inner = 0; inner 
<
= outer - 1; ++inner ) {//从第零个开始，直到不满足
      if (this.dataStore[inner] 
>
 this.dataStore[inner + 1]) {//如果,前一个大于后一个，
        swap(this.dataStore,inner,inner + 1);//进行交换
      }
    }
  }
}//通过比较把最大的放到最右面
```

* 使用bubbleSort\(\)对10个数字排序

```js
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.bubbleSort();
console.log(mynums.toString);
```



