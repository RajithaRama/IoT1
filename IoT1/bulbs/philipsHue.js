
function philipsHue(ip, mac, id) {
    
    var hue = require("node-hue-api"),
        HueApi = hue.HueApi,
        lightState = hue.lightState;
       state = lightState.create();
    
    
    
    var displayResult = function (result) {
        console.log(JSON.stringify(result, null, 2));
    };
    
    var host = ip,
        username = mac,
        api = new HueApi(host, username),
        state;
    
    var on = function () {
        state = lightState.create().on().rgb(0, 255, 0);
        api.setLightState(1, state.rgb(0 , 0 , 255))
	    .done();
        api.setLightState(2, state.rgb(0 , 255 , 0))
	    .done();
        api.setLightState(3, state.rgb(255 , 0 , 0))
	    .done();
    };
    
    var off = function () {
        api.setLightState(1, state.off())
    .done();
        api.setLightState(2, state.off())
    .done();
        api.setLightState(3, state.off())
    .done();
    };
    
    var disco = function () {
        setInterval(function () {
            api.setLightState(1, state.rgb(Math.random() * 255 + 1, Math.random() * 255 + 1, Math.random() * 255 + 1))
	    .done();
            api.setLightState(2, state.rgb(Math.random() * 255 + 1, Math.random() * 255 + 1, Math.random() * 255 + 1))
	    .done();
            api.setLightState(3, state.rgb(Math.random() * 255 + 1, Math.random() * 255 + 1, Math.random() * 255 + 1))
	    .done();
        }, 2000);
    };
    
    var init = function () {
        api.setLightState(1, state.rgb(0 , 0 , 0))
	    .done();
        api.setLightState(2, state.rgb(0 , 0 , 0))
	    .done();
        api.setLightState(3, state.rgb(0 , 0 , 0))
	    .done();
    };
    
    var alert = function () {
        api.setLightState(1, state.alert(true))
	    .done();
	//api.setLightState(2, state.alert())
	  //  .done();
	//api.setLightState(3, state.alert())
	  //  .done(); 
    };

};
