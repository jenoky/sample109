var express = require("express");
var app = express();
app.listen(3008, () => {
 console.log("Server Launched");
});
app.get("/url", (req, res, next) => {
 res.json(["Successfully launched Project Code"]);
});
app.get("/ready", (req, res, next) => {
 res.sendStatus(200);
});
// added sample deploy 2
