let express = require('express');
let bodyParser = require('body-parser');
let app = express();

console.log("Hello World");
app.use(bodyParser.urlencoded({extended: false}));
app.use("/public",express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})
app.get("/", (req, res) => {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html")
})

app.get("/json", (req, res) => {
  var message = "Hello json";
  if(process.env['MESSAGE_STYLE'] == "uppercase"){
    message = message.toUpperCase();
  }
  res.json({
    message
  })
})

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({
    time: req.time
  })
})

app.get("/:word/echo", (req, res) => {
  res.json({
    echo : req.params.word
  })
})

app.route("/name").get((req, res) => {
  const name = `${req.query.first} ${req.query.last}`;

  res.json({
    name
  })
}).post((req, res) => {
  const name = `${req.body.first} ${req.body.last}`;

  res.json({
    name
  })
})



































 module.exports = app;
