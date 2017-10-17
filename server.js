const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require('passport');
var jsonwebtoken = require("jsonwebtoken");
var mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
var User = require('./models/User');
const routes = require("./routes");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/wheelchairwiki",
  {
    useMongoClient: true
  }
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(function(req, res, next){
  if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'secret', function(err, decode) {
      if(err) req.user = undefined;
      else{
        req.user = decode;
      }
      next();
    })
  } else {
    req.user = undefined;
    next();
  }
});


// Send every request to the React app
// Define any API routes before this runs
app.use(routes);


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
