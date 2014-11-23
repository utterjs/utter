// -----
// Setup
// -----

require('./start/setup.js');
require('./start/plugins.js');

// -----
// Create UI
//
// TODO
//  - move all of this out of index.js into a ./start/
//    file and setup ui/input from there. It was just
//    in index.js here for easy testing purposes.
//
// -----

window  = require('./lib/ui/window.js');
strokes = require('./lib/input/strokes.js');


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

client.addListener('error', function(message) {
  console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

client.addListener('message',function(from,to,message){
  window.BODY.content += '\n[00:00:00] <'+from+'> ' + message;
  window.render();
});


window.render();
strokes.init({
  display: function() {
    window.INPUT.content = strokes.currentBufferText();
    window.render();
  }
  ,send: function(msg){
    window.BODY.content += "\n[00:00:00] <@username> "+msg;
    client.say('#utter', msg);
  }
});
