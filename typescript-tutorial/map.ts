// map

const myMap: Map<any, any> = new Map<any, any>();

const stringKey: string = 'a string key';
const objKey: {[key: string]: string} = {};
const arrKey: any[] = [];

myMap.set(stringKey, 'stam');
myMap.set(objKey, 'stam object');
myMap.set(arrKey, 'stam array');


console.log(myMap.get({}));
console.log(myMap.get(objKey));
console.log(myMap.get([]));
console.log(myMap.get(arrKey));
console.log(myMap[stringKey]);
