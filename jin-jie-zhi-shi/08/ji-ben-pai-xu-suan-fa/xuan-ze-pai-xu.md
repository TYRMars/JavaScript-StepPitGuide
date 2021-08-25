# 选择排序

* 选择排序
* 选择排序从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便完成了排序。
* 选择排序会用到嵌套循环。外循环从数组的第一个元素一定到倒数第二个元素；内循环从第二个数组元素移动到最后一个元素，查找比当前外循环

![](http://www.2cto.com/uploadfile/Collfiles/20160918/20160918092144584.gif)

```javascript
function selectionSort() {
  var min,temp;
  for (var outer = 0; outer <= this.dataStore.length-2; ++outer){//循环
    min = outer;//定义第一个为最小
    for (var inner = outer + 1; i <this.dataStore.length-1; ++inner) {
    //查找下一个中
      if (this.dataStore[inner]<this.dataStore[min]){
      //如果数组内的第inner项小于最小项
        min = inner;//最小项设置为inner
      }
      swap(this.dataStore,outer,min);//交换最小值和outer
    }
  }  
}
//找到数组中剩余的最小值，如果更小outer进行交换
```

