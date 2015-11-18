var ip_1 = "";
var mac_1 = "";
module.exports = {


    displayResult : function displayResult(result) {
        console.log(JSON.stringify(result, null, 2));
    },

    philipsHue : function philipsHue(ip, mac){
        ip_1 = ip;
        mac_1 = mac;
    },

    on : function on() {
        state = lightState.create().on().rgb(0, 255, 0);
        api.setLightState(1, state.rgb(0, 0, 255))
            .done();
        api.setLightState(2, state.rgb(0, 255, 0))
            .done();
        api.setLightState(3, state.rgb(255, 0, 0))
            .done();
    },

    off :function off() {
        api.setLightState(1, state.off())
            .done();
        api.setLightState(2, state.off())
            .done();
        api.setLightState(3, state.off())
            .done();
    },

    disco : function disco() {
        setInterval(function () {
            api.setLightState(1, state.rgb(Math.random() * 255 + 1, Math.random() * 255 + 1, Math.random() * 255 + 1))
                .done();
            api.setLightState(2, state.rgb(Math.random() * 255 + 1, Math.random() * 255 + 1, Math.random() * 255 + 1))
                .done();
            api.setLightState(3, state.rgb(Math.random() * 255 + 1, Math.random() * 255 + 1, Math.random() * 255 + 1))
                .done();
        }, 2000);
    },

    init : function init() {
        api.setLightState(1, state.rgb(0, 0, 0))
            .done();
        api.setLightState(2, state.rgb(0, 0, 0))
            .done();
        api.setLightState(3, state.rgb(0, 0, 0))
            .done();
    },

    alert : function alert() {
        api.setLightState(1, state.alert(true))
            .done();
        //api.setLightState(2, state.alert())
        //  .done();
        //api.setLightState(3, state.alert())
        //  .done();
    }
};

    var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

    var ip, mac;

    var host = ip_1,
    username = mac_1,
    api = new HueApi(host, username),
    state = lightState.create();


