// bulb.js
var express = require('express');
var router = express.Router();
var philips = require('./bulbs/philipsHue');
var clipsal = require('./bulbs/clipsal');
var device = mongoos.model('./models/device');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/device');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

router.get('/on/:signal', function (req, res) {
    
    var ip, mac;
    
    device.findOne({ 'id' : req.id , 'user' : req.user }, 'ip mac', function (err, device) {
        if (err) return handleError(err);
        ip = device.ip;
        mac = device.mac;
    });

    if (req.brand === "philips_hue") {
        var bulb = new philips.philipsHue(ip, mac);
    } else if (req.brand === "clipsal") {
        var bulb = new clipsal.clipsalBulb(ip, mac);
    };

    bulb.on(req.params.signal);
})
