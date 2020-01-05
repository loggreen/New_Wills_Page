var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var fs = require('fs');
var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

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

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

app.use(requireHTTPS);

var path = require('path');

app.use(express.static(__dirname + '/Public', { index : false })); // set the static files location /public/img will be /img for users

app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

//Frontend route

app.get('/', function(req, res) {
console.log('getting index');
	console.log(path.resolve('Public/index.html'))

   res.send(getHTML('index.html'));
 
 })

/* 
you can make up pretty much any URL you want for the subpages.
in the nav.html file, just point the link to the URL you want
for the page. eg: /successions means you'll have 
sunriselawgroup.com/successions as the URL for that page.
once you have the link in the nav set, come here and add a new 
route to the URL you just came up with. The getHTML() function
is a custom function I made that inserts your nav.html file
into the nav section of each page so you only ever have to update
the nav.html and not every page on your site. The getHTML function
gets the file you specify that's in the Public folder, with the
proper nav links inserted into it.

i put your practice area pages under a fake /practice-areas folder
to keep the URLs consistent, and it'll help with SEO.

I've already created the routes and updated your nav.html. You'll just
have to create the missing HTML files
*/

app.get('/videos', function(req, res) {
	res.send(getHTML('blog.html'))
});

app.get('/blog', function(req, res) {
	res.send(getHTML('blog.html'))
});

app.get('/thank-you', function(req, res) {
	res.send(getHTML('Thank_You.html'))
});

app.get('/Contact_Us', function(req, res) {
	res.send(getHTML('Contact_Us.html'))
});


app.get('/practice-areas/wills', function(req, res) {
	res.send(getHTML('Wills.html'))
});

app.get('/practice-areas/successions', function(req, res) {
	res.send(getHTML('Successions.html'))
});

app.get('/practice-areas/power-of-attorney', function(req, res) {
	res.send(getHTML('Power_of_Attorney.html'))
});

app.get('/practice-areas/small-succession-affidavit', function(req, res) {
	res.send(getHTML('Small_Succession_Affidavit.html'))
});

app.get('/practice-areas/special-needs-trusts', function(req, res) {
	res.send(getHTML('SNT.html'))
});

app.get('/practice-areas/trusts', function(req, res) {
	res.send(getHTML('Trusts.html'))
});

app.get('/practice-areas/elder-abuse', function(req, res) {
	res.send(getHTML('Elder_Abuse.html'))
});

app.get('/Practice_Blog_Table/final_blogs', function(req,res){

	console.log("working")

	pool.getConnection(function(err, connection) {

		console.log(err)
		if(connection){
			connection.query('SELECT * FROM final_blogs ORDER BY Blog_ID DESC LIMIT 3', function(error, result, field){
				
				connection.release();

				if(!err) {

					res.json(result);

				}

			//res.send(result)

			});
		}
	});


});


app.get('/blogs/:start/:count', function(req,res){

	var start = parseInt(req.params.start);
	var count = parseInt(req.params.count);

	console.log("working", '/blogs/')

	pool.getConnection(function(err, connection) {

		console.log('error', err)
		if(connection){
			connection.query('SELECT * FROM final_blogs ORDER BY Blog_ID DESC LIMIT ? OFFSET ?', [count, start], function(error, result, fields){
				console.log('/blog error', error, result);
				connection.release();

				if(!err) {

					// res.json(result);
					res.send(JSON.stringify(result));

				}

			// res.send(result)

			}).on('error', function(err) {
            	console.log("[mysql error]",err);
        	});;
		}
	});


});

app.get('/Full_Blog_Pull/Blogs', function(req,res){

	console.log("working")

	pool.getConnection(function(err, connection) {

		console.log(err)
		
		connection.query('SELECT * FROM Blogs ORDER BY Blog_ID DESC LIMIT 5', function(error, result, field){
			
			connection.release();

			if(!err) {

				res.json(result);

			}

		//res.send(result)

		});

	});


});


app.post('/Sunrise_Law_Group/leads', function(req,res){ 
	//generate the email body
	var mail_body = '';
	for(var key in req.body){
		mail_body += '<b>' + key + ':</b> ' + req.body[key] + "<br>";
	}

	//build the SendGrid API request
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: {
	    personalizations: [
	      {
	        to: [
	          {
	            email: 'logan@sunriselawgroup.com',
	          },
	          {
	            email: 'zack@sunriselawgroup.com',
	          },
	        ],
	        subject: 'New Lead from Website',
	      },
	    ],
	    from: {
	      email: 'leads@sunriselawgroup.com',
	      name: 'Sunrise Law Group Website'
	    },
	    content: [
	      {
	        type: 'text/html',
	        value: mail_body,
	      },
	    ],
	  },
	});

	//Send the email via SendGrid
	sg.API(request)
	  .then(response => {
	    console.log(response.statusCode);
	    console.log(response.body);
	    console.log(response.headers);
	  })
	  .catch(error => {
	    //error is an instance of SendGridError
	    //The full response is attached to error.response
	    console.log(error.response.statusCode);
	  });

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


function getHTML(file){
	var html = fs.readFileSync(path.resolve('Public/' + file), 'utf8');
	var nav = fs.readFileSync(path.resolve('nav.html'), 'utf8');
	console.log(nav);

	return html.replace(/\{\% nav \%\}/gi, nav);
}


var port = process.env.PORT || 3000

app.listen(port, function() {console.log('Heyoooo!');})






