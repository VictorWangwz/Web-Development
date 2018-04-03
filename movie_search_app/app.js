var express=require("express");
var app=express();
var request=require("request");
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req, res) {
    res.render("search");
})

app.get("/results",function(req,res){
    // res.send("<h1>adfa</h1>");
  var query=req.query.search;
  request("http://www.omdbapi.com/?s="+query+"&apikey=thewdb", function (error, response, body) {
  if(!error&&response.statusCode==200){
      var parsedData=JSON.parse(body);
      res.render("results.ejs",{data:parsedData});
  }
});
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
});