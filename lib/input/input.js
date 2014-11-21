var keypress = require('keypress');
var strokes={};

// make `process.stdin` begin emitting "keypress" events
strokes.init=function(){
  keypress(process.stdin);

  process.stdin.setRawMode(true);
  process.stdin.resume();
};

strokes.buffer=[];

strokes.display=function(){
  console.log(strokes.buffer.join(""));
};

strokes.onReturn=function(){
  var text=strokes.buffer.join("");
  console.log(text);
  strokes.buffer=[];
};

strokes.listen=function(){
  process.stdin.on('keypress', function (ch, key) {
  //  console.log(key||ch);
    switch(key&&key.name){
      case 'return':
        strokes.onReturn();
        break;
      case 'backspace':
        strokes.buffer.pop();
        break;
      case 'escape':
        process.exit(0);
        break;
      default:
        strokes.buffer.push(key&&key.sequence||ch);
        break;
    }
    strokes.display();
  });
};

strokes.listen();

module.exports=strokes;
