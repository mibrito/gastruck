/*
 * Just a simple static server to test the app
 */

var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
 
// Serve up public/ftp folder 
var serve = serveStatic('.', {'index': ['index.html', 'index.htm']})
 
// Create server 
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
})
 
var port = process.env.PORT || 8080;
var host = process.env.HOST || 'localhost';
// Listen 
server.listen(port, host, function(){
	console.log('listen on '+host+':'+port);
});