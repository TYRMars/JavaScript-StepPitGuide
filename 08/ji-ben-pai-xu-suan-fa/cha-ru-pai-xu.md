### JavaScript算法-插入排序

* 插入排序
* 插入排序有两个循环，外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组会向右移动，为内循环中的这个元素腾出位置。



![](http://www.2cto.com/uploadfile/Collfiles/20160918/20160918092144589.gif)



```
function insertionSort() {
  var temp,inner;
  for (var outer = 1; outer <= this.dataStore.length - 1 ; ++outer) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner>0 &&(this.dataStore[inner-1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      --inner;
    }
    this.dataStore[inner] = temp;
  }
}
```



