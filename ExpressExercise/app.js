var express=require("express");
var app=express();

app.get("/",function(req,res){
    res.send("/");
});
app.get("/speak/:name",function(req,res){
    var name=req.params.name;
    res.send("name is "+name);
});

app.get("/repeat/:words/:number",function(req, res) {
   var word=req.params.words;
   var number=req.params.number;
   var result="";
   for(var i=0;i<number;i++){
       result+=" "+word;
   }
  res.send(result);
});
app.get("*",function(req, res) {
    res.send("wrong");
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});