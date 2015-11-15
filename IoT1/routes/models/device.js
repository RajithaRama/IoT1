// JavaScript source code


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
    name: String,
    id: String,
    typ: String

});

module.exports = mongoose.model('device', deviceSchema);

