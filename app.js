var express = require('express');
var app = express();
var mysql = require('mysql');

var pool = mysql.createPool({
	host 	: 'us-cdbr-iron-east-04.cleardb.net',
	user	: 'b831e8211cb2c2',
	password : 'b85560e',
	database : 'heroku_690d259dc9aedcf?reconnect=true' 

});

var path = require('path');

app.use(express.static(__dirname + '/Public')); // set the static files location /public/img will be /img for users


//Frontend route

app.get('/', function(req, res) {

   res.sendFile(path.resolve('Public/index.html'));
 
 })

app.get('/profs', function(req, res) {

   res.sendFile(path.resolve('Public/prof-table.html'));
 
 })

///////////////////////////////////////////////////////



app.get('/Practice_Blog_Table/Blogs', function(req,res){

	console.log("working")

	pool.getConnection(function(err, connection) {

		console.log(err)
		
		connection.query('SELECT * FROM Blogs ORDER BY BlogID DESC LIMIT 3', function(error, result, field){
			
			connection.release();

			if(!err) {

				res.json(result);

			}

		//res.send(result)

		});

	});


});

var port = process.env.PORT || 3000

app.listen(port, function() {console.log('Heyoooo!')})






