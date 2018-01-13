# JavaScript算法-希尔排序

* 希尔排序
* 这个算法在插入排序的基础上作出了很大的改善。希尔排序的核心理念与插入排序不同，它会首先比较距离较远的元素，而非相邻的元素。和简单的比较相邻元素相比，使用这种方案可以使离正确位置很远的元素更快回到适合的位置。当开始用这个算法遍历数据集时，所有元素之间的距离会不断减小，直到处理到数据集的末尾，这时算法比较的就是相邻元素了。
* 主要是通过遍历数组中相隔相同位置的元素去比较大小进行排列

```js
function shellsort() {
  for (var g = 0; i <
 this.gaps.length; ++g) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      var temp = this.dataStore[i];
      for (var j = i; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j-this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }
  }
}
```

* CArray构造函数中添加

```js
this.gaps = [5,3,1];
//并添加一个函数
function setGap(arr) {
  this.gaps = arr ;
}
```



