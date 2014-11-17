var channel = function(c) {
  // Check if "c" is undefined or not. If it is then we
  // set it to an empty object so it doesn't cause any
  // problems.
  c = c || {};

  // "input" is a string containing the text buffer that
  // the user is writing in. Each channel object has its
  // own so when you switch channels you do not lose the
  // text you were writing.
  this.input = c.input || '';

  // "topic" is the topic for the the channel.
  this.topic = c.topic || '';

  // "userlist" is an array that contains a list of the
  // users that are in the channel.
  this.userlist = c.userlist || [];

  // "server" is an object reference to the parent that
  // contains this child. Used for faster access to the
  // server object.
  this.server = c.server || {};

  // "modes" is an object
  this.modes = c.modes || {};

  // "info" is an object
  this.info = c.info || {};
}

// The function "width" figures out the width of the
// length of the longest username in the users list.
// This is needed when rendering our screen to make
// sure the width of the channel list is correct.
channel.prototype.width = function() {
  return this.userlist.length > 0 ? this.userlist.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  }).length : 0;
}

module.exports=channel;
