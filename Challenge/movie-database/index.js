const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.send("OK");
});
app.get("/test", (req, res) => {
res.json({status:200, message:"ok"});
});
app.get("/time", (req, res) => {
    res.json({status:200, message: "" + new Date().getHours() + ":" + new Date().getMinutes() });
    });
    

app.listen(3000, () => console.log("Server is listening to port 3000"));