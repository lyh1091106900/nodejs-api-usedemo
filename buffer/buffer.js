/*
const buf = Buffer.from([ 0xf0 ,0x00, 0x00,0x04,0x04,0x04,0x04,0x04 ]);
console.log(buf);
console.log(buf.readInt32BE(),buf.readInt32LE())
*/

const header =  Buffer.allocUnsafe(10);
//header[0] = 0;
header.writeInt32LE(1000); //32Le 小端序  xx xx 00 00  值顺序是从右到左的
header.writeInt32BE(1000,4); //32Be 大端序  00 00 xx xx 值顺序是从左到右的
console.log(header)