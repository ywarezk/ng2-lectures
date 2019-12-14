

interface IName {
    firstName: string;
    lastName: string;
}

export default abstract class Person implements IName{
    public set name(value: string) {
        this.firstName = value.split(' ')[0];
        this.lastName = value.split(' ')[1];
    }

    public get name(): string {
        return `${this.firstName} ${this.lastName}`
    }

    constructor(
        public firstName: string = 'Yariv',
        public lastName: string = 'Katz') {

    }

    // public abstract sayHello(): string;
}

export class Student<T extends number | string> extends Person {
    private static _instance: Student<number | string>;

    public static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new this();
    }

    private constructor(
        public firstName: string = 'Yariv',
        public lastName: string = 'Katz',
        public grade: T = null
        ) {
        super(firstName, lastName);
    }
}

// const person: Person = new Person();
// const student: Student = new Student();

// stam = 10;