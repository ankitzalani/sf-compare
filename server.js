var express = require("express");
var app = express();
var cors = require('cors');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var bodyParser = require('body-parser');


var proxy = require('./proxy');

app.all('/proxy/?*', proxy());

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//require('./server/index')(app);

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/lib'));

app.listen(port, ip, function() {
    console.log("Listening on " + ip + ": " + port);
});

app.get('/auth', function(req, res) {
    res.redirect('/');
});

