// Setup
require('./start/setup.js');

/*
// Require server/channel
var server  = require('./lib/server.js');
var channel = require('./lib/channel.js');

// ----- Create fake data with some comments for now -----

var hypeirc = new server(); 
hypeirc.channels.push(new channel({userlist: ['lukevers', 'ansuz']}));
hypeirc.channels.push(new channel());
hypeirc.channels[1].userlist = ['inhies', 'ansuz'];

// Output to check that it's working
console.log(hypeirc.channels[0].width);
console.log(hypeirc.channels[0]._width());

// Since we initialized channels[0] with a userlist, it ran the _width()
// function and got the initial width. Since we pushed the userlist after
// we would have to call the _width() function. When we're listening for
// events and someone joins a channel we'll call the _width() function
// before re-rendering the screen so it renders properly.
console.log(hypeirc.channels[1].width);
console.log(hypeirc.channels[1]._width());

// When you call _width() it both returns the width and updates the width
// of the channel.
console.log(hypeirc.channels[1].width);*/

//require('./ui/window.js').render();
