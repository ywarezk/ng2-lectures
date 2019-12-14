define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Person {
        constructor(firstName = 'Yariv', lastName = 'Katz') {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        set name(value) {
            this.firstName = value.split(' ')[0];
            this.lastName = value.split(' ')[1];
        }
        get name() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    exports.default = Person;
    class Student extends Person {
        constructor(firstName = 'Yariv', lastName = 'Katz', grade = null) {
            super(firstName, lastName);
            this.firstName = firstName;
            this.lastName = lastName;
            this.grade = grade;
        }
        static getInstance() {
            if (this._instance) {
                return this._instance;
            }
            this._instance = new this();
        }
    }
    exports.Student = Student;
});
// const person: Person = new Person();
// const student: Student = new Student();
// stam = 10; 
//# sourceMappingURL=person.js.map