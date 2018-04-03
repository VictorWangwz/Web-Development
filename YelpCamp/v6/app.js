var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var Campground=require("./models/campground");
var seedDB=require("./seeds");
var Comment=require("./models/comment");
var passport= require("passport");
var LocalStrategy=require("passport-local").Strategy;
var User=require("./models/user");

mongoose.connect("mongodb://localhost/yelpcamp");
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");

seedDB();
//passport configuration
app.use(require("express-session")({
    secret:"A secret",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req,res,next){
   res.locals.currentUser=req.user;
   next();
});

app.get("/",function(req,res){
    res.render("landing");
});
app.get("/campground",function(req,res){
  
    Campground.find({},function(err,campgrounds){
       if(!err){
        res.render("campgrounds/campground",{campgrounds:campgrounds});
       }
   })
   
});

app.get("/campground/new",function(req, res) {
  res.render("campgrounds/new"); 
});

app.post("/campground",function(req,res){
  
    var name=req.body.name;
    var img=req.body.img;
    var discription=req.body.discription;
    var newCampground={name:name,img:img,discription:discription};
    Campground.create(newCampground,function(err,newOne){
        if(!err){
            res.redirect("/campground");
        }
    });
    // res.render("campground",{campgrounds:campgrounds});
    
});

app.get("/campground/:id",function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(!err){
            res.render("campgrounds/show",{campground:foundCampground})
        }
    })
    //find the campground with provided id
  
})
//comments nested in camp
app.get("/campground/:id/comments/new",isLoggedIn,function(req, res) {
    Campground.findById(req.params.id,function(err,campground){
        if(!err)
        {
            res.render("comments/new",{campground:campground});
        }
    })
    
});
app.post("/campground/:id/comments",isLoggedIn,function(req,res){
   Campground.findById(req.params.id,function(err, campground) {
       if(!err){
           Comment.create(req.body.comment,function(err,comment){
               if(!err){
                   campground.comments.push(comment);
                   campground.save();
                   res.redirect("/campground/"+req.params.id);
               }
           });
       }
   }) ;
});

//Auth routes
//show the register
app.get("/register",function(req, res) {
    res.render("register");
});

//handle sign up logic
app.post("/register",function(req, res) {
   User.register(new User({username:req.body.username}),req.body.passport,function(err,user){
       if(err){
          console.log(err);
          return res.render("register");
       }else
       {
           passport.authenticate("local")(req,res,function(){
               res.redirect("/campground");
           })
       }
   }) ;
});
app.get("/login",function(req, res) {
    res.render("login");
});
app.post("/login",passport.authenticate("local",{
    successRedirect:"/campground",
    failureRedirect:"/login"
}),function(req, res) {
});


app.get("/logout",function(req, res) {
    res.logout();
    res.redirect("/campground");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}