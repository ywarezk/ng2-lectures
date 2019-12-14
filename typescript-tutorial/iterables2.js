

class SortedArray extends Array {
    *[Symbol.iterator]() {
        const clone = this.splice(0);
        clone.sort();
        for(let i=0; i<clone.length; i++) {
            yield clone[i];
        }
    }
}

const temp = new SortedArray(1,0,5,-1);
for(let item of temp) {
    console.log(item);
}