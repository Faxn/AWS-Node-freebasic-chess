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

	//figure out the index
	selected = false
	for(i = 0; i<64; i++){ //jank
	   if(req.query["square"+i] != undefined){ //JANK
	      selected = i;   //JAAAAAANK
	      break;
	   }
	}

	//build the data glob for handlebars
	data={}
        data.selected = selected;
	data.game = parseInt(req.params.game)
	data.board = boards[data.game]
	data.player = req.params.player
        data.piece = []
	for(i = 0; i<64; i++){
	   data.piece[i]=pieces.toUnicode(data.board.arr[i]);
	}

	console.dir(req.params)
	console.dir(req.body)
	console.dir(req.query)
        console.log("data")
	console.dir(data)

	html=playtem(data)
	res.send(html)
})

app.post("/view/:game/:player",function(req, res){
	s1=parseInt(req.body.selected);

	//figure out the index
	s2 = false
	for(i = 0; i<64; i++){ //jank
	   if(req.body["square"+i] != undefined){ //JANK
	      s2 = i;   //JAAAAAANK
	      break;
	   }
	}

	console.log("Some fool tried to move from "+s1+" to "+s2);
	
	//post redirect
	res.redirect(303, '/view/'+req.params.game+'/'+req.params.player)
})

//host the server
app.set('port', 8094);
var server = http.createServer(app);
server.listen(app.get('port'), function (){});
console.log('Server running at ????:'+8094);
