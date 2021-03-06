var express = require('express');
var path = require('path');
var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{noInfo: true,publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));


app.use('/images',  express.static(__dirname + '/src/template/images'));
app.use('/css',  express.static(__dirname + '/src/template/css'));
app.use('/fonts', express.static('./src/template/fonts'));
app.use('/js', express.static('./src/template/js'));
app.use('/', function (req, res) {
    res.sendFile(path.resolve('src/client/index.html'));
});


var port = 4000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
