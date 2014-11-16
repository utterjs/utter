// Require server/channel
var server  = require('./lib/server.js');
var channel = require('./lib/channel.js');

// Create fake data for now
var hypeirc = new server(); 
hypeirc.channels.push(new channel());
hypeirc.channels.push(new channel());
hypeirc.channels[0].userlist = ['lukevers', 'ansuz'];
hypeirc.channels[1].userlist = ['inhies', 'ansuz'];

// Output to check that it's working
console.log(hypeirc.channels);

//require('./ui/window.js').render();
