var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");
//user

//post
var postSchema=new mongoose.Schema({
    title:String,
    content:String
});
var Post=mongoose.model("Post",postSchema);
var userSchema=new mongoose.Schema({
    email:String,
    name:String,
    posts:[postSchema]
});
var User=mongoose.model("User",userSchema);




var newUser=new User({
    email:"Ye@out",
    name:"Ye shuyang"
});
newUser.posts.push({
    title:"juice",
    content:"kidding"
});
newUser.save(function(err,user){
    if(!err){
        console.log(user);
    }
});
// var newPost=new Post({
//     title:"apple",
//     content:"apple is not delicious"
// });

// newPost.save(function(err,post){
//     if(!err){
//         console.log(post);
//     }
// });


