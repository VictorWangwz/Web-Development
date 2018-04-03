var express=require("express");
var router=express.Router({mergeParams:true});
var Campground=require("../models/campground");
var Comment=require("../models/comment");
//comments nested in camp
// router.get("/new",isLoggedIn,function(req, res) {
router.get("/new",function(req, res) {
    Campground.findById(req.params.id,function(err,campground){
        if(!err)
        {
            res.render("comments/new",{campground:campground});
        }
    })
    
});
router.post("/",isLoggedIn,function(req,res){
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
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
module.exports=router;