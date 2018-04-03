var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
var data = [
    {
        name: "Cloud's Rest", 
        img:"https://www.google.ca/search?dcr=0&biw=1279&bih=630&tbm=isch&sa=1&ei=3HGnWr3kA9XkjwOvw53ICQ&q=ubc&oq=ubc&gs_l=psy-ab.3..0l9j0i30k1.727365.904621.0.904833.4.4.0.0.0.0.66.186.3.3.0....0...1c.1.64.psy-ab..1.3.184....0.7f4K7QJg5Tc#",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Desert Mesa", 
        img: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Canyon Floor", 
        img: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
]

function seedDB(){
    Campground.remove({},function(err){
   
    // if(!err) {
    //     console.log("removed");
    //     data.forEach(function(seed){
    //     Campground.create(seed,function(err,data){
    //         if(!err) console.log("added successfully");
    //         //create a comment
    //         Comment.create({
    //             text:"great",
    //             author:"Zhen"
    //         },function(err,comment){
    //             if(!err) {
    //                 data.comments.push(comment);
    //                 data.save();
    //             }
        
    //         });
            
            
    //     });
    //     });
    // }
        
});
//add campground

}
module.exports=seedDB;


 
// function seedDB(){
//   //Remove all campgrounds
//   Campground.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("removed campgrounds!");
//         Comment.remove({}, function(err) {
//             if(err){
//                 console.log(err);
//             }
//             console.log("removed comments!");
//              //add a few campgrounds
//             data.forEach(function(seed){
//                 Campground.create(seed, function(err, campground){
//                     if(err){
//                         console.log(err)
//                     } else {
//                         console.log("added a campground");
//                         //create a comment
//                         Comment.create(
//                             {
//                                 text: "This place is great, but I wish there was internet",
//                                 author: "Homer"
//                             }, function(err, comment){
//                                 if(err){
//                                     console.log(err);
//                                 } else {
//                                     campground.comments.push(comment);
//                                     campground.save();
//                                     console.log("Created new comment");
//                                 }
//                             });
//                     }
//                 });
//             });
//         });
//     }); 
//     //add a few comments
// }
 
// module.exports = seedDB;