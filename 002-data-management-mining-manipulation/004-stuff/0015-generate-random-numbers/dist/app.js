"use strict";
function generateRandomNumbers() {
    let minNumber = 0;
    let maxNumber = 1000;
    const min = Math.ceil(minNumber);
    const max = Math.floor(maxNumber);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomNumbers());
