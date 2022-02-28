"use strict";
/*

*/
let a = 50;
let b = 100;
let c;
let d = (a > b ? 'a is greater than b' : 'a is less than b');
const check = (a, b) => {
    if (a > b) {
        c = 'a value: is greater than b value';
    }
    else {
        c = 'a value: is not greater than b value';
    }
    console.log(c);
};
const checkAgain = (a, b) => {
    switch (a > b) {
        case a > b: {
            console.log(c = 'a value: is greater than b value');
            break;
        }
        case a < b: {
            console.log(c = 'a value: is less b value');
            break;
        }
        default: {
            console.log(c = 'a value: is equal b value');
            break;
        }
    }
};
check(a, b);
checkAgain(a, b);
console.log(d);
