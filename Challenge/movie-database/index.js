const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.send("OK");
});
app.get("/test", (req, res) => {
res.json({status:200, message:"ok"});
});
app.get("/time", (req, res) => {
    res.json({status:200, message: new Date().getHours() + ":" + new Date().getMinutes() });
    });
app.get("/hello/:ID", (req, res) => {
    res.json({status:200, message:"hello " + req.params.ID});
        });
app.get("/search", (req, res) => {
    if(req.query.s){
    res.json({status:200, message:"ok", data:req.query.s});
    }
    else{
        res.json({status:500, error:true, message:"you have to provide a search"});
    }
});
app.listen(2000, ()=> console.log("Server is listening to port 2000"));