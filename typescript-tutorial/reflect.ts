const myDict = {}
Reflect.set(myDict, 'stam', 'hello world');
console.log(myDict['stam']);
var myProto = {
    hello: () => console.log('hello world')
}
Reflect.setPrototypeOf(myDict, myProto);
(myDict as any).hello();
// Object.setPrototypeOf()