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
    
    
    var ip = '192.168.23.21', mac = '12.43.a1.34.54.65.78.54';
    /*device.findOne({ 'id' : req.body.id , 'user' : req.body.user }, 'ip mac', function (err, device) {
        if (err) return handleError(err);
        ip = device.ip;
        mac = device.mac;
    });       */
    
    if (req.body.brand == 'philips_hue') {
         var bulb = new philips.philipsHue(ip, mac);
    }/* else if (req.brand == "clipsal") {
        var bulb = new clipsal.clipsalBulb(ip, mac);
    };*/
    if (req.params.signal == 0) {
        bulb.off();
    } else {
        bulb.on();
    }
    res.send({ 'massege': 'done' });
});

module.exports = router;