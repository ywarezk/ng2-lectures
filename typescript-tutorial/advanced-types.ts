

const myArray: number[] = [1,2,3];
// console.log(myArray.splice(0));
// console.log(myArray);
console.log(myArray.splice(0,1));
console.log(myArray);

const myNumDict: {[key: string]: number} = {a: 10, b: 20};
myNumDict['d'] = 10; // error
myNumDict.c = 30;
// myNumDict.d = true; // error
console.log(Object.keys(myNumDict));

delete myNumDict.c;
console.log(Object.keys(myNumDict));

delete myNumDict['b'];
console.log(Object.keys(myNumDict));

console.log(myNumDict.hasOwnProperty('a'));

const computedKeys: {[key: number]: any} = {1: 'stam'};

function createRandom(): number {
    return Math.random();
}

const computedKeys2: {[key: number]: any} = {[createRandom()]: 'stam'};

// computed property

const computedProperty: {[key: string]: any} = {
    sayHello: function sayHello() {return 'hi call me'},
    get sayHello2() {return 'hi';},
    set wat(val: string) {this.sayHello = val;}
}

console.log(computedProperty.sayHello());
console.log(computedProperty.sayHello2);
computedProperty.wat = 'i changed the function';
console.log(computedProperty.sayHello);



