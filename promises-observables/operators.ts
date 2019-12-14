/**
 * Created by yarivkatz on 05/01/2018.
 */


declare var Rx: any;

Rx.Observable.fromEvent(document.getElementsByTagName('input'), 'input', (event) => {
    return event.target.value;
})
    .debounceTime(500)
    .distinctUntilChanged()
    .flatMap(
        (search) => {
            return Rx.Observable.ajax(`https://nztodo.herokuapp.com/api/task/?search=${search}`)
        }
    )
    .subscribe((res) => {
        console.log(res.response);
    });

const stringSubject = new Rx.Subject();

stringSubject.next('hi');

stringSubject.map((val) => {return val.length}).subscribe((num) => {
    console.log(`length of string: ${num}`);
});