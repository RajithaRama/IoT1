//schema declaration mongodb

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
    name: String,
    id: String,
    signals: String

});

module.exports = mongoose.model('device', deviceSchema);