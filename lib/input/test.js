var keypress = require('keypress');
var strokes={};
var irc=require("irc");

var con={
  nick:"utterbot"
  ,server:"irc.hypeirc.net"
  ,channels:["#utter"]
};

con.nect=function(){
  return new irc.Client(con.server,con.nick,{channels:con.channels});
};

var client=con.nect();

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

strokes.buffer=[];

strokes.display=display=function(){
  console.log(strokes.buffer.join(""));
};

strokes.core={};

strokes.core.onReturn=function(){
  strokes.buffer=[];
};

strokes.onReturn=onReturn=function(){
  var text=strokes.buffer.join("");
  console.log(text);
  if(text[0]==="/"){
    console.log("pew");
    client.send('MODE', '#utter', '+o', text.split(" ")[2]);
  }else{
    client.say("#utter",strokes.buffer.join(""));
  }
  strokes.buffer=[];
  //  strokes.core.onReturn();
};

strokes.listen=function(){
  process.stdin.on('keypress', function (ch, key) {
  //  console.log(key||ch);
    switch(key&&key.name){
      case 'return':
        onReturn();
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
    display();
  });
};

var greetings=new RegExp(
  "("+['ohai','hello','hey','hi'].join(" |")+" )"
  ,"i"
);

client.addListener('error', function(message) {
  console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

client.addListener('message',function(from,to,message){
  console.log('<%s> %s: %s',to,from,message);
  if(to.match(/^[#&]/)){
    if(message.match(greetings)){
      console.log(to);
      client.say(to,'Hello there '+from);
    }
  }
});

strokes.listen();

process.stdin.setRawMode(true);
process.stdin.resume();

module.exports=strokes;
