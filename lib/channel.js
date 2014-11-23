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

  // "modes" is an object TBD
  this.modes = c.modes || {};

  // "info" is an object TBD
  this.info = c.info || {};

  // "width" is an integer that contains the width of the
  // longest channel (in characters) so we don't have to
  // call the width() function every time we re-render.
  this.width = c.width || 0;

  // channel history
  this.history = [];
}

module.exports=channel;
