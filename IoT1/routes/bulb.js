// bulb.js
var express = require('express');
var router = express.Router();
var philips = require('./bulbs/philipsHue');
//var clipsal = require('./bulbs/clipsal');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/device');
var device = require('./models/device.js');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

router.post('/on/:signal', function (req, res) {
   
    var bulb;
    var ip = '000.00.00.00', mac = '000.00.000.00';
    device.findOne({ 'id' : req.body.id , 'user' : req.body.user }, 'ip mac', function (err, device) {
        if (err) return handleError(err);
        ip = device.ip;
        mac = device.mac;
    });

    if (req.body.brand == 'philips_hue') {
        bulb = new philips.philipsHue(ip, mac);
    }/* else if (req.brand == "clipsal") {
        var bulb = new clipsal.clipsalBulb(ip, mac);
    };*/
    if (req.params.signal == 0) {
        bulb.off();
    } else {
        bulb.on();
    }
    res.send({ 'massege': 'done' });
})

module.exports = router;