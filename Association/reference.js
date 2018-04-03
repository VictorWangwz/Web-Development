var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo2");
//user
var Post=require("./models/post");
var User=require("./models/user");



User.findOne({email:"Zhen@"}).populate("posts").exec(function(err,user){
    console.log(user);
});



// Post.create({
//     title:"hoasdadfadfaf",
//     content:"blaadfadfm"
// },function(err,post){
//     User.findOne({email:"Zhen@"},function(err,foundUser){
//         foundUser.posts.push(post);
//         foundUser.save(function(err,data){
//             console.log(data);
//         });
//     });
// });



// User.create({
//     email:"Zhen@",
//     name:"ZHenWang"
// });




