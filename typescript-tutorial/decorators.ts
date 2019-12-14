/**
 * Created by yarivkatz on 05/12/2017.
 */

function logName() {
    return function(target) {
        console.log(target.name);
    }
}

@logName()
class Person {
    constructor(private _firstName: string = 'Yariv') {}
}

const person = new Person();