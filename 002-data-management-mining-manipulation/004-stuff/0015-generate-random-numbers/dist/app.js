"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_1 = require("./a");
function generateRandomNumbers() {
    let minNumber = 0;
    let maxNumber = 1000;
    const min = Math.ceil(minNumber);
    const max = Math.floor(maxNumber);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log((0, a_1.generateAnotherRandomNumbers)(100));
console.log(generateRandomNumbers());
