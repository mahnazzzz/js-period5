var express = require('express');
var app = express();

var makeSecureRandoms = require("./promis1");
var getAlbumByIDs = require("./promis3");



app.get('/api/securerandoms', function(req, res){
    makeSecureRandoms([8,16,24,32,40,48,56,64,72,80]).then(result=>{
        res.send(result);
    })
  
});

app.get('/api/albumthreewords',function(req, res){
    getAlbumByIDs([1,3,5,7,9]).then(result=>{
        res.send(result);
    })
})
app.get('/api/albums/:words',function (req,res){
    const words = req.params.words;
    console.log(words)
    getAlbumByIDs([1,3,5,7,9],words).then(result=>{
        res.send(result);
    })
   
})
app.listen(3000);


