const mySet: Set<any> = new Set<any>([1,1,1,2,2,2, 'hello', 'hello', {}, {}]);

console.log(mySet.add(1));
console.log(mySet.has({}));
console.log(mySet.has(1));

console.log('set is iterable');
for (let item of mySet) {
    console.log(item);
}