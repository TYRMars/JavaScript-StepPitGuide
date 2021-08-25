# async+await异步调用

最早的的使用异步操作的时候，我们一般会用setTimeout，会出现回掉地狱的情况

```javascript
setTimeout(()=>{
  setTimeout(()=>{
    setTimeout(()=>{
      console.log('1')
    },1000)
  },1000)
},1000)
```

ES6中Promise

```javascript
//promise
()=>{
  axios.post('/user/readmsg',{from})
  .then(res=>{
    const userid = getState().user._id
    if( res.status === 200 && res.data.code === 0){
      dispatch(msgRead({userid,from,num:res.data.num}))
    }
  })
}
```

ES7 async+await

```javascript
async ()=>{
  const res = await axios.post('/user/readmsg',{from})
  const userid = getState().user._id
  if( res.status === 200 && res.data.code === 0){
    dispatch(msgRead({userid,from,num:res.data.num}))
  }
}
```

