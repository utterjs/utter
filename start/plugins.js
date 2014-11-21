var fs = require('fs');

// -----
// Before we can load all the plugins the user has we need
// to make sure the folder structure is there. If it is
// not, then we create the folder structure.
// -----

if (!fs.existsSync(UTTER_DIR+'/plugins'))
  fs.mkdir(UTTER_DIR+'/plugins', function(err) {
    if (err) throw err;
  });

// -----
// We also want to check to see if there is a default
// folder. These are the plugins that get loaded at
// the start. Everything in ./plugins can be loaded
// dynamically, but everything in ./plugins/default
// will be loaded at the start.
// -----

if (!fs.existsSync(UTTER_DIR+'/plugins/default'))
  fs.mkdir(UTTER_DIR+'/plugins/default', function(err) {
    if (err) throw err;
  });

// -----
// Now we load all the plugins in UTTER_DIR/plugins/default
// -----

// TODO
