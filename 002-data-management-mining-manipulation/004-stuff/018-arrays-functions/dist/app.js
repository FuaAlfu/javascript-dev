"use strict";
let myArray = [66, 99, 871, 87, 5, 12, 70, 32, 400, 91];
const test = (a) => {
    for (let i = 0; i < a.length; i++) {
        console.log(a.pop());
    }
    console.log(a);
};
//---
const testTwo = (a) => {
    for (let i = 0; i < a.length; i++) {
        console.log(a.unshift());
    }
    console.log(a);
};
//---
const testThree = (a) => {
    for (let i = 0; i < a.length; i++) {
        console.log(a.shift());
    }
    console.log(a);
};
//---
const testLast = (a) => {
    for (let i = 0; i < a.length; i++) {
        console.log(a.push(a[i]));
    }
    console.log(a);
};
test(myArray);
console.log('===');
testTwo(myArray);
console.log('===');
testThree(myArray);
console.log('===');
//testLast(myArray);
