var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var methodOverride=require("method-override");
var expressSanitizer=require("express-sanitizer");

mongoose.connect("mongodb://localhost/REST");
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(methodOverride("_method"));

var restSchema=new mongoose.Schema({
    title:String,
    img:String,
    body:String,
    created:{
        type:Date,
        default:Date.now
    }
});
var Rest=mongoose.model("Rest",restSchema);

// Rest.create({
//     title:"Zhen",
//     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFEF0tRiGzg3Y-ZO_CAW8pAQtHD0sr9pezqUMuXCni1Ko4xuz",
//     body:"hello"
// });
app.get("/",function(req,res){
    res.redirect("/blogs")
});
//Index
app.get("/blogs",function(req,res){
    
    Rest.find({},function(err,blogs){
        // console.log(blogs);
        if(!err)
         res.render("index",{blogs:blogs})
    })
});
//New
app.get("/blogs/new",function(req, res) {
    res.render("new");
})
//Create
app.post("/blogs",function(req,res){
 req.body.blog.body=req.sanitize(req.body.blog.body);
   Rest.create(req.body.blog,function(err,blog){
       if(!err){
           
           res.redirect("/blogs");
       }
   });
});
//show
app.get("/blogs/:id",function(req, res) {
    
    Rest.findById(req.params.id,function(err,foundBlog){
        if(err){
            res.redirect("/");
        }else{
            res.render("show",{blog:foundBlog});
        }
    })
});
//edit
app.get("/blogs/:id/edit",function(req, res) {
    Rest.findById(req.params.id,function(err,foundBlog){
      if(!err){
           res.render("edit",{blog:foundBlog});
      }  
    });
});
//update
app.put("/blogs/:id",function(req,res){
    req.body.blog.body=req.sanitize(req.body.blog.body);
    Rest.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedBlog){
        if(!err){
            res.redirect("/blogs/"+req.params.id);
        }
    });
});
//destroy
app.delete("/blogs/:id",function(req,res){
    Rest.findByIdAndRemove(req.params.id,function(err){
        if(!err){
            res.redirect("/blogs");
        }
    });
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});