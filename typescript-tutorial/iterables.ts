
const myGenFun = function* (startIndex: number = 0): Generator {
    console.log('this will run when we call next');
    const item = yield startIndex + 1;
    console.log('this will run on second yield');
    yield `${startIndex + 2}${item}`;
    yield startIndex + 3;
    return 100;
};

const gen: Generator = myGenFun();
console.log("the body won't run until you call next")

console.log(gen.next().value); // 1
console.log(gen.next('tofu').value); // 2tofu
console.log(gen.next().value); // 3
console.log(gen.next().value); // 100

console.log('Next example');

class SortedArray<T> extends Array<T> {
    *[Symbol.iterator]() {
        for(let i=0; i<this.sort().length; i++) {

        }
    }
}

const mySortedArray: SortedArray<number> = new SortedArray<number>(10, 1, 0, 20, -1);

for (let item of mySortedArray) {
    console.log(item);
}