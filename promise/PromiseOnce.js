 var events=require('events');
// var util=require('util');
//   var Promise = function() {
//     events.EventEmitter.call(this);
// }
// util.inherits(Promise, events.EventEmitter);
// var e = new events.EventEmitter()
//   var a = new Promise(resolve => {
//       console.log(11111)
//       e.once(`tranform_11`, resolve);
//       console.log(11)
//   })
//   a.then(function(data) {
//     console.log(data)
//   })
 
//   setTimeout(function() { 

//     e.emit('tranform_11',222); 
//   }, 1000);



  const Readable = require('stream').Readable
  class MyReadable extends Readable{
      constructor(dataSource, options){
          super(options)
          this.dataSource = dataSource
      }
      //_read表示需要从MyReadable类内部调用该方法
      
      _read(){
          console.log("read");
          const data = this.dataSource.makeData()
          this.push(data)
      }
  }
  //模拟资源池
  const dataSource = {
      data: new Array('abcdefghijklmnopqrstuvwxyz'),
      makeData: function(){
          if(!this.data.length) return null
          return this.data.pop()
  
      }
  }
  
  const myReadable = new MyReadable(dataSource);
  myReadable.setEncoding('utf8');
  // myReadable.on('data', (chunk) => {
  //   console.log(chunk);
  // });