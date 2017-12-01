var express = require('express');
var app = express();

var makeSecureRandoms = require("./ex1");



app.get('/api/securerandoms', function(req, res){
    makeSecureRandoms([8,16,24,32,40,48,56,64,72,80]).then(result=>{
        res.send(result);
    })
  
});
app.listen(3000);


