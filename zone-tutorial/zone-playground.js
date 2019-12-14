

// zone js and stack traces

require('zone.js');
require('zone.js/dist/long-stack-trace-zone');

// function c() {
//     throw new Error('wat?');
// }
//
// function b() {
//     const secondbutton = document.getElementById('error');
//     secondbutton.addEventListener('click', c);
// }
// //
// function a() {
//     const button = document.getElementById('bind');
//     button.addEventListener('click', b);
// }
// //
// Zone.current.fork(Zone.longStackTraceZoneSpec).run(a);


// function b() {
//     throw new Error('wat?');
// }
//
// function a() {
//     setTimeout(b);
// }


const zone = new Zone();


function main() {
    setTimeout(a);
}

Zone.current.fork(Zone.longStackTraceZoneSpec).run(main);