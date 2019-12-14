/**
 * Created by yarivkatz on 02/01/2018.
 */

console.log('1');
const stringPromise: Promise<string> = new Promise((resolve, reject) => {
    console.log('2');
    // setTimeout(() => {
    //     console.log('4');
        // resolve(10); // must be resolved with string
        resolve('hello from promise');
    // }, 1000);
});
console.log('3');

stringPromise.then((message: string) => {
    console.log('5');
    console.log(message);
})
console.log('4');

class Task {
    public title: string = '';
    public when: Date = new Date();

    constructor(json: {[key: string]: any}) {
        this.title = json.title || '';
        this.when = json.when ? new Date(json.when) : new Date();
    }

    sayHello() {
        return `${this.title} ${this.when}`;
    }
}

const promiseTasks: Promise<Task[]> = fetch('https://nztodo.herokuapp.com/api/task/?format=json').then((res: Response) => {
    return res.json().then((jsonTasks: Array<any>) => {
        return jsonTasks.map((singleJson) => {
            return new Task(singleJson);
        })
    });
});

promiseTasks.then((tasks: Task[]) => {
    tasks[0].sayHello();
});