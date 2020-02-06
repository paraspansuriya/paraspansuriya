var express = require("express");
var app = express();
var fs = require("fs");
var cors = require("cors");
app.use(cors());
app.use(express.static("root"));


let data = fs.readFileSync("./post.json");
let json = JSON.parse(data)
console.log(json);
 app.use(express.json());

app.get("/post",(req,res)=>{
	// json.push({"title":"Nipesh","desc":"Patel"})
    res.send(json);
    // res.send(req.params)
    // res.send(req.query);
})

app.post("/post",(req,res)=>{
	// res.send(req.body);
   json.push(req.body);
   fs.writeFileSync("./post.json",JSON.stringify(json,null,2));
   res.send(json);
})


app.listen(3000,()=>{console.log("listening on port 3000")});