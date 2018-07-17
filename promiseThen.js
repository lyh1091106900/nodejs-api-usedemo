/*
then 采用链式的then，可以指定一组按照次序调用的回调函数。
这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），
这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。
第一个then返回pomise对象，第二个then接收的参数是promise对象resolve的形参

输出 
{ Promise1: 'Promise1' }
{ Promise2: 'Promise2' }

*/
let promise1 = new Promise(function(resolve, reject) {
    var pro={'Promise1':'Promise1'}
    resolve(pro);
  });

  let promise2 = new Promise(function(resolve, reject) {
    var pro={'Promise2':'Promise2'}
    resolve(pro);
  });
 let v= promise1.then((value)=>{
     console.log(value)
      return promise2
  }).then((value)=>{
      console.log(value)
  })
  
  
