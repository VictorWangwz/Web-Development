var express = require("express");
var router  = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");

//Comments New
router.get("/new", isLoggedIn, function(req, res){
    // find campground by id
    console.log(req.params.id);
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {campground: campground});
        }
    })
});

//Comments Create
router.post("/",isLoggedIn,function(req, res){
   //lookup campground using ID
   Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               //add username and id to comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               //save comment
               console.log("comment is"+comment);
               comment.save();
               console.log(campground.comments);
               campground.comments.push(comment);
              console.log(campground.comments);
               campground.save(function(err){console.log(err)});
               
               res.redirect('/campgrounds/' + campground._id);
           }
        });
       }
   });
});
router.get("/:comment_id/edit",checkOwnership,function(req,res){
    Comment.findById(req.params.comment_id,function(err,foundComment){
       if(!err){
            res.render("comments/edit",{campground_id:req.params.id,comment:foundComment});
       } 
    })
       
    
});

router.put("/:comment_id",checkOwnership,function(req,res){
    Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,updatedComment){
        if(!err){
            res.redirect("/campgrounds/"+req.params.id);
        }
    });
});

router.delete("/:comment_id",checkOwnership,function(req,res){
      Comment.findByIdAndRemove(req.params.comment_id,function(err){
        if(!err){
            res.redirect("/campgrounds/"+req.params.id);
        }
    })
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

function checkOwnership(req,res,next){
     if(req.isAuthenticated()){
        
        Comment.findById(req.params.comment_id,function(err,foundComment){
        if(!err){
            // foundCampground.author.id is a object, req.user._id is a string
            if(foundComment.author.id.equals(req.user._id)){
                next();
            }else{
                res.redirect("back");
            }
        }
    });
    }else{
        res.redirect("back");
        
    }
};


module.exports = router;