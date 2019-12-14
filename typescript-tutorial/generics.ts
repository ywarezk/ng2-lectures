

class Person<T> {
    constructor(private id: T){

    }
}

const person = new Person<string>('stam');
const person = new Person('stam');
// const person2 = new Person<string>(234); // error


interface IFirstName {
    firstName: string;
}

function stam<T extends IFirstName>(message: T) {

}