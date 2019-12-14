// Symbol

const dict: {[key: string]: any} = {

}

//dict[Symbol()] = 10;

// i want to add a property that is only used by my library

dict['isActive'] = false;

// this property is now public it will be printed and iterated

for (let key in dict) {
    console.log(key);
}

console.log(Object.keys(dict));

// i dont want the user to iterate on my key
// i dont want anyone to accidently overwrite my property

dict[Symbol('isActive2')] = false;


for (let key in dict) {
    console.log(key);
}

console.log(Object.keys(dict));

// Symbol is a primitive
// it is immutable
// the value is always unique
// it allows you to add private logic although they are not completly private

console.log(Object.getOwnPropertySymbols(dict));

// if u don't have a refrence to the symbol you will not be able to modify the property you set
// there is a global registry of symbols
// Symbol.for('key') will search for symbol in the global registry if not found will create a new one
// Symbol.keyFor(sym) retrieves a keys for a shared symbol

const globalSymbol: Symbol = Symbol.for('yariv');
dict[globalSymbol as any] = 'hello world';
console.log(Object.getOwnPropertySymbols(dict));

// known global symbols are save as static in the Symbol






