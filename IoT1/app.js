var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://ds054308.mongolab.com:54308/iotdevices');

var routes = require('./routes/index');
var users = require('./routes/users');
var device = require('./device.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var port = process.env.PORT || 8050;



//instanse of a router
var router = express.Router();

router.get('/', function (req, res) {
    res.json({ messege: 'its working' });
});

//create the prefix
app.use('/api', router);

//=========start the server=========

app.listen(port);
console.log('port working on ' + port);
