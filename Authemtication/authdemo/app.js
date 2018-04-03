



var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var passport=require("passport");
var localStrategy=require("passport-local");
var passportLocalMongoose=require("passport-local-mongoose");
var User=require("./models/user")

mongoose.connect("mongodb://localhost/authdemo");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");

app.use(require("express-session")({
    secret:"rusty",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
  
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/",function(req, res){
    res.render("home");
});
app.get("/secret",isLoggedIn,function(req,res){
    res.render("secret");
});
//Auth routes
app.get("/register",function(req, res) {
    res.render("register");
});
//register
app.post("/register",function(req,res){
    User.register(new User({username:req.body.username}),req.body.passport,function(err,user){
        if(!err){
            passport.authenticate("local")(req,res,function(){
              res.redirect("/secret"); 
            });
        }else{
            console.log(err);
            res.redirect("/");
        }
    });
});

//login 
app.get("/login",function(req, res) {
  res.render("login"); 
});
//login logic
//middelware
app.post("/login",passport.authenticate("local",{
    successRedirect:"/secret",
    failureRedirect:"/"
}),function(req,res){
    console.log(req.body);
});

//log out
app.get("/logout",function(req, res) {
    req.logout();
    res.redirect("/");
});
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});