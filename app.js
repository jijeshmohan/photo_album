var express = require('express'),
    util    = require('util'),
    gallery = require('node-gallery');

var app = express();
app.set('view', __dirname + '/views');
app.set('view engine','jade');

app.configure(function(){
  app.use(express.static(__dirname + '/media'));
  app.use(gallery.middleware({static: 'media',directory: '/photos', rootURL: "/gallery"}));
});

app.get("/",function(req,res){
  res.redirect('/gallery');
});

app.get("/gallery*",function(req,res){
  var data = req.gallery;
  res.render(data.type + '.jade',data);
});

app.listen(3000);
