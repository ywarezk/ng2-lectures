import 'zone.js/dist/zone-node';



// this is the root zone
const root: Zone = Zone.current;
console.log(root.name);


const angularZone: Zone = root.fork({
    name: 'angular',
    onHasTask: (parentZone: ZoneDelegate, currentZone: Zone, targetZone: Zone, hasTaskState: HasTaskState) => {
        console.log(`The event loop has changed: ${JSON.stringify(hasTaskState)}`)
    }
});

angularZone.run(() => {
    setTimeout(() => {
        console.log('running timeout, after it returns we should run Change Detection')
    }, 1000);

    const timerPromise: Promise<string> = new Promise((resolve, reject) => {
        console.log('running promise');
        setTimeout(() => {
            console.log('promise is resolving');
            resolve('hello');
        })
    });

    timerPromise.then(() => {
        console.log('listener is invoked');
    })
});