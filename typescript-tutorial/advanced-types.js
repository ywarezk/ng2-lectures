var myArray = [1, 2, 3];
// console.log(myArray.splice(0));
// console.log(myArray);
console.log(myArray.splice(0, 1));
console.log(myArray);
var myNumDict = { a: 10, b: 20 };
myNumDict['d'] = 10; // error
myNumDict.c = 30;
// myNumDict.d = true; // error
console.log(Object.keys(myNumDict));
delete myNumDict.c;
console.log(Object.keys(myNumDict));
delete myNumDict['b'];
console.log(Object.keys(myNumDict));
console.log(myNumDict.hasOwnProperty('a'));
var computedKeys = { 1: 'stam' };
function createRandom() {
    return Math.random();
}
var computedKeys2 = (_a = {}, _a[createRandom()] = 'stam', _a);
// computed property
var computedProperty = {
    sayHello: function sayHello() { return 'hi call me'; },
    get sayHello2() { return 'hi'; },
    set wat(val) { this.sayHello = val; }
};
console.log(computedProperty.sayHello());
console.log(computedProperty.sayHello2);
computedProperty.wat = 'i changed the function';
console.log(computedProperty.sayHello);
var _a;
