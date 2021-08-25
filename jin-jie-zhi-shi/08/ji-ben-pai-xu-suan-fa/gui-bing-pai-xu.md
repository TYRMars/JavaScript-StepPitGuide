# 归并排序

![](http://www.2cto.com/uploadfile/Collfiles/20160918/20160918092144591.gif)

* 归并排序
* 归并排序是建立在归并操作上的一种有效的排序算法。该算法是分治法的一个非常典型的应用。归并排是一种稳定的排序方法。将已有序列的子序列合并
* .把长度为n的输入序列分成两个长度为n/2的子序列；
* .对这两个子序列分别采用归并排序；
* .将两个排序好的子序列合并成一个最终的排序序列。

```javascript
function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len <2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
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

