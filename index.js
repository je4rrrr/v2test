var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const db = require("./models");
db.sequelize.sync().then(function() {
  console.log('sequelize activate');
});

require('./routes/customer.routes.js')(app);
 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
 
})