var express=require("express");
var app=express();//store all methods
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var friends=["1","2","3"];

app.get("/",function(req, res){
  
    res.render("home");
});

app.get("/friends",function(req,res){
    res.render("friends",{friends:friends});
})

app.post("/addfriends",function(req,res){
    var newFriend=req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
    
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});