"use strict";
// map
const myMap = new Map();
const stringKey = 'a string key';
const objKey = {};
const arrKey = [];
myMap.set(stringKey, 'stam');
myMap.set(objKey, 'stam object');
myMap.set(arrKey, 'stam array');
console.log(myMap.get({}));
console.log(myMap.get(objKey));
console.log(myMap.get([]));
console.log(myMap.get(arrKey));
console.log(myMap[stringKey]);
//# sourceMappingURL=map.js.map