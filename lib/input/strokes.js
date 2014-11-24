var strokes={};

// might as well expose keypress while we're at it
strokes.keypress=keypress=require('keypress');

strokes.init=function(opt){
  // make opt if it wasn't passed, to avoid variable access errors
  opt=opt||{};

  // start by setting some values

  // the display method has a default, if you don't provide it
  strokes.display=opt.display||function(){
    console.log(strokes.currentBufferText());
  };

  // send also has a default
  strokes.send=opt.send||function(msg){
    console.log(msg);
  };

  // If you want a default channel, instantiate it elsewhere
  // so that you can switch back to it later
  // this one will get garbage collected when you switch away
  strokes.currentChannel=opt.currentChannel||{input:[]};

  /* You don't have to init with this
    keypress is exposed above
    you could bind it to something other than stdin if you wanted
    remember how we said utter was reconfigurable?
    */

// make `process.stdin` begin emitting "keypress" events
  keypress(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.resume();
  strokes.listen(); // listen here
};

strokes.changeChannel=function(channelObj){
  // pass an object by reference
  // call this function on channelChange events
  strokes.currentChannel=channelObj;
};

strokes.currentBufferText=function(){
  return strokes.currentChannel.input.join("");
};

strokes.core={};

strokes.setPrefix=function(){};

strokes.core.parseCommand=function(text){
  if(text.match(/^\//)){
    
  }
};

// after loading this file, replace this method with something else
// you should follow the convention of using this to update your input field
// for sending, use strokes.send();
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

module.exports=strokes;
