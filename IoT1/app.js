// app.js﻿
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/device' );

var routes = require('./routes/index');
var users = require('./routes/users');
var bulb = require('./routes/bulb.js');
var device = require('./routes/models/device.js');

//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));

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
app.use('/bulb', bulb);


var port = process.env.PORT || 8050;



//instanse of a router
var router = express.Router();
/*
router.use(function (req, res, next) {
    console.log('itz happening');
    next(); //go to next route
});

app.use('/api', router);

router.get('/', function (req, res) {
    res.json({ messege: 'api done' });
});


/****************** Bulb intensity*************/
/**********************************************/
/**
router.route('/devices/bulb/:intensity')

  .get(function (req, res) {
    device.find(function (err, devices) {
        if (err)
            res.send(err);
        
        res.json(devices);
    });

});
/*add a new device ('../api/device')
    .post(function (req, res) {
    
        var device1 = new device(); // create an new instance of device
    
        device1.name = req.body.name;
        device1.id = req.body.id;
        device1.typ = req.body.typ;
        console.log(device1.name +" " + device1.typ);
        //save the device
        device1.save(function (err) {
        if (err)
            res.send(err);
        
        res.json({ massege: 'device added' });
        });
})
**/
  




//=========start the server=========

app.listen(port);
console.log('port working on ' + port);
