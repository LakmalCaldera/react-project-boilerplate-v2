var express = require('express');

// Create our App
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log("Express Serve is up on port 3000.");
});
