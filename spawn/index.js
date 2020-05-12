var cp = require('child_process');
var command = "node";
var options=[__dirname+"\\spawn.js"]

var child = cp.spawn(command, options);
child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  
  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });