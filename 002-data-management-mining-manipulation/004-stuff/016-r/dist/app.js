"use strict";
let s = "test";
console.log(s);
const smallestDivisor = (number) => {
    const iter = (args) => {
        if (args > number / 2) {
            console.log(number);
        }
        if (number % args === 0) {
            console.log(args);
        }
        console.log(iter(args + 1));
    };
    return iter(2);
};
smallestDivisor(30);
