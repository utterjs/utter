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
  ,bg:0
  ,content:chans.join('\n')
});

var topic=blessed.form({
  parent:screen
  ,keys:true
  ,left:c_width
  ,top:0
  ,width:510 // maximum irc topic length (actually 512, but 2 are line feed)
  ,height:1
  ,bg:0
  ,content:'blurt is an awesome irc client written in nodejs'
});

var input=blessed.form({
  parent:screen
  ,keys:true
  ,left:c_width
  ,top:chat.h-1
  ,width:510
  ,height:1
  ,bg:0
  ,content:'this is where you would type'
}); 

var users=blessed.form({
  parent:screen
  ,keys:true
  ,right:0
  ,top:1
  ,width:'shrink'
  ,height:chat.h-2
  ,bg:0
  ,content:users.join('\n')
});

var body=blessed.form({
  parent:screen
  ,keys:true
  ,left:c_width
  ,top:1
  ,width:chat.w-(c_width+u_width)
  ,height:chat.h-2
  ,content:'pewpewpewpew\npewpewpew'
});
  
screen.key('q',function(){
  process.exit(0);
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

  body.height = chat.h-2;
  body.width = chat.w-(c_width+u_width);
  if(options.debug){
    debug();
  }
  screen.render();
});

screen.render();
