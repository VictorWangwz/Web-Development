{"filter":false,"title":"index.js","tooltip":"/YelpCamp/v7/routes/index.js","undoManager":{"mark":19,"position":19,"stack":[[{"start":{"row":0,"column":0},"end":{"row":34,"column":0},"action":"insert","lines":["//Auth routes","//show the register","app.get(\"/register\",function(req, res) {","    res.render(\"register\");","});","","//handle sign up logic","app.post(\"/register\",function(req, res) {","   User.register(new User({username:req.body.username}),req.body.passport,function(err,user){","       if(err){","          console.log(err);","          return res.render(\"register\");","       }else","       {","           passport.authenticate(\"local\")(req,res,function(){","               res.redirect(\"/campground\");","           })","       }","   }) ;","});","app.get(\"/login\",function(req, res) {","    res.render(\"login\");","});","app.post(\"/login\",passport.authenticate(\"local\",{","    successRedirect:\"/campground\",","    failureRedirect:\"/login\"","}),function(req, res) {","});","","","app.get(\"/logout\",function(req, res) {","    res.logout();","    res.redirect(\"/campground\");","});",""],"id":1}],[{"start":{"row":34,"column":0},"end":{"row":39,"column":1},"action":"insert","lines":["function isLoggedIn(req,res,next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["app.get(\"/\",function(req,res){","    res.render(\"landing\");","});","",""],"id":4}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":28},"action":"insert","lines":["var express=require(\"express\");","var router=express.Router();"],"id":6}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"remove","lines":["app"],"id":7},{"start":{"row":3,"column":0},"end":{"row":3,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"remove","lines":["app"],"id":8},{"start":{"row":10,"column":0},"end":{"row":10,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"remove","lines":["app"],"id":9},{"start":{"row":15,"column":0},"end":{"row":15,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":28,"column":0},"end":{"row":28,"column":3},"action":"remove","lines":["app"],"id":10},{"start":{"row":28,"column":0},"end":{"row":28,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":31,"column":0},"end":{"row":31,"column":3},"action":"remove","lines":["app"],"id":11},{"start":{"row":31,"column":0},"end":{"row":31,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"remove","lines":["app"],"id":12},{"start":{"row":38,"column":0},"end":{"row":38,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":47,"column":1},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":13}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":22},"action":"insert","lines":["module.exports=router;"],"id":14}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":41},"action":"insert","lines":["var Campground=require(\"../models/campground\");","var Comment=require(\"../models/comment\");"],"id":15}],[{"start":{"row":3,"column":41},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":16}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":34},"action":"insert","lines":["var passport= require(\"passport\");"],"id":17}],[{"start":{"row":4,"column":34},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":18}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":34},"action":"insert","lines":["var User=require(\"./models/user\");"],"id":19}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["."],"id":20}]]},"ace":{"folds":[],"scrolltop":566.28125,"scrollleft":0,"selection":{"start":{"row":8,"column":3},"end":{"row":8,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":39,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1521615723034,"hash":"bc381277162e985b8c73002709661a1f01303d17"}