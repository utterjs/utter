var cjdson = require('cjdson');
var fs     = require('fs');

// -----
// Blurt Directory
// -----
var  HOME_DIR = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var BLURT_DIR = HOME_DIR + '/.blurt';

// Check to see if directory exists
if (!fs.existsSync(BLURT_DIR)) {
	// If it doesn't exist, we need to create it.
	fs.mkdirSync(BLURT_DIR, function(err) {
		if (err) throw err;
	});
}
