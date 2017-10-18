
//dependencies
var jade = require('pug');
var http = require('http');

const express = require('express');
const app = express();

//configs
const listen_port = 8080;

//setup
var server = app.listen(listen_port, function(){
	var host = server.address().address;
	var port = server.address().port;
	});

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('scripts'));
app.use(express.static('fonts'));
app.use(express.static('resources'));
app.use(express.static('views'));
app.use(express.static('partials'));


app.get('/', function(req, res){
	res.render("index", {
		title: 'Pi Server',
		message: 'Test Message Please Ignore'
		});
});
