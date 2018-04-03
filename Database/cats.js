var mongoose=require("mongoose");
//connect
mongoose.connect("mongodb://localhost/dog");
//add a cat to db
var catSchema=new mongoose.Schema({
    name:String,
    age:Number,
    temperament:String
});

var Cat=mongoose.model("dog",catSchema);
// var Zhen=new Cat({
//     name:"Zhen",
//     age:11,
//     temperament:"good"
// });
// console.log(Zhen);
// Zhen.save(function(err,cat){
//     if(!err){
//         console.log(cat);
//     }
// });
Cat.create({
    name:"tang",
    age:3,
    temperament:"bad"
},function(err,cat){
    if(!err){
        console.log(cat);
    }
});
Cat.find({},function(err,cats){
    if(!err){
        console.log(cats);
    }
    
})