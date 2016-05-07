var http = require('http'),
    express = require('express'),
    serveStatic = require('serve-static')
    
// configure the app
var app = express();

//host static files.
app.use(serveStatic('public/'));

//host the server
app.set('port', 8080);
var server = http.createServer(app);
server.listen(app.get('port'), function (){});
console.log('Server running at ????:'+8080);
