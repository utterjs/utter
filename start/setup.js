var cjdson = require('cjdson');
var fs     = require('fs');

// -----
// Utter Directory
// -----

var  HOME_DIR = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var UTTER_DIR = HOME_DIR + '/.utter';

// -----
// Check to see if directory exists, and if it
// doesn't exist then we need to create it.
// -----

if (!fs.existsSync(UTTER_DIR))
  fs.mkdir(UTTER_DIR, function(err) {
    if (err) throw err; 
  });

// -----
// Check to see if our main configuration file exists,
// and if it doesn't exist then we need to create it.
// -----

if (!fs.existsSync(UTTER_DIR+'/utter.json'))
  fs.writeFileSync(UTTER_DIR+'/utter.json', '{}');

// -----
// Now we're going to load our configuration file and
// start creating our objects.
// -----

config = fs.readFileSync(UTTER_DIR+'/utter.json', 'UTF-8');

// -----
// Now we're going to parse our config file using cjdson
// becuase we support C-style comments in our config
// files.
// -----

config = cjdson.toJSON(config);

// -----
// Before we run the users custom start-up script we need
// to check to see if they have the scripts directory. If
// they don't then we're going to create it for them.
// -----

if (!fs.existsSync(UTTER_DIR+'/scripts'))
  fs.mkdir(UTTER_DIR+'/scripts', function(err) {
    if (err) throw err;
  });

// -----
// If there is no script at UTTER_DIR/scripts/start.js
// then we're going to create one so if they see it
// they can populate it with whatever they'd like.
// -----

if (!fs.existsSync(UTTER_DIR+'/scripts/start.js'))
  fs.writeFile(UTTER_DIR+'/scripts/start.js',
    fs.readFileSync('./start/custom/start.js', 'UTF-8'));

// -----
// Lastly we're going to run the users custom startup
// script. The custom startup script is to be kept at
// UTTER_DIR/scripts/start.js
// -----

require(UTTER_DIR+'/scripts/start.js');
