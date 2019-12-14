
declare var global: any;

// without use strict this will be equal to global in node and to window in browser

function thisGlobal() {
    console.log(this === global);
}

thisGlobal();

function thisIsUndefined() {
    'use strict'
    console.log(this);
}

thisIsUndefined();

// this will be determined when function is called

const myDict = {a: thisIsUndefined};
myDict.a();
var stam = myDict.a;
stam();

//                       _________
//                       |       |  ----
//         ______________|       |  ----
//        |                      |  ----
// -  -  -|                      |  ----
//        |______________        |   ----
//                       |       |     ----
//                       |_______|  ---
