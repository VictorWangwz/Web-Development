var mongoose=require("mongoose");
//Schema
var campgroundSchema=new mongoose.Schema({
    name:String,
    img:String,
    discription:String,
     comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});
module.exports=mongoose.model("Campground",campgroundSchema);
