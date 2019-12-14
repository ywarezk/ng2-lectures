/**
 * Created by yarivkatz on 04/12/2017.
 */


let myString: string = 'hello world';
// myString = 10; // error

let myNumber: number;
myNumber = 20;
// myNumber = 'hello'; // error

let myInferedString = 'foo bar';
// myInferedString = 10; // error

console.log(myInferedString[2]);

// myInferedString[3] = 'v';
// myInferedString.substr()