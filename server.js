var express			=	require("express"),
	app				=	express(),
	bodyParser		=	require("body-parser"),
	mongoose		=	require('mongoose'),
	meetupsController=	require('./server/controllers/meetups-controller.js');

mongoose.connect('mongodb://localhost:27017/meetups-demo/data');

app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());
		
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);

app.listen(8080);

console.log("I'm listening!");
