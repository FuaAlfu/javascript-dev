"use strict";
let s = "typescript";
function reverseString(s) {
    return s.split("").reverse().join("");
}
function reverseAgain(s) {
    let charArray = s.split('');
    console.log(charArray);
    let reverseArray = charArray.reverse();
    console.log(reverseArray);
    let reversedArray = reverseArray.join('');
    console.log(reversedArray);
}
console.log(reverseString(s));
console.log('----');
reverseAgain(s);
