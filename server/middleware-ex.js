var express = require('express');
var app = express();
var port = 8000;


//app.use(body-parser());
//app.use(cookieParser());

app.use(log);

app.get('/', log, hello);


function log(req, res, next) {

	console.log(new Date(), req.method, req.url);

	next();

}


function hello(req, res, next) {

	res.write("Hello, " + "World!\n");

	res.end();

	next();

}



app.listen(port, function (err, res) {

  if (err) {

    console.log("server error");

  } else {

    console.log("server started");

  }

});
