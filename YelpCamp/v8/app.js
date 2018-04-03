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

var commentRoutes=require("./routes/comments"),
campgroundRoutes=require("./routes/campground"),
indexRoutes=require("./routes/index");
mongoose.connect("mongodb://localhost/yelpcamp");
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");
//seed the database:
// seedDB();
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

app.use(indexRoutes);
app.use("/campground",campgroundRoutes);
app.use("/campground/:id/comments",commentRoutes);



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});
