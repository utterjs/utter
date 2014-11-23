// -----
// Load our window and keystrokes
// -----

window  = require('../lib/ui/window.js');
strokes = require('../lib/input/strokes.js');

// -----
// Initialize our keystrokes and add our basic
// functionality.
// -----

strokes.init({
  display: function() {
    window.INPUT.content = strokes.currentBufferText();
    window.render();
  }
  ,send: function(msg){
    window.BODY.content += "\n[00:00:00] <@username> "+msg;
  }
});

// -----
// Render the initial window
// -----

window.render();
