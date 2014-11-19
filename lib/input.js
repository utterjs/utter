var keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

var buffer=[];

process.stdin.on('keypress', function (ch, key) {
//  console.log(key||ch);
  switch(key&&key.name){
    case 'backspace':
      buffer.pop();
      break;
    case 'escape':
      process.exit(0);
      break;
    default:
      buffer.push(key&&key.sequence||ch);
      break;
  }
  console.log(buffer.join(""));
});

process.stdin.setRawMode(true);
process.stdin.resume();
