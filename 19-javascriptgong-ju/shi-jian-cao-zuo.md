# 时间操作相关

### 时间内整天数据筛选

```

```

### 获取时间内整天

```ts
/**
 * getXAxis（）方法作用：获取开始日期和结束日期之间（包含开始日期和结束日期）的日期数组，可作为时间轴坐标等
 * @param  filters: {tab:0/1/2, startTime:开始日期, endTime:结束日期}
 * 说明： tab：取值0或1或2，分别表示日、月、年，对应的startTime和endTime的格式分别为'yyyy-MM-dd'、'yyyy-MM'、'yyyy'
 */
export function getXAxis(startTime: number, endTime: number): any {
  const length = (endTime - startTime) / (1000 * 24 * 60 * 60) + 1;
  const start = moment(startTime);
  const xAxis = new Array(length);
  for (let i = 0; i < length; i++) {
    start.set('date', start.get('date') + 1);
    xAxis[i] = moment(startTime).format('YYYY-MM-DD');
  }

  return xAxis;
}
```



