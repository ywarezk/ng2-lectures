/**
 * Created by yarivkatz on 04/12/2017.
 */
var stam;
stam = 10;
stam = 'hello world';
var myArray = [];
myArray.push(1);
myArray.push('hello world');
// myArray = 'hello world'; // error
var myArray2;
myArray2 = [];
myArray2.push(1);
myArray2.push('hello world');
myArray2 = 'hello world';

function printMe(isPrint) {
    if (isPrint) {
        var message = 'hello world';
    }
    console.log(message);
}
printMe(true);
printMe(false);
