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
    parse(msg);
  }
});

// -----
// Render the initial window
// -----

window.render();

// -----
// Parse
// -----

var parse = function(input) {
  // Check to see if it's a command or not.
  if (input.substring(0, 1) == '/') {
    parseCommand(input.substring(1).trim().split(' '));
  } else {
    // Parse text instead!
  }
};

var parseCommand = function(args) {
  switch(args[0]) {
    case 'quit':
      process.exit(0);
      break;
    default:
      // Not sure what to do here yet
      break;
  }
};
