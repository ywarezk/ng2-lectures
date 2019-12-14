const myDict = new Proxy({}, {
    get: (target, key) => {
        return target[key] + " What's you talking about willice"
    },
    set: (target, key, value) => {
        console.log(`now setting the key: ${key}`);
        target[key] = value;
        return true;
    }
});

myDict['hello'] = 'hello world';
console.log(myDict['hello']);

