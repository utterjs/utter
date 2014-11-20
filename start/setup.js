var cjdson = require('cjdson');
var fs     = require('fs');

// -----
// Blurt Directory
// -----

var  HOME_DIR = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var BLURT_DIR = HOME_DIR + '/.blurt';

// -----
// Check to see if directory exists, and if it
// doesn't exist then we need to create it.
// -----

if (!fs.existsSync(BLURT_DIR))
  fs.mkdir(BLURT_DIR, function(err) {
    if (err) throw err; 
  });

// -----
// Check to see if our main configuration file exists,
// and if it doesn't exist then we need to create it.
// -----

if (!fs.existsSync(BLURT_DIR+'/blurt.json'))
  fs.writeFile(BLURT_DIR+'/blurt.json', '{}', function(err) {
    if (err) throw err;
  });

// -----
// Now we're going to load our configuration file and
// start creating our objects.
// -----

var config = fs.readFileSync(BLURT_DIR+'/blurt.json', 'UTF-8');

// ----
// Now we're going to parse our config file using cjdson
// becuase we support C-style comments in our config
// files.
// ----

config = cjdson.toJSON(config);
