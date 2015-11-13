//schema declaration mongodb

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
    name: String,
    id: String,
    typ: String

});
var device = mongoose.model('device', deviceSchema);
module.exports = device;