var blessed=require('blessed')
    ,screen=blessed.screen();

// the main object this module will export
var window={};

// expose the rendering function
window.render=function() { 
  screen.render(); 
};

// expose options so that plugins can modify them
// this also provides a shared variable space (window specific)
window.options={
  debug:true
};

// dimensions of the window
window.dim={
  w:screen.width
  ,h:screen.height
};

window.CHANLIST=blessed.form({
  parent:screen
  ,left:0
  ,top:0
  ,width:'shrink'
  ,height:'100%'
});

window.CHANLINE=blessed.line({
  parent:screen
  ,left: 0
  ,top: 0
  ,height: '100%'
  ,fg: 0
});

window.TOPIC=blessed.form({
  parent:screen
  ,left:0
  ,top:0
  ,width:window.dim.w
  ,height:1
  ,bg:0
  ,content:'utter :: channel topic'
});

window.INPUT=blessed.input({
  parent:screen
  ,left:0
  ,top:window.dim.h-1
  ,width:window.dim.w
  ,height:1
  ,content:'channel input'
});

window.CHANINFO=blessed.box({
  parent:screen
  ,left:0
  ,top:window.dim.h-2
  ,width:window.dim.w
  ,height:1
  ,content:'channel info'
  ,bg: 0
});

window.USERLIST=blessed.form({
  parent:screen
  ,right:0
  ,top:0
  ,width:'shrink'
  ,height:window.dim.h-2
});

window.USERSLINE=blessed.line({
  parent:screen
  ,right: 1
  ,top: 0
  ,height: '100%'
  ,fg: 0
});

var default_text = (function () {/*
         _    _              
        | |  | |             
  _   _ | |_ | |_  ___  _ __ 
 | | | || __|| __|/ _ \| '__|
 | |_| || |_ | |_|  __/| |   
  \__,_| \__| \__|\___||_|   


         .-"""-.
        /      o\
       |    o   0).-.
       |       .-;(_/     .-.
        \     /  /)).---._|  `\   ,
         '.  '  /((       `'-./ _/|
           \  .'  )        .-.;`  /
            '.             |  `\-'
              '._        -'    /
                 ``""--`------`

An awesome IRC/XMPP client written in nodejs.
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

window.BODY=blessed.form({
  parent:screen
  ,left:0
  ,top:1
  ,width:window.dim.w
  ,height:window.dim.h-3
  ,content:default_text
});

window.debug=function(){
  stats={
    windowHeight:window.dim.h
    ,windowWidth:window.dim.w

    ,inputTop:window.INPUT.top
    ,inputWidth:window.INPUT.width
    ,bodyHeight:window.BODY.height
    ,bodyWidth:window.BODY.width

    ,usersHeight:window.USERLIST.height
    ,usersWidth:window.USERLIST.width
    ,chansHeight:window.CHANLIST.height
    ,chansWidth:window.CHANLIST.width
  };
  window.BODY.content=Object.keys(stats).map(function(k){
    return k+" "+stats[k];
  }).join("\n");
};

window.onResize=function() {
  // get updated size
  window.dim.w = screen.width;
  window.dim.h = screen.height;

  window.INPUT.top = window.dim.h-1;
  window.CHANINFO.top = window.dim.h-2;
  window.TOPIC.width = window.dim.w;//-(c_width+u_width)-1;
  window.INPUT.width = window.dim.w;//-(c_width+u_width)-1;
  window.CHANINFO.width = window.dim.w;//-(c_width+u_width)-1;
  
  window.BODY.height = window.dim.h-3;
  window.BODY.width = window.dim.w;//-(c_width+u_width)-2;
  if(window.options.debug){
    window.debug();
  }
//  screen.render();
}

screen.on('resize', window.onResize);

// Hide at startup until there are users
window.USERLIST.hide();
window.USERSLINE.hide();

module.exports=window; 
