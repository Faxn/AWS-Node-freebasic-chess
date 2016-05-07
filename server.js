var http = require('http'),
    express = require('express'),
    serveStatic = require('serve-static'),
    fs = require('fs'),
    handlebars = require('handlebars'),
    pieces = require('./pieces.js'),
    board = require('./board.js')


    
// configure the app
var app = express();

//host static files.
app.use(serveStatic('static/'));

//setup the global board
board = new board.mailbox();

//serve the index
indexhb = fs.readFileSync('templates/index.html', "utf-8")
indextem = handlebars.compile(indexhb)
app.get("/", function(req, res){
    html = indextem({motd:"handlebars"})
    res.send(html)
})

//serve the play pages
playhb =fs.readFileSync('templates/simple_play.html', 'utf-8')
playtem = handlebars.compile(playhb) 

app.get("/play/1/white", function(req, res){
	html=playtem(board)	
	res.send(html)
})

app.get("/play/1/black", function(req, res){
	res.send("The Abyss watchers")
})


app.post("/play/1/move",function(req, res){}) 

//host the server
app.set('port', 8094);
var server = http.createServer(app);
server.listen(app.get('port'), function (){});
console.log('Server running at ????:'+8094);
