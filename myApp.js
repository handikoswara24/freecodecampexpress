let express = require('express');
let app = express();

console.log("Hello World");
app.use("/public",express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html")
})



































 module.exports = app;