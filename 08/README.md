#### 08 JavaScrpit-算法应用

* [08-01](https://github.com/TYRMars/JSLearn/tree/master/08#08-01) `JavaScript算法测试函数`
* [08-02](https://github.com/TYRMars/JSLearn/tree/master/08#08-02) `JavaScript算法-冒泡排序`
* [08-03](https://github.com/TYRMars/JSLearn/tree/master/08#08-03) `JavaScript算法-选择排序`
* [08-04](https://github.com/TYRMars/JSLearn/tree/master/08#08-04) `JavaScript算法-插入排序`
* [08-05](https://github.com/TYRMars/JSLearn/tree/master/08#08-05) `JavaScript算法-希尔排序`
* [08-06](https://github.com/TYRMars/JSLearn/tree/master/08#08-06) `JavaScript算法-归并排序`
* [08-07](https://github.com/TYRMars/JSLearn/tree/master/08#08-07) `JavaScript算法-快速排序`
* [08-08](https://github.com/TYRMars/JSLearn/tree/master/08#08-08) `JavaScript算法-高级算法-动态规划`


## 08-01
### JavaScript算法测试函数

* SetData()函数生成了存储在数组中的随机数字。Math类的random()函数会生成[0,1)区间内的随机数字。换句话说，random()函数生成的随机数字大于等于0，但不会等于1。最后在用Math类的floor()函数确定最终结果。
* 如下这个公式可以成功生成1~100的随机数字集合。

```JavaScript

function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  }
}
//数据输出
function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));//生成随机数组
  }
}

function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var restr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    restr += this.dataStore[i] + " ";
    if (i > 0 & i % 10 == 0) {
      restr += "\n";
    }
  }
  return restr;
}

function swap(arr,index1,index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

//测试
var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
```

<p align="center"><img src="http://oe51jhwvd.bkt.clouddn.com/1.png" /></p>

#### 名词解释：

* n: 数据规模
* k:“桶”的个数
* In-place: 占用常数内存，不占用额外内存
* Out-place: 占用额外内存
* 稳定性：排序后2个相等键值的顺序和排序之前它们的顺序相同

##### 用一个`for`遍历数组排序

```JavaScript
var a = [12,13,65,54,86,21,37,1,95,4];
var l = a.length;
console.log(a);
for (var i = 0; i < l; i++) {
  if (a[i] > a[i + 1]) {
    var temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
  }
  if (i == l-1) {
    i = -1;
    l--;
  }
}
console.log(a);
```

## 08-02
### JavaScript算法-冒泡排序

* 冒泡排序
* 最慢的排序算法之一
* 冒泡排序，之所以这么叫是因为使用这种排序算法排序时，数据值就会像气泡一样从数组的一端漂浮到另一端。假设正在将一组数字按照升序排列，较大的值会浮动到数组的右侧，而较小的值会浮动到数组的左侧。之所以会产生这种现象是因为算法会多次在数组中移动，比较相邻的数据，当左侧值大于右侧值时将它们进行互换。

<p align="center"><img src="http://oe51jhwvd.bkt.clouddn.com/2.gif" /></p>

```JavaScript
function bubbleSort() {
  var numElements = this.dataStore.length; //获取数组长度
  var temp;// 定义临时对象
  for (var outer = numElements; outer >= 2; --outer) {//对元素遍历，直到最后剩2个数字
    for (var inner = 0; inner <= outer - 1; ++inner ) {//从第零个开始，直到不满足
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {//如果,前一个大于后一个，
        swap(this.dataStore,inner,inner + 1);//进行交换
      }
    }
  }
}//通过比较把最大的放到最右面
```

* 使用bubbleSort()对10个数字排序

```JavaScript
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.bubbleSort();
console.log(mynums.toString);
```

## 08-03
### JavaScript算法-选择排序

* 选择排序
* 选择排序从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便完成了排序。
* 选择排序会用到嵌套循环。外循环从数组的第一个元素一定到倒数第二个元素；内循环从第二个数组元素移动到最后一个元素，查找比当前外循环

<p align="center"><img src="http://www.2cto.com/uploadfile/Collfiles/20160918/20160918092144584.gif" /></p>

```JavaScript
function selectionSort() {
  var min,temp;
  for (var outer = 0; outer <= this.dataStore.length-2; ++outer)//循环
    min = outer;//定义第一个为最小
    for (var inner = outer + 1; i < this.dataStore.length-1; ++inner) {//查找下一个中
      if (this.dataStore[inner]<this.dataStore[min]) {//如果数组内的第inner项小于最小项
        min = inner;//最小项设置为inner
      }
      swap(this.dataStore,outer,min);//交换最小值和outer
    }
  }  
}
//找到数组中剩余的最小值，如果更小outer进行交换
```

## 08-04
### JavaScript算法-插入排序

* 插入排序
* 插入排序有两个循环，外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组会向右移动，为内循环中的这个元素腾出位置。

<p align="center"><img src="http://www.2cto.com/uploadfile/Collfiles/20160918/20160918092144589.gif" /></p>

```JavaScript
function insertionSort() {
  var temp,inner;
  for (var outer = 1; outer <= this.dataStore.length - 1 ; ++outer) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner>0 && (this.dataStore[inner-1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      --inner;
    }
    this.dataStore[inner] = temp;
  }
}
```

## 08-05
### JavaScript算法-希尔排序

* 希尔排序
* 这个算法在插入排序的基础上作出了很大的改善。希尔排序的核心理念与插入排序不同，它会首先比较距离较远的元素，而非相邻的元素。和简单的比较相邻元素相比，使用这种方案可以使离正确位置很远的元素更快回到适合的位置。当开始用这个算法遍历数据集时，所有元素之间的距离会不断减小，直到处理到数据集的末尾，这时算法比较的就是相邻元素了。
* 主要是通过遍历数组中相隔相同位置的元素去比较大小进行排列

```JavaScript
function shellsort() {
  for (var g = 0; i < this.gaps.length; ++g) {
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

```JavaScript
this.gaps = [5,3,1];
//并添加一个函数
function setGap(arr) {
  this.gaps = arr ;
}
```

## 08-06
### JavaScript算法-归并排序

<p align="center"><img src="http://www.2cto.com/uploadfile/Collfiles/20160918/20160918092144591.gif" /></p>

* 归并排序
* 归并排序是建立在归并操作上的一种有效的排序算法。该算法是分治法的一个非常典型的应用。归并排是一种稳定的排序方法。将已有序列的子序列合并
* <1>.把长度为n的输入序列分成两个长度为n/2的子序列；
* <2>.对这两个子序列分别采用归并排序；
* <3>.将两个排序好的子序列合并成一个最终的排序序列。

```JavaScript
function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
    console.time('归并排序耗时');
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
    console.timeEnd('归并排序耗时');
    return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));
// 归并排序耗时: 0.009033203125ms
// 归并排序耗时: 0.0048828125ms
// 归并排序耗时: 0.004150390625ms
// 归并排序耗时: 0.002197265625ms
// 归并排序耗时: 0.0048828125ms
// 归并排序耗时: 0.0029296875ms
// 归并排序耗时: 0.0009765625ms
// 归并排序耗时: 0.000732421875ms
// 归并排序耗时: 0.003173828125ms
// 归并排序耗时: 0.003173828125ms
// 归并排序耗时: 0.001220703125ms
// 归并排序耗时: 0.002197265625ms
// 归并排序耗时: 0.0029296875ms
// 归并排序耗时: 0.002685546875ms
//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

## 08-07
### JavaScript算法-快速排序

* 快速排序是处理大数据集最快的排序算法之一。它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。该算法不断重复这个步骤直到所有数据都是有序的。
* 这个算法首先要在列表中选择一个元素作为基准值(pivot)。数据排序围绕基准值进行，将列表中小于基准值的元素移到数组的底部，将大于基准值的元素移到数组的顶部。

#### 快速排序的算法和伪代码
* 算法：
    * （1）选择一个基准元素，将列表分隔成两个子序列；
    * （2）对列表重新排序，将所有小于基准值的元素放在基准值的前面，所有大于基准值的元素放在基准值的后面
    * （3）分别对较小元素的子序列和较大元素的子序列重复步骤1和2。
* 代码如下

```JavaScript
function qSort(list) {
  if (list.length == 0) {
    return [];
  }
  var lesser = [];
  var greater = [];
  var pivot = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i]<pivot) {
      lesser.push(list[i]);
    }else {
      greater.push(list[i]);
    }
  }
  return qSort(lesser).concat(pivot,qSort(greater));
}
```

## 08-08
### JavaScript算法-高级算法-动态规划
