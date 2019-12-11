var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

var cors = require('cors')


app.use(cors());


//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'Otsi@123', //mysql database password
  database : 'project1' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all customers
app.get('/customer', function (req, res) {
	console.log(req.body);
	console.log("header response",req.headers['app-author']);
	
	 if(req.headers['app-author']=="OTSI-DEV" ){
		  res.send({ error: 'Authentication Error'});
	  }else{
		    connection.query('select * from project_users', function (error, results, fields) {
	  if (error) throw error;
	 		    res.end(JSON.stringify(results));	
	});
	  }
	  

});
//rest api to get a single customer data
app.get('/customer/:id', function (req, res) {
	console.log("req body response is"+ JSON.stringify(req.body));
	 console.log("select * from project_users where id=?","delete res is", req.params.id);
   connection.query('select * from project_users where id=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to create a new customer record into mysql database
app.post('/customerpost', function (req, res) {
	
   var params  = req.body;
   console.log(params);
   connection.query('INSERT INTO project_users SET ?', params, function (error, results, fields) {
	 
	  if(error){
	 // throw error;
        res.send({ error: 'Duplicate Entry!', errno : '1062', errorresponse: error})
		console.log(error); 
	  }else{
		   console.log('No error in the query',results )
		 res.end(JSON.stringify(results));
	  }   
	});
});

//rest api to create a new customer record into mysql database
app.post('/logincheck', function (req, res) {
	
   var params  = req.body;
   console.log(params);
    connection.query('select id, role from project_users where email=? and password =?', [req.body.email, req.body.password], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	  console.log("login check results:",results);
	});
	
	
  /* connection.query('INSERT INTO project_users SET ?', params, function (error, results, fields) {
	 
	  if(error){
	 // throw error;
        res.send({ error: 'Duplicate Entry!', errno : '1062', errorresponse: error})
		console.log(error); 
	  }else{
		   console.log('No error in the query')
		 res.end(JSON.stringify(results));
	  }   
	});*/
	
});

//rest api to update record into mysql database
app.put('/customerpost/', function (req, res) {
   console.log(req.params);
   connection.query('UPDATE `project_users` SET `name`=?,`email`=?,`phone`=?,`gender`=?,`country`=?,`state`=?,`city`=?  where `email`=?', [req.body.name,req.body.email, req.body.phone, req.body.gender, req.body.country, req.body.state, req.body.city, req.body.email], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to delete record from mysql database
app.delete('/customerdelete/:userid', function (req, res) {
   console.log("DELETE FROM `project_users` WHERE `id`=?'","delete res is", req.params.userid);
   connection.query('DELETE FROM `project_users` WHERE `id`=?', [req.params.userid], function (error, results, fields) {
	  if (error) {
		  console.log("errrr",error);
	  }else{
		  res.send(JSON.stringify('Record has been deleted!'));
	  };
	  
	});
});



//get countries list 
app.get('/countries', function (req, res) {
	console.log(req.body);
   connection.query('select * from countries', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	    console.log("countries list", results);
	});
});

//get states list 
app.get('/states/:id', function (req, res) {
	console.log(req.body);
   connection.query('select id, state_name from states where country_id=?',[req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	    console.log("states list", results);
	});
});

//get cities list 
app.get('/cities/:id', function (req, res) {
	console.log(req.body);
   connection.query('select id, city_name from cities where state_id = ?',[req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	  console.log("cities list", results);
	});
});

