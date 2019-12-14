"use strict";
/**
 * Created by yarivkatz on 02/01/2018.
 */
console.log('1');
var stringPromise = new Promise(function (resolve, reject) {
    console.log('2');
    // setTimeout(() => {
    //     console.log('4');
    // resolve(10); // must be resolved with string
    resolve('hello from promise');
    // }, 1000);
});
console.log('3');
stringPromise.then(function (message) {
    console.log('5');
    console.log(message);
});
console.log('4');
var Task = /** @class */ (function () {
    function Task(json) {
        this.title = '';
        this.when = new Date();
        this.title = json.title || '';
        this.when = json.when ? new Date(json.when) : new Date();
    }
    Task.prototype.sayHello = function () {
        return this.title + " " + this.when;
    };
    return Task;
}());
var promiseTasks = fetch('https://nztodo.herokuapp.com/api/task/?format=json').then(function (res) {
    return res.json().then(function (jsonTasks) {
        return jsonTasks.map(function (singleJson) {
            return new Task(singleJson);
        });
    });
});
promiseTasks.then(function (tasks) {
    tasks[0].sayHello();
});
