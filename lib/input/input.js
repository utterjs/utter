var strokes={};

// might as well expose keypress while we're at it
strokes.keypress=keypress=require('keypress');

strokes.init=function(){
  /* You don't have to init with this
    keypress is exposed above
    you could bind it to something other than stdin if you wanted
    */

// make `process.stdin` begin emitting "keypress" events
  keypress(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.resume();
};

// 
strokes.buffer=[];


// after loading this file, replace this method with something else
// you should follow the convention of using this to update your input field
// for sending, use strokes.send();
strokes.display=function(){
  console.log(strokes.buffer.join(""));
};

strokes.send=function(msg){
  console.log(msg);
};

strokes.onReturn=function(){
  var text=strokes.buffer.join("");
  strokes.send(text);
  strokes.buffer=[];
};

strokes.listen=function(){
  process.stdin.on('keypress', function (ch, key) {
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
