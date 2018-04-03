var express=require("express"),
	app=express(),
	mongoose=require("mongoose"),
	bodyParser=require("body-parser");

app.set("view engine","ejs");
mongoose.connect("mongodb://localhost/Profile");
app.use(bodyParser.urlencoded({extended:true}));

var itemSchema=new mongoose.Schema({
	name:String,
	content:String,
});
var Item=mongoose.model("item",itemSchema);

app.get("/",function(req,res){
       Item.find({},function(err,item){
       if(!err){
        res.render("home",{item:item});
       }
   })
});

app.get("/introduction",function(req,res){
	res.render("introduction");
});

app.post("/",function(req,res){
	var name=req.body.name;
	var content=req.body.content;
	console.log(content)
	var newItem={name:name,content:content};
	Item.create(newItem,function(err,item){
		if(err){
			console.log("CREATE not successful");
		}else{
		    console.log(item);
		}
	})
	res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server is on");
});
