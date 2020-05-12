const stream = require('stream');

class ParallelStream extends stream.Transform {
  constructor(userTransform) {
    super({objectMode: true});
    this.userTransform = userTransform;
    this.running = 0;
    this.terminateCallback = null;
  }

  _transform(chunk, enc, done) {
    this.running++;
    console.log("_transform",this.running)
    this.userTransform(chunk, enc, this._onComplete.bind(this), this.push.bind(this));
    done();
   
  }

  _flush(done) {
    console.log("_flush",this.running)
    if(this.running > 0) {
      this.terminateCallback = done;
    } else {
      done();
    }
  }

  _onComplete(err) {
    this.running--;
    console.log("_onComplete",this.running)
    if(err) {
      return this.emit('error', err);
    }
    if(this.running === 0) {
      this.terminateCallback && this.terminateCallback();
    }
  }
}

module.exports = ParallelStream;

