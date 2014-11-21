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

// a default channel
strokes.currentChannel={input:[]};

strokes.changeChannel=function(channelObj){
  // pass an object by reference
  // call this function on channelChange events
  strokes.currentChannel=channelObj;
};

strokes.currentBufferText=function(){
  return strokes.currentChannel.input.join("");
};

// after loading this file, replace this method with something else
// you should follow the convention of using this to update your input field
// for sending, use strokes.send();
strokes.display=function(){
  console.log(strokes.currentBufferText());
};

strokes.send=function(msg){
  console.log(msg);
};

strokes.onReturn=function(){
  var text=strokes.currentBufferText();
  strokes.send(text);
  strokes.currentChannel.input=[];
};

strokes.onBackspace=function(){
  strokes.currentChannel.input.pop();  
};

strokes.pushInput=function(ch){
  strokes.currentChannel.input.push(ch);
};

strokes.listen=function(){
  process.stdin.on('keypress', function (ch, key) {
    switch(key&&key.name){
      case 'return':
        strokes.onReturn();
        break;
      case 'backspace':
        strokes.onBackspace();
        break;
      case 'escape':
        process.exit(0);
        break;
      default:
        strokes.pushInput(key&&key.sequence||ch);
        break;
  }
    strokes.display();
  });
};

strokes.listen();

module.exports=strokes;
