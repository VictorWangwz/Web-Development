var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var Campground=require("./models/campground");
var seedDB=require("./seeds");
var Comment=require("./models/comment");

mongoose.connect("mongodb://localhost/yelpcamp");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");

seedDB();

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
app.get("/campground/:id/comments/new",function(req, res) {
    Campground.findById(req.params.id,function(err,campground){
        if(!err)
        {
            res.render("comments/new",{campground:campground});
        }
    })
    
});
app.post("/campground/:id/comments",function(req,res){
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

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});