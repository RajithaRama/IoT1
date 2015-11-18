/**
 * Created by Rama on 11/18/2015.
 */

var ip1, id1;

module.exports = {
    led : function led(ip, id){
        ip1 = ip;
        id1 = id;
    },

    on : function on(){
        var http = require('http');
        var options = {
            host: ip1,
            port: 80,
            path: '/?'+id1
        };

        http.get(options, function(res) {
            console.log("Got response: " + res.statusCode);
        }).on('error', function(e) {
            console.log("Got error: " + e.message);
        });

    }
};