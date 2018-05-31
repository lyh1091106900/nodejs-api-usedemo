/*
fs.rename(oldPath, newPath, [callback(err)])
由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）

方法说明：

修改文件名称，可更改文件的存放路径。

接收参数：

oldPath                原路径

newPath              新路径

callback               回调，传递一个err异常参数
*/
//修改当前文件夹下fsTeat1.txt 成 fsTeat2.js，文件内容不发生变化
var fs = require('fs');
var path = require('path');
var ph ='';
fs.renameSync(path.resolve(ph, 'fsTeat1.txt'), path.resolve(ph, 'fsTeat2.js'));
// fs.renameSync(path.resolve(ph, 'web-server/app.js.https'), path.resolve(ph, 'web-server/app.js'));
// fs.renameSync(path.resolve(ph, 'web-server/public/js/lib/build/build.js.wss'), path.resolve(ph, 'web-server/public/js/lib/build/build.js'));
console.log(ph);

