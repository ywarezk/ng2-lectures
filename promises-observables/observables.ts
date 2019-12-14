/**
 * Created by yarivkatz on 03/01/2018.
 */

import {Observer, Observable, Subscription} from "rxjs";
import 'rxjs/add/operator/filter';

const counterObservable: Observable<number> = Observable.create((observer: Observer<number>) => {
    console.log('this will enter only if there is a subscriber');
    let counter = 0;
    const intervalId = setInterval(() => {
        // if (counter < 5) {
            observer.next(counter);
            counter++;
        // } else {
        //     observer.complete();
        // }
    }, 1000)

    return function cleanup(){
        console.log('this will clean the observable');
        clearInterval(intervalId);
    }
}).filter((item: number, index: number) => {
    return item % 2 === 0;
});

const subscription: Subscription = counterObservable.subscribe(
    function next(counter){
        console.log(counter);
    },
    function error(){

    },
    function complete() {
        console.log('this is called when counter is 6');
    }
)

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
