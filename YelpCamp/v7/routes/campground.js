var express=require("express");
var router=express.Router();
var Campground=require("../models/campground");
var Comment=require("../models/comment");
router.get("/",function(req,res){
  
    Campground.find({},function(err,campgrounds){
       if(!err){
        res.render("campgrounds/campground",{campgrounds:campgrounds});
       }
   })
   
});
router.get("/new",function(req, res) {
  res.render("campgrounds/new"); 
});
router.post("/",function(req,res){
  
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

router.get("/:id",function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(!err){
            res.render("campgrounds/show",{campground:foundCampground})
        }
    })
    //find the campground with provided id
  
})
module.exports=router;