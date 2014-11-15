var server={};

var Server=function(){
  return {
    nickname:""
    ,realname:""
    ,channels:[]
    ,host:""
    ,port:6667
    ,ssl:false
    ,password:""
  };
};

module.exports=server;
