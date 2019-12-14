"use strict";
/**
 * Created by yarivkatz on 05/01/2018.
 */
Rx.Observable.fromEvent(document.getElementsByTagName('input'), 'input', function (event) {
    return event.target.value;
})
    .debounceTime(500)
    .distinctUntilChanged()
    .flatMap(function (search) {
    return Rx.Observable.ajax("https://nztodo.herokuapp.com/api/task/?search=" + search);
})
    .subscribe(function (res) {
    console.log(res.response);
});
var stringSubject = new Rx.Subject();
stringSubject.next('hi');
stringSubject.map(function (val) { return val.length; }).subscribe(function (num) {
    console.log("length of string: " + num);
});
