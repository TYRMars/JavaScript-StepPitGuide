### JavaScript算法测试函数

* SetData\(\)函数生成了存储在数组中的随机数字。Math类的random\(\)函数会生成\[0,1\)区间内的随机数字。换句话说，random\(\)函数生成的随机数字大于等于0，但不会等于1。最后在用Math类的floor\(\)函数确定最终结果。
* 如下这个公式可以成功生成1~100的随机数字集合。

```
function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (var i = 0; i 
<
 numElements; ++i) {
    this.dataStore[i] = i;
  }
}
//数据输出
function setData() {
  for (var i = 0; i 
<
 this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));//生成随机数组
  }
}

function clear() {
  for (var i = 0; i 
<
 this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var restr = "";
  for (var i = 0; i 
<
 this.dataStore.length; ++i) {
    restr += this.dataStore[i] + " ";
    if (i 
>
 0 
&
 i % 10 == 0) {
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

#### 名词解释：

* n: 数据规模
* k:“桶”的个数
* In-place: 占用常数内存，不占用额外内存
* Out-place: 占用额外内存
* 稳定性：排序后2个相等键值的顺序和排序之前它们的顺序相同

##### 用一个`for`遍历数组排序

```
var a = [12,13,65,54,86,21,37,1,95,4];
var l = a.length;
console.log(a);
for (var i = 0; i 
<
 l; i++) {
  if (a[i] 
>
 a[i + 1]) {
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





