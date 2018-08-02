var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var pool = mysql.createPool({
	host : process.env.DB_HOST,
	user : process.env.DB_USERNAME,
	password : process.env.DB_PASSWORD,
	database : process.env.DB_DATABASE 

});

console.log(process.env.DB_HOST)
console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DATABASE)

var path = require('path');

app.use(express.static(__dirname + '/Public')); // set the static files location /public/img will be /img for users


app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

//Frontend route

app.get('/', function(req, res) {

   res.sendFile(path.resolve('Public/index.html'));
 
 })


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

app.get('/Full_Blog_Pull/Blogs', function(req,res){

	console.log("working")

	pool.getConnection(function(err, connection) {

		console.log(err)
		
		connection.query('SELECT * FROM Blogs ORDER BY BlogID DESC LIMIT 5', function(error, result, field){
			
			connection.release();

			if(!err) {

				res.json(result);

			}

		//res.send(result)

		});

	});


});

// app.post("/Sunrise_Law_Group/leads", function(req,res){ 

// 	pool.getConnection(function(err, connection) {

// 		console.log("the post is hit!")
		
// 		connection.query("INSERT INTO leads (Name, Phone_Number, Email, Message) Values ('"+Name+"','"+Phone+"','"+Email+"','"+Message+"')", function(error, result, field){
			
// 			connection.release();

// 			if(!err) {

// 				res.json(result);

// 			}


// 		});

// 	});

	

// });

app.post('/Sunrise_Law_Group/leads', function(req,res){ 

	console.log("made it to the app.post!")
	console.log("BODY: ", req.body);

	var Name = req.body.Name;
	var Phone = req.body.Phone;
	var Email = req.body.Email;
	var Message = req.body.Message;

	console.log("NAME: ", Name);


	pool.getConnection(function(err, connection){
		var sqlquery = "INSERT INTO leads (Name, Phone_Number, Email, Message) VALUES ('"+Name+"','"+Phone+"','"+Email+"','"+Message+"')"
		console.log(sqlquery);
		connection.query(sqlquery, function (error, results, fields){
			if (error) {
				console.log("ERROR", error);
			}
			connection.release();
			if(!err) {
				res.send({"success":"true"});
			}
		});
	});
});


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);



var port = process.env.PORT || 3000

app.listen(port, function() {console.log('Heyoooo!')})






