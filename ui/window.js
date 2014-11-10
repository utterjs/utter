var blessed=require('blessed')
    ,screen=blessed.screen();

var options={
  debug:true
};

var chat={
  w:screen.width
  ,h:screen.height
};

var users=[
  '@ansuz',
  '@lukevers',
  'inhies'
];
var u_width = users.reduce(function (a, b) { return a.length > b.length ? a : b; }).length;

var chans=[
  '#blurtjs',
  '#nodejs',
  '#lukevers',
  '#webdev'
].map(function(c, v) { return ++v + '.' + c });
var c_width = chans.reduce(function(a, b) { return a.length > b.length ? a : b; }).length;

var chanlist=blessed.form({
  parent:screen
  ,keys:true
  ,left:0
  ,top:0
  ,width:'shrink'
  ,height:1000
  ,content:chans.join('\n')
});

var chanline=blessed.line({
  parent:screen
  ,left: c_width-1
  ,top: 0
  ,height: '100%'
  ,fg: 0
});

var topic=blessed.form({
  parent:screen
  ,keys:true
  ,left:c_width
  ,top:0
  ,width:chat.w-(c_width+u_width)
  ,height:1
  ,bg:0
  ,content:'blurt is an awesome irc client written in nodejs'
});

var input=blessed.input({
  parent:screen
  ,keys:true
  ,left:c_width
  ,top:chat.h-1
  ,width:chat.w-(c_width+u_width)
  ,height:1
  ,content:'type and see the input work!'
});

var chaninfo=blessed.box({
  parent:screen
  ,keys:true
  ,left:c_width
  ,top:chat.h-2
  ,width:chat.w-(c_width+u_width)
  ,height:1
  ,content:'channel info'
  ,bg: 0
});

var users=blessed.form({
  parent:screen
  ,keys:true
  ,right:0
  ,top:0
  ,width:'shrink'
  ,height:chat.h-2
  ,content:users.join('\n')
});

var usersline=blessed.line({
  parent:screen
  ,right: u_width
  ,top: 0
  ,height: '100%'
  ,fg: 0
});

var body=blessed.form({
  parent:screen
  ,keys:true
  ,left:c_width
  ,top:1
  ,width:chat.w-(c_width+u_width)-1
  ,height:chat.h-3
  ,content:'pewpewpewpew\npewpewpew'
});
  
screen.key('escape',function(){
  process.exit(0);
});

screen.on('keypress',function(ch, key) {
  switch(key.name) {
    case 'backspace':
      input.content = input.content.substring(0, input.content.length-1);
      break;
    case 'enter':
      // parse input.content
      break;
    default:
      input.content += ch;
      break;
  }

  // Render
  screen.render();
});

var debug=function(){
  stats={

    windowHeight:chat.h
    ,windowWidth:chat.w

    ,inputTop:input.top
    ,inputWidth:input.width
    ,bodyHeight:body.height
    ,bodyWidth:body.width

    ,usersHeight:users.height
    ,usersWidth:users.width
    ,chansHeight:chanlist.height
    ,chansWidth:chanlist.width
  };
  body.content=Object.keys(stats).map(function(k){
    return k+" "+stats[k];
  }).join("\n");
};

screen.on('resize', function() {
  // get updated size
  chat.w = screen.width;
  chat.h = screen.height;

  input.top = chat.h-1;
  topic.width = chat.w-(c_width+u_width)
  input.width = chat.w-(c_width+u_width)
  
  body.height = chat.h-2;
  body.width = chat.w-(c_width+u_width)-1;
  if(options.debug){
    debug();
  }
  screen.render();
});

screen.render();
