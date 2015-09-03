var backendServices = (function () {
    'use strict';
    const APP_ID = "kGJw559yzCUow2iFkyiPswrhAn9KsUvyvLSJVYFH",
        JS_KEY = "UFZKZytbqM0ulE9Gpi3z2xD6Bvf2ArDxdkla7YET";

    function start() {
        Parse.initialize(APP_ID, JS_KEY);
    }

    return {
        start: start
    }
}());

export default backendServices;