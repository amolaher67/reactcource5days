let express = require("express");
let cors = require("cors");
let data = require('./data/data.json')
let app = express();
 
app.use(cors());
 
app.get("/",function(req,res){
   res.send(data);
});



app.listen(2525, "localhost");
console.log("server is live on localhost : 2525");