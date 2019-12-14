import 'zone.js';

const zone: Zone = Zone.current.fork({
    name: 'stam',
    properties: {
        message: 'hello world'
    },
    onHasTask: (rootZone, currentZone, targetZone, hasTaskState) => {
        if (!hasTaskState.macroTask && !hasTaskState.microTask && !hasTaskState.eventTask) {
            console.log('needs to run "$digest"');
        }
    }
});
// const zone1: Zone = new Zone(Zone.current, {name: 'stam'});


function a() {
    console.log(Zone.current.name);
    console.log(Zone.current.get('message'));
}


function main() {
    setTimeout(a);
}

zone.run(main);


