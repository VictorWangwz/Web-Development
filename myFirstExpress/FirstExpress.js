var express=require("express");
var app=express();//store all methods

app.get("/",function(req, res){
    res.send("Hi there!");
});
app.get("/bye",function(req, res){
    res.send("bye!");
});
app.get("/r/:subName",function(req, res) {
    var subname=req.params.subName;
    res.send("subName is "+subname);
})
app.get("*",function(req, res) {
    res.send("you are sending a star");
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});