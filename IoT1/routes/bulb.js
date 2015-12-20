// bulb.js
var express = require('express');
var router = express.Router();
var philips = require('./bulbs/philipsHue');
var ledIot = require('./bulbs/LED');
//var clipsal = require('./bulbs/clipsal');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/device');
var device = require('./models/device.js');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

router.post('/on', function (req, res) {
    
    
    var ip = '192.168.43.252', mac = '12.43.a1.34.54.65.78.54';
    /*device.findOne({ 'id' : req.body.id , 'user' : req.body.user }, 'ip mac', function (err, device) {
        if (err) return handleError(err);
        ip = device.ip;
        mac = device.mac;
    });       */
    
    if (req.body.brand == 'philips_hue') {
         philips.philipsHue(ip, mac);
        if (req.body.signal == 0) {
            philips.off();
        } else {
            philips.on();
        }
    } else if (req.body.brand == "LED") {
        ledIot.led(ip, req.body.id);
        if (req.body.signal == "1") {
            ledIot.on();
        }
    }

    res.send({ 'message': 'done' });
});

module.exports = router;