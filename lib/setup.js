var setup={};

setup.cjdson2json=cjdson2json=function(cjdO){
  return JSON.parse(cjdO
  .split("\n")
  .map(function(line){
    return line.replace(/\/\/.*$/g,"");
  })
  .join("")
  .replace(/\/\*([\s\S]*?)\*\//g,"") // split multiline comments
  );
};

module.exports=setup;
