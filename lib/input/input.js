var keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

var buffer=[];

var display=function(){
  console.log(buffer.join(""));
};

var onReturn=function(){
  buffer=[];  
};

process.stdin.on('keypress', function (ch, key) {
//  console.log(key||ch);
  switch(key&&key.name){
    case 'return':
      onReturn();
      break;
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
  display();
});

process.stdin.setRawMode(true);
process.stdin.resume();
