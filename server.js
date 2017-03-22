console.log("Welcome to the server side");
//=========================================
var express = require('express'),
    bp      = require('body-parser'),
    path    = require('path'),
    root    = __dirname,

    app = express();

app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, 'bower_components')));
app.use(bp.json());

app.listen(8000, function(){
  console.log("Listening in port 8000");
})
