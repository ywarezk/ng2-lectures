"use strict";
/**
 * Created by yarivkatz on 03/01/2018.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/filter");
var counterObservable = rxjs_1.Observable.create(function (observer) {
    console.log('this will enter only if there is a subscriber');
    var counter = 0;
    var intervalId = setInterval(function () {
        // if (counter < 5) {
        observer.next(counter);
        counter++;
        // } else {
        //     observer.complete();
        // }
    }, 1000);
    return function cleanup() {
        console.log('this will clean the observable');
        clearInterval(intervalId);
    };
}).filter(function (item, index) {
    return item % 2 === 0;
});
var subscription = counterObservable.subscribe(function next(counter) {
    console.log(counter);
}, function error() {
}, function complete() {
    console.log('this is called when counter is 6');
});
// const subscription2: Subscription = counterObservable.subscribe(
//     function next(counter){
//         console.log(counter);
//     },
//     function error(){
//
//     },
//     function complete() {
//         console.log('this is called when counter is 6');
//     }
// )
//
// setTimeout(() => {
//     console.log('unsubscribing');
//     subscription.unsubscribe();
// }, 4000);
