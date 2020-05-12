const stream = require('stream');
const fs = require('fs');
const path = require('path');


class ToFileStream extends stream.Writable {
  constructor() {
    super({
      objectMode: true
    });
  }

  _write(chunk, encoding, callback) {
    //该方法是默认一次能消费一次write的数据 如果数据过长或者网络问题导致一次write调用该方法两次会有bug
     console.log(chunk.path);
      fs.writeFile(chunk.path, chunk.content, callback);
    
  }
}
module.exports = ToFileStream;


/* out 
file1.txt
1
2
3
file2.txt
file3.txt
All files created
*/
