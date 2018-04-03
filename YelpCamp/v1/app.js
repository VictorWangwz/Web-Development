var express=require("express");
var app=express();
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
var campgrounds=[
    {name:"Zhen",img:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Information_example_page2_300px.jpg"},
    {name:"Tang",img:"http://www.pgconnects.com/vancouver/wp-content/uploads/sites/7/2016/03/VancouverConventionCentre-outside-boardwalk-400px.jpg"},
    {name:"Ye",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFEF0tRiGzg3Y-ZO_CAW8pAQtHD0sr9pezqUMuXCni1Ko4xuz"}
    ];
   

app.get("/",function(req,res){
    res.render("landing");
});
app.get("/campground",function(req,res){
  
   
    res.render("campground",{campgrounds:campgrounds});
});

app.get("/campground/new",function(req, res) {
   res.render("new"); 
});

app.post("/campground",function(req,res){
    var name=req.body.name;
    var img=req.body.img;
    campgrounds.push({name:name,img:img});
    // res.render("campground",{campgrounds:campgrounds});
    res.redirect("/campground");
});




app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});