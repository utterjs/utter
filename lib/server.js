var server = function(s) {
  // Check if "s" is undefined or not. If it is then we
  // set it to an empty object so it doesn't cause any
  // problems.
  s = s || {};

  // "nickname" is a string containing the nickname that 
  // is being used for this server.
  this.nickname = s.nickname || '';

  // "realname" is a string containing the realname that
  // is being used for this server.
  this.realname = s.realname || '';

  // "host" is a string containing the domain/ip address
  // that this object uses to connect to the server.
  this.host = s.host || '';

  // "port" is an integer containing the port that this
  // object uses to connect to the server.
  this.port = s.port || 6667;

  // "ssl" is a boolean that contains the information
  // regarding if we should connect to the server via
  // SSL or not.
  this.ssl = s.ssl || false;

  // "password" is a string containing the password that
  // is used to connect to the server. A lot of the time
  // this is empty.
  this.password = s.password || '';

  // "channels" is an array of Channel objects that holds
  // what channels we are currently in.
  this.channels = s.channels || [];
}

module.exports=server;
