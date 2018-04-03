var express=require("express");
var app=express();
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
    // res.send("<h1>adfa</h1>");
});
app.get("/fall/:thing",function(req,res){
    var thing=req.params.thing;
    res.render("love",{thingVar:thing});
});

app.get("/posts",function(req,res){
    var posts=[
        {title:"1",author:"one"},{
            title:"2",author:"two"
        }];
    res.render("posts",{posts:posts});
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});