### JavaScript算法-快速排序

* 快速排序是处理大数据集最快的排序算法之一。它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。该算法不断重复这个步骤直到所有数据都是有序的。
* 这个算法首先要在列表中选择一个元素作为基准值\(pivot\)。数据排序围绕基准值进行，将列表中小于基准值的元素移到数组的底部，将大于基准值的元素移到数组的顶部。

#### 快速排序的算法和伪代码

* 算法：
  * （1）选择一个基准元素，将列表分隔成两个子序列；
  * （2）对列表重新排序，将所有小于基准值的元素放在基准值的前面，所有大于基准值的元素放在基准值的后面
  * （3）分别对较小元素的子序列和较大元素的子序列重复步骤1和2。
* 代码如下

```js
function qSort(list) {
  if (list.length == 0) {
    return [];
  }
  var lesser = [];
  var greater = [];
  var pivot = list[0];
  for (var i = 1; i <
 list.length; i++) {
    if (list[i]<pivot) {
      lesser.push(list[i]);
    }else {
      greater.push(list[i]);
    }
  }
  return qSort(lesser).concat(pivot,qSort(greater));
}
```



