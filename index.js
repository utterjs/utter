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

window.render();
strokes.init({
  display: function() {
    window.INPUT.content = strokes.currentBufferText();
    window.render();
  }
  ,send: function(msg){
    window.BODY.content += "\n[00:00:00] <@username> "+msg;
  }
});
