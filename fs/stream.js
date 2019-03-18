/**
 * 流的一些用法
 */

var fs = require('fs');
const mkdir = require('./createFileTool.js');
const {Duplex} = require('stream')//双工流
//创建可读流
var rs =fs.createReadStream(__dirname+'/file.txt',{
    highWaterMark:1,//水位线
    autoClose:true});
rs.setEncoding('UTF-8');

rs.on('open',function(){
    console.log('file is open');
});

rs.on('data',function(data){
    console.log('data '+data);
})

rs.on('error',function(err){
    console.log('error '+err );
});

rs.on('end',function(){
    console.log('end');
});
rs.on('close',function(){
    console.log('close');
});


var ws = fs.createWriteStream(__dirname+'/writeFile.txt');

let result = rs.pipe(ws);//管道
console.log('result '+result)


class D extends Duplex{
    _read(){//自定义

    }
    _write(chunk,encoding,callback){
        console.log('myDuplex:'+chunk)
         callback();
    }
}
var getDuplex = function(){
    return new D();
}
//创建双工流
let myDuplex = getDuplex();

myDuplex.on('data',function(data){
    console.log(data);
})

myDuplex.push("djks");
myDuplex.write('sdjk');
