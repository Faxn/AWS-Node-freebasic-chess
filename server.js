var http = require('http'),
    express = require('express'),
    serveStatic = require('serve-static'),
    fs = require('fs'),
    handlebars = require('handlebars'),
    pieces = require('./pieces.js'),
    board = require('./board.js')

// configure the app
var app = express();


//handle postdata
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
 


//host static files.
app.use(serveStatic('static/'));

//setup the global board array

boards = [];
boards[1] = new board.mailbox();
boards[1].init();

//serve the index
indexhb = fs.readFileSync('templates/index.html', "utf-8")
indextem = handlebars.compile(indexhb)
app.get("/", function(req, res){
    blist = [];
    for(k in boards){
	blist[blist.length] = k
    }
    data = {};
    data.blist = blist;
    html = indextem(data)
    res.send(html)
})

//serve the play pages


app.get("/view/:game/:player", function(req, res){

        playhb = fs.readFileSync('chess.html', 'utf-8')
        playtem = handlebars.compile(playhb) 

	data={}
	data.board = board;
        data.selected = 0
	data.game = req.params.game
	data.player = req.params.player

	console.dir(req.params)
	console.dir(req.body)

	html=playtem(data)
	res.send(html)
})

app.post("/play/:game/:player",function(req, res){
	s1=req.body.s1;
	s2=req.body.s2;
	console.log("Some fool tried to move from "+s1+" to "+s2);
	res.send(500)
})

//host the server
app.set('port', 8094);
var server = http.createServer(app);
server.listen(app.get('port'), function (){});
console.log('Server running at ????:'+8094);
