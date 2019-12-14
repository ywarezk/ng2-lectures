"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
// this is the root zone
var root = Zone.current;
console.log(root.name);
var angularZone = root.fork({
    name: 'angular',
    onHasTask: function (parentZone, currentZone, targetZone, hasTaskState) {
        console.log("The event loop has changed: " + JSON.stringify(hasTaskState));
    }
});
angularZone.run(function () {
    setTimeout(function () {
        console.log('running timeout, after it returns we should run Change Detection');
    }, 1000);
    var timerPromise = new Promise(function (resolve, reject) {
        console.log('running promise');
        setTimeout(function () {
            console.log('promise is resolving');
            resolve('hello');
        });
    });
    timerPromise.then(function () {
        console.log('listener is invoked');
    });
});
